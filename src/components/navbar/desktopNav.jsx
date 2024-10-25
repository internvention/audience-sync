import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { auth, signOut, signIn } from "@/auth";
import { FaSpotify } from "react-icons/fa6";
import { BiSolidDoorOpen } from "react-icons/bi";
import { navItems } from "@/data/navItems";
export default async function DesktopNav() {
    const session = await auth();
    const user = session?.user;

    return (
        <nav className="md:flex justify-between items-center py-3 px-12 hidden">
            <h2 className='font-mono font-bold text-blue-500 text-xl'>Audience Sync</h2>
            <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                    <li key={item.id} className="hover:bg-gray-200 py-0.5 px-2 rounded transition-colors duration-300">
                        <Link href={item.link} className="flex items-center gap-x-2">
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-x-2">
                {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="cursor-pointer size-9">
                                <AvatarImage src={user.image || "/noavatar.png"} />
                                <AvatarFallback>EU</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Hi {user?.name || user?.email}</DropdownMenuLabel>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <form className="w-full"
                                    action={async () => {
                                        "use server";
                                        await signOut();
                                    }}
                                >
                                    <button className="w-full text-red-500 flex items-center gap-2 font-bold"><BiSolidDoorOpen size={20} />Logout</button>
                                </form>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <div className="flex items-center">
                        <Button asChild className="bg-white">
                            <form className="w-full"
                                action={async () => {
                                    "use server";
                                    await signIn("spotify");
                                }}
                            >
                                <button className="w-full text-[#1db954] flex items-center gap-2 font-bold"><FaSpotify /> Log In</button>
                            </form>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}