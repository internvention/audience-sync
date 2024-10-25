"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from '@/components/ui/sheet';
import { navItems } from "@/data/navItems";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";

export default function MobileNav() {
    return (
        <nav className="flex md:hidden items-center justify-between px-4 py-2">
            <h2 className='font-mono font-bold text-blue-500 text-lg'>Audience Sync</h2>
            <Sheet>
                <SheetTrigger asChild>
                    <CgMenuRight size={24} />
                </SheetTrigger>
                <SheetContent side="right" className="bg-white text-black">
                    <SheetHeader>
                        <SheetTitle className="text-white mb-4">On The Spot</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col items-start gap-y-5">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </SheetContent >
            </Sheet>


        </nav>
    )
}