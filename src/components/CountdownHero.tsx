import act from '@/assets/act.jpg'
import logo from '@/assets/logo-designer.png'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2026-06-11T19:00:00Z') // FIFA World Cup 2026 开幕 (北京时间 6月12日 03:00)
const EMAIL = 'lobster@kickgpt.ai'
const SUBJECT = encodeURIComponent('Subscribe — World Cup Lobster')
const BODY = encodeURIComponent("Hi, I'd like to subscribe and stay updated on World Cup Lobster!")

function getTimeLeft() {
    const now = new Date().getTime()
    const diff = TARGET_DATE.getTime() - now
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    }
}

const transition = { type: 'spring' as const, duration: 0.5, bounce: 0 }

export default function CountdownHero() {
    const [time, setTime] = useState(getTimeLeft)

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000)
        return () => clearInterval(id)
    }, [])

    const pad = (n: number) => String(n).padStart(2, '0')

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[60svh] overflow-hidden px-4">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            {/* Lobster image */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...transition, duration: 1 }} className="relative z-10 mt-5">
                <img src={logo} alt="World Cup Lobster Logo" className="w-40 h-20 md:w-56 md:h-40 object-contain drop-shadow-[0_0_40px_rgba(255,77,0,0.25)]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.5 }}
                className="font-vt323 text-white text-[32px] md:text-[52px] leading-none tracking-[2px] md:tracking-[4px] mb-2 text-center text-glow-title">
                YOUR LOBSTER IS WAITING
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.6 }}
                className="text-[#c7b7a6] text-[15px] tracking-[2px] font-body mt-4 mb-6 text-center max-w-md leading-[1.8]">
                <p className="block">
                    &gt; INITIALIZING SECURE UPLINK... [
                    <span className="text-[#ff6b35]">OK</span>]
                </p>
                <p className="block">&gt; SOURCE: KICKGPT COMMAND</p>
                <p className="block">&gt; SUBJECT: CLAIM YOUR FOOTBALL AI</p>
                <p className="block">
                    &gt; <span className="text-[#ff6b35]">WARNING</span>: LIMITED SLOTS. NO SECOND CHANCES.
                </p>
            </motion.div>

            {/* Act image */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...transition, duration: 1 }} className="relative z-10 mb-8">
                <img
                    src={act}
                    alt="World Cup Lobster Logo"
                    className="w-[25rem] h-[10rem] md:w-[35rem] md:h-[16rem] object-contain drop-shadow-[0_0_40px_rgba(255,77,0,0.25)]"
                />
            </motion.div>

            {/* Title */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.2 }}
                className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-body mb-6">
                {/* PREPARING FOR KICKOFF */}
            </motion.p>

            {/* Countdown numbers */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.3 }}
                className="flex items-end gap-3 md:gap-4 z-10"
            >
                {[
                    { val: time.days, label: 'DAYS' },
                    { val: time.hours, label: 'HRS' },
                    { val: time.minutes, label: 'MIN' },
                    { val: time.seconds, label: 'SEC' }
                ].map((item, i) => (
                    <div key={item.label} className="flex items-end">
                        <div className="flex flex-col items-center">
                            <span className="font-vt323 font-black text-[32px] md:text-[36px] leading-none text-[#ff6b35] text-glow-lobster tabular-nums">
                                {pad(item.val)}
                            </span>
                            <span className="text-[#c7b7a6] text-[14px] tracking-[2px] mt-[2px] font-body">
                                {item.label}
                            </span>
                        </div>
                        {i < 3 && (
                            <span className="relative font-vt323 text-[28px] md:text-[32px] text-[#3a2a1a] self-center -top-3 md:-top-3 px-1">
                                :
                            </span>
                        )}
                    </div>
                ))}
            </motion.div>

            {/* 按钮 */}
            <motion.a
                href={`mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-3 mt-8 bg-[#c0392b] text-white font-body text-[13px] tracking-[3px] uppercase border-0 cursor-pointer transition-colors duration-200 hover:bg-[#d14a3a] z-10">
                <Mail size={18} />
                <span className="whitespace-nowrap text-[11px] tracking-[2px] md:text-[13px] md:tracking-[3px]">
                    Claim your football lobster
                </span>
            </motion.a>
        </section>
    )
}
