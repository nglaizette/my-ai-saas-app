"use client";

import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";

import { cn } from "@/lib/utils";

const lato = Lato({ weight: '700', subsets:["latin"]});

const Sidebar = ( ) => {
	return (
		<div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
			<div className="px-3 py-2 flex-1">
				<Link href="/dashboard" className="flex items-center pl-3 nb-14">
					<div className="relative w-8 h-8 nr-4">
						<Image 
							fill
							alt="Logo"
							src="/logo.png"
							/>
					</div>
					<h1 className={cn("text-2xl font-bold", lato.className)}>
						Genius
					</h1>
				</Link>
			</div>
		</div>
	);
} 

export default Sidebar