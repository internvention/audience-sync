import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
    return (
        <header className="w-full py-6 px-8">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Audience Sync
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="#features" className="text-gray-600 hover:text-blue-600">
                        Features
                    </Link>
                    <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="text-gray-600 hover:text-blue-600">
                        Pricing
                    </Link>
                </nav>
                <div className="flex space-x-4">
                    <Button variant="outline">Log In</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </header>
    )
}