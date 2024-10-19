import { Database, Users, BarChart, Zap } from 'lucide-react'

const features = [
    {
        icon: <Database className="h-10 w-10 text-blue-500" />,
        title: 'Data Integration',
        description: 'Seamlessly integrate your warehouse data for comprehensive audience insights.',
    },
    {
        icon: <Users className="h-10 w-10 text-blue-500" />,
        title: 'Smart Segmentation',
        description: 'Leverage AI to create precise audience segments for targeted campaigns.',
    },
    {
        icon: <BarChart className="h-10 w-10 text-blue-500" />,
        title: 'Real-time Analytics',
        description: 'Monitor campaign performance and audience engagement in real-time.',
    },
    {
        icon: <Zap className="h-10 w-10 text-blue-500" />,
        title: 'Automated Workflows',
        description: 'Streamline your marketing efforts with intelligent automation.',
    },
]

export default function Features() {
    return (
        <section id="features" className="py-20 bg-white px-4 md:px-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}