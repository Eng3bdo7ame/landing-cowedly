import Image from 'next/image'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { CiVideoOn, CiCreditCard2 } from 'react-icons/ci'
import { FaRegFolderOpen, FaUser } from 'react-icons/fa'
import { GrNotes } from 'react-icons/gr'

export default function EssentialFeatures() {
    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto ">


                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    <FeatureCard
                        icon={<HiOutlineClipboardList className="w-8 h-8" />}
                        title="انجازتنا"
                        description="على مدار السنوات اللي فاتت، قدرنا ننفذ مشاريع مع شركات كبيرة وصغيرة في مجالات مختلفة. سواء كان في التجارة الإلكترونية، التعليم، أو الصحة، مشاريعنا بتتكلم عننا. والحمد لله، كل عملائنا كانوا راضيين عن النتائج اللي حققناها"
                    />
                    <FeatureCard
                        icon={<CiVideoOn className="w-8 h-8" />}
                        title="عن ما نقدم "
                        description="بنقدم مجموعة واسعة من الخدمات البرمجية عشان نغطي كل احتياجاتك. من تطوير مواقع الإنترنت اللي تقدر تعتمد عليها، لتطبيقات موبايل بتشتغل بكفاءة عالية على كل الأجهزة. وبنحرص دايمًا إن كل الحلول اللي بنقدمها تكون سهلة الاستخدام وبتحقق أعلى جودة"
                        image="/teamWotk.jpg"
                        large
                    />
                    <FeatureCard
                        icon={<FaRegFolderOpen className="w-8 h-8" />}
                        title="عن كَوّدْلْيِ "
                        description="إحنا في كَوّدْلْيِ بنؤمن إن التكنولوجيا هي المفتاح لعالم أبسط وأسرع. فريقنا متخصص في تطوير حلول برمجية متكاملة بتساعد الشركات على النمو وتقديم أفضل تجربة لعملائها. سواء كنت محتاج ويب سايت، تطبيق موبايل، أو نظام إدارة كامل، إحنا هنا علشان نساعدك"
                    />
                    <FeatureCard
                        icon={<CiCreditCard2 className="w-8 h-8" />}
                        title="عميلك"
                        description="في كَوّدْلْيِ بالنسبالنا العميل هو الأولوية رقم 1. بنفهم احتياجاتك ونعمل بكل طاقتنا عشان نحققها. مش بنكتفي بتقديم خدمة، إحنا بنبني علاقة طويلة الأمد مبنية على الثقة والاحترام"
                        image="/teamWotk.jpg"
                        large
                    />

                    <FeatureCard
                        icon={<GrNotes className="w-8 h-8" />}
                        title="رؤيتنا"
                        description="رؤيتنا هي إننا نكون الشريك الأساسي لأي شركة أو مؤسسة بتدور على حلول برمجية مبتكرة. إحنا شايفين المستقبل كله في التكنولوجيا، وهدفنا إننا نساعد عملائنا يبقوا جزء من المستقبل ده"
                        image="/teamWotk.jpg"
                        large
                    />


                    <FeatureCard
                        icon={<FaUser className="w-8 h-8" />}
                        title="لو عندي فكره"
                        description="لو عندك فكرة لمشروع وعايز تبدأ تنفذها، إحنا هنا لمساعدتك! تواصل معانا النهارده وخلي فريق كَوّدْلْيِ يحول فكرتك لحقيقة"
                    />

                </div>
            </div>
        </div>
    )
}

function FeatureCard({ icon, title, description, image, large = false }) {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md flex flex-col ${large ? 'row-span-2' : ''}`}>
            <div className="flex items-center justify-end mb-4 text-right ">
                <h2 className="text-xl font-semibold pr-3">{title}</h2>
                <div className="text-blue-500 mr-3">{icon}</div>
            </div>
            <p className="text-right text-gray-600 flex-grow">{description}</p>
            {image && (
                <div className="mt-auto">
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            )}
        </div>
    )
}