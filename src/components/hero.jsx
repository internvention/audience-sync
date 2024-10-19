import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="h-screen px-12 flex items-center justify-between">
            <div className="mx-auto text-left">
                <h1 className="text-6xl font-bold mb-6">
                    Automate Your B2B Marketing with <span className="text-blue-600 font-mono"><br />Audience Sync</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                    Integrate warehouse data, segment audiences, and create tailored campaigns with AI-powered automation.
                </p>
                <div className="flex justify-start space-x-4">
                    <Button size="lg">Get Started</Button>
                    <Button size="lg" variant="outline">
                        Book a Demo
                    </Button>
                </div>
            </div>
            <Image src='/images/hero.svg' alt='Hero' width={1000} height={1000} className='md:w-1/2' />
        </section>
    )
}