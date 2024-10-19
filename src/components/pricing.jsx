import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
    {
        name: 'Starter',
        price: '$99',
        features: ['Data integration', 'Basic segmentation', 'Email campaigns', '5 team members'],
    },
    {
        name: 'Pro',
        price: '$299',
        features: ['Advanced segmentation', 'AI-powered insights', 'Multi-channel campaigns', 'Unlimited team members'],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Custom data integration', 'Advanced AI capabilities', 'Dedicated support', 'Custom workflows'],
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-4 md:px-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
                            <ul className="mb-8 space-y-2">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}