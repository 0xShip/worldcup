import { motion } from 'framer-motion'

const transition = { type: 'spring' as const, duration: 0.5, bounce: 0 }

export default function VideoSection() {
    return (
        <section className="px-6 md:px-20 py-8 max-w-5xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition}
                className="text-accent text-[10px] tracking-[0.3em] uppercase font-body mb-6 text-center">
                THE CINEMATIC
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.1 }}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-video rounded-3xl overflow-hidden glass-surface shadow-heavy cursor-pointer group">
                {/* Placeholder video embed — replace src with actual video */}
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="World Cup Lobster Teaser"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.3 }}
                className="text-muted-foreground text-xs font-body text-center mt-4">
                Keep It Up, Keep It Connected.
            </motion.p>
        </section>
    )
}
