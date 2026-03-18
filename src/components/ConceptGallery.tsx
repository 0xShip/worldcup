import conceptBrazil from '@/assets/concept-brazil.jpg'
import conceptCruyff from '@/assets/concept-cruyff.jpg'
import conceptGermany from '@/assets/concept-germany.jpg'
import conceptMessi from '@/assets/concept-messi.jpg'
import conceptRonaldo from '@/assets/concept-ronaldo.jpg'
import pic6 from '@/assets/1.jpg'
import pic7 from '@/assets/2.jpg'
import pic8 from '@/assets/3.jpg'

import { motion } from 'framer-motion'

const concepts = [
    { src: conceptMessi, label: 'LEGEND × LOBSTER' },
    { src: conceptGermany, label: 'DEUTSCHLAND EDITION' },
    { src: conceptCruyff, label: 'TOTAL FOOTBALL' },
    { src: conceptBrazil, label: 'SAMBA COLLECTION' },
    { src: conceptRonaldo, label: 'THE CELEBRATION' },
    { src: pic6, label: 'THE CELEBRATION' },
    { src: pic7, label: 'THE SAMBA' },
    { src: pic8, label: 'THE DEUTSCHLAND' },
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
                className="text-accent text-[10px] tracking-[0.3em] uppercase font-body mb-10 text-center">
                CONCEPT COLLECTION
            </motion.p>

            <div className="relative">
                <div className="flex gap-6 animate-marquee w-max">
                    {doubled.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-72 md:w-96 group">
                            <div className="overflow-hidden rounded-2xl glass-surface">
                                <img src={item.src} alt={item.label} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                            </div>
                            <p className="text-accent text-[10px] tracking-[0.3em] uppercase font-body mt-3 text-center">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
