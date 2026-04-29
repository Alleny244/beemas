import React, { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, OrbitControls, PerspectiveCamera, Environment, ContactShadows, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

// Pre-calculating the geometry with skinning attributes
const pageGeometry = new THREE.BoxGeometry(PAGE_WIDTH, PAGE_HEIGHT, PAGE_DEPTH, PAGE_SEGMENTS, 2);
pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const position = pageGeometry.attributes.position;
const vertex = new THREE.Vector3();
const skinIndexes = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i);
  const x = vertex.x;
  const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
  const skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;
  skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

pageGeometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndexes, 4));
pageGeometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

const Page = ({ number, front, back, opened, bookClosed, bend = 20 }) => {
  const group = useRef();
  const turnedAt = useRef(0);
  const lastOpened = useRef(opened);
  const skinnedMeshRef = useRef();
  
  const textures = useTexture([front, back]);
  textures[0].colorSpace = THREE.SRGBColorSpace;
  textures[1].colorSpace = THREE.SRGBColorSpace;

  const manualSkinnedMesh = useMemo(() => {
    const bones = [];
    for (let i = 0; i <= PAGE_SEGMENTS; i++) {
      const bone = new THREE.Bone();
      bones.push(bone);
      if (i === 0) bone.position.x = 0;
      else bone.position.x = SEGMENT_WIDTH;
      if (i > 0) bones[i - 1].add(bone);
    }
    const skeleton = new THREE.Skeleton(bones);
    const materials = [
      new THREE.MeshStandardMaterial({ color: 'white' }),
      new THREE.MeshStandardMaterial({ color: '#111' }),
      new THREE.MeshStandardMaterial({ color: 'white' }),
      new THREE.MeshStandardMaterial({ color: 'white' }),
      new THREE.MeshStandardMaterial({ map: textures[0], roughness: 0.8 }),
      new THREE.MeshStandardMaterial({ map: textures[1], roughness: 0.8 }),
    ];
    const mesh = new THREE.SkinnedMesh(pageGeometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }, [textures]);

  useFrame((state, delta) => {
    if (!skinnedMeshRef.current) return;
    
    if (lastOpened.current !== opened) {
      turnedAt.current = state.clock.elapsedTime;
      lastOpened.current = opened;
    }

    let turningTime = Math.min(1, (state.clock.elapsedTime - turnedAt.current) / 0.6);
    turningTime = Math.sin(turningTime * Math.PI);

    let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;
    if (!bookClosed) targetRotation += number * 0.01;

    const bones = skinnedMeshRef.current.skeleton.bones;
    for (let i = 0; i < bones.length; i++) {
      const target = i === 0 ? group.current : bones[i];
      if (!target) continue;

      const insideCurveStrength = 0.18;
      const turningCurveStrength = 0.09;
      
      const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
      const turningIntensity = Math.sin((i * Math.PI) / bones.length) * turningTime;
      
      let rotationAngle = (insideCurveStrength * insideCurveIntensity * targetRotation) + 
                         (turningCurveStrength * turningIntensity * targetRotation);

      if (bookClosed && i === 0) rotationAngle = targetRotation;
      else if (bookClosed) rotationAngle = 0;

      easing.dampAngle(target.rotation, 'y', rotationAngle, 0.5, delta);
    }
  });

  return (
    <group ref={group}>
      <primitive object={manualSkinnedMesh} ref={skinnedMeshRef} position-z={-number * PAGE_DEPTH} />
    </group>
  );
};

const Magazine = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  
  return (
    <group rotation-y={-Math.PI / 2} onClick={() => setCurrentPage((prev) => (prev + 1) % (pages.length + 1))}>
      {pages.map((pageData, index) => (
        <Page 
          key={index}
          number={index}
          opened={currentPage > index}
          bookClosed={currentPage === 0 || currentPage === pages.length}
          front={pageData.front}
          back={pageData.back}
        />
      ))}
    </group>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-white/5 rounded-3xl border border-white/10">
          <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Artistry in Progress</h3>
          <p className="text-xs text-text-muted">We're perfecting this visual experience. Please explore our services below.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function MagazineEffect({ frontCover, backCover, pages = [] }) {
  const magazinePages = useMemo(() => {
    const allPages = [];
    // Front cover
    allPages.push({ front: frontCover, back: pages[0] || frontCover });
    // Middle pages
    for (let i = 1; i < pages.length - 1; i += 2) {
      allPages.push({ front: pages[i], back: pages[i + 1] || pages[i] });
    }
    // Back cover
    if (pages.length % 2 === 0 && pages.length > 0) {
      allPages.push({ front: pages[pages.length - 1], back: backCover });
    }
    return allPages;
  }, [frontCover, backCover, pages]);

  return (
    <ErrorBoundary>
      <div className="w-full h-full min-h-[300px] md:min-h-[400px] cursor-pointer overflow-hidden rounded-3xl bg-white/5 relative">
        <Suspense fallback={
          <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/40 space-y-4">
            <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <span className="text-[10px] uppercase tracking-[0.2em]">Developing Artistry...</span>
          </div>
        }>
          <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
            <PerspectiveCamera makeDefault position={[-0.5, 1, 4]} fov={45} />
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
            <Float rotation-x={-Math.PI / 5} floatIntensity={1} speed={2} rotationIntensity={1}>
              <Magazine pages={magazinePages} />
            </Float>
            <Environment preset="city" />
            <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
