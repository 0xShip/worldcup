// import conceptMessi from '@/assets/concept-messi.jpg'
// import conceptGermany from '@/assets/concept-germany.jpg'
// import conceptCruyff from '@/assets/concept-cruyff.jpg'
import conceptBrazil from '@/assets/concept-brazil.jpg'
import conceptRonaldo from '@/assets/concept-ronaldo.png'
import pic1 from '@/assets/1.jpg'
import pic2 from '@/assets/2.jpg'
import pic3 from '@/assets/3.jpg'
import pic4 from '@/assets/4.jpg'
import pic5 from '@/assets/5.jpg'
import pic6 from '@/assets/6.jpg'

import { motion } from 'framer-motion'

const concepts = [
    // { src: conceptMessi, label: 'LEGEND × LOBSTER' },
    // { src: conceptGermany, label: 'DEUTSCHLAND EDITION' },
    // { src: conceptCruyff, label: 'TOTAL FOOTBALL' },
    { src: conceptBrazil, label: 'THE SAMBA' }, // 巴西
    { src: conceptRonaldo, label: 'THE SIUUU' }, // 罗纳尔多
    { src: pic1, label: 'THE TEAM' }, // 西班牙
    { src: pic2, label: 'THE GOAT' }, // 梅西
    { src: pic3, label: 'THE SHOT' }, // 姆巴佩
    { src: pic4, label: 'THE CELEBRATION' }, // 贝克汉姆
    { src: pic5, label: 'THE LEGEND' }, // 马拉多纳
    { src: pic6, label: 'THE ENJOYMENT' }, // 斯内德
]

// Double for seamless marquee
const doubled = [...concepts, ...concepts]

export default function ConceptGallery() {
    return (
        <section className="py-12 overflow-hidden">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring' as const, duration: 0.5, bounce: 0 }}
                className="font-vt323 text-white text-[32px] md:text-[52px] leading-none tracking-[2px] md:tracking-[4px] mb-10 text-center text-glow-title">
                FOOTBALL AI COLLECTION
            </motion.p>

            <div className="relative">
                <div className="flex gap-6 animate-marquee w-max">
                    {doubled.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-52 md:w-80 group">
                            <div className="overflow-hidden rounded-2xl glass-surface">
                                <img src={item.src} alt={item.label} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                            </div>
                            <p className="text-accent text-[14px] tracking-[0.3em] uppercase font-body mt-3 text-center">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
