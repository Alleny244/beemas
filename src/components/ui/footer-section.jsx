'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
	{
		label: 'Services',
		links: [
			{ title: 'Hair Styling', href: '/services' },
			{ title: 'Skin Rituals', href: '/services' },
			{ title: 'Bridal Makeover', href: '/services' },
			{ title: 'Nail Artistry', href: '/services' },
		],
	},
	{
		label: 'Studio',
		links: [
			{ title: 'Our Story', href: '/about' },
			{ title: 'Gallery', href: '/gallery' },
			{ title: 'Academy', href: '#' },
			{ title: 'Careers', href: '#' },
		],
	},
	{
		label: 'Support',
		links: [
			{ title: 'Booking FAQ', href: '#' },
			{ title: 'Privacy Policy', href: '#' },
			{ title: 'Terms & Conditions', href: '#' },
			{ title: 'Contact Us', href: '/contact' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'Facebook', href: '#', icon: Facebook },
			{ title: 'Instagram', href: 'https://www.instagram.com/beemas_makeover_studio/', icon: Instagram },
			{ title: 'Youtube', href: '#', icon: Youtube },
			{ title: 'LinkedIn', href: '#', icon: Linkedin },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-[4rem] relative w-full flex flex-col items-center justify-center rounded-t-[2rem] border-t border-white/5 bg-[#0A0A0A] px-6 py-12 lg:py-24">
			<div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-sm" />

			<div className="max-w-7xl w-full grid gap-12 xl:grid-cols-3 xl:gap-24">
				<AnimatedContainer className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary bg-primary/5">
                            <Scissors className="size-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-[0.2em] uppercase leading-none text-white">Beemas</span>
                            <span className="text-[8px] tracking-[0.5em] uppercase text-primary font-bold">Studio & Salon</span>
                        </div>
                    </div>
					<p className="text-text-muted text-sm leading-relaxed max-w-sm">
						Redefining elegance through cinematic artistry and luxury grooming. Kerala's premier sanctuary for the discerning.
					</p>
                    <div className="text-text-muted text-xs">
                        © {new Date().getFullYear()} Beemas Makeover Studio. <br /> All rights reserved.
                    </div>
				</AnimatedContainer>

				<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs uppercase tracking-widest font-bold text-primary mb-6">{section.label}</h3>
								<ul className="text-text-muted space-y-4 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												to={link.href}
												className="hover:text-primary inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

function AnimatedContainer({ className, delay = 0.1, children }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
