import Image from 'next/image'
import { CircleUserRound } from 'lucide-react'

const testimonials = [
    {
        quote: "Audience Sync has revolutionized our B2B marketing strategy. The AI-powered segmentation is a game-changer.",
        author: "Jane Doe",
        position: "Marketing Director, TechCorp",
        avatar: "/placeholder.svg?height=100&width=100",
    },
    {
        quote: "The automation capabilities have saved us countless hours and improved our campaign effectiveness tenfold.",
        author: "John Smith",
        position: "CEO, GrowthStartup",
        avatar: "/placeholder.svg?height=100&width=100",
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-blue-50 px-2 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                            <div className="flex items-center">
                                {/* <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                /> */}
                                <CircleUserRound className='mr-4'/>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}