import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { LOBSTER_MAILTO_HREF } from '@/lib/mailto'

const transition = { type: 'spring' as const, duration: 0.5, bounce: 0 }

export default function EmailCapture() {
    return (
        <section className="px-4 py-8 max-w-xl mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={transition} className="text-muted-foreground text-sm font-body mb-6">
                {/* Want to stay in the loop? Drop us a line. */}
            </motion.p>

            {/* 使用原生 <a> 承载 mailto，避免部分 Mac 浏览器下 motion.a 不触发系统邮件 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block">
                <a
                    href={LOBSTER_MAILTO_HREF}
                    className="inline-flex items-center gap-3 px-8 py-3 bg-[#c0392b] text-white font-body text-[13px] tracking-[3px] uppercase border-0 cursor-pointer transition-colors duration-200 hover:bg-[#d14a3a]">
                    <Mail size={18} />
                    <span className="whitespace-nowrap text-[11px] tracking-[2px] md:text-[13px] md:tracking-[3px]">
                        Claim your football lobster
                    </span>
                </a>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.3 }}
                className="text-muted-foreground/50 text-xs font-body mt-4">
                {/* {EMAIL} */}
            </motion.p>
        </section>
    )
}
