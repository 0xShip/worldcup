import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const transition = { type: 'spring' as const, duration: 0.5, bounce: 0 }
const EMAIL = 'lobster@kickgpt.ai'
const SUBJECT = encodeURIComponent('Subscribe — World Cup Lobster')
const BODY = encodeURIComponent("Hi, I'd like to subscribe and stay updated on World Cup Lobster!")

export default function EmailCapture() {
    return (
        <section className="px-4 py-8 max-w-xl mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="text-muted-foreground text-sm font-body mb-6">
                Want to stay in the loop? Drop us a line.
            </motion.p>

            <motion.a
                href={`mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:shadow-[var(--glow-lobster)] transition-shadow duration-300">
                <Mail size={18} />
                Subscribe via Email
            </motion.a>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.3 }}
                className="text-muted-foreground/50 text-xs font-body mt-4">
                {EMAIL}
            </motion.p>
        </section>
    )
}
