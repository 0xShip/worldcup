import act from '@/assets/act.png'
import logo from '@/assets/logo-designer.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TARGET_DATE = new Date('2026-06-11T19:00:00Z') // FIFA World Cup 2026 开幕 (北京时间 6月12日 03:00)

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
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...transition, duration: 1 }} className="relative z-10 mb-8">
                <img src={logo} alt="World Cup Lobster Logo" className="w-40 h-20 md:w-56 md:h-56 object-contain drop-shadow-[0_0_40px_rgba(255,77,0,0.25)]" />
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.5 }}
                className="font-display font-black text-2xl md:text-4xl leading-none uppercase text-foreground text-center">
                YOUR OPENCLAW IS WAITING
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.6 }}
                className="text-muted-foreground text-sm md:text-base font-body mt-4 text-center max-w-md">
                World Cup Lobster. The intersection of legend and anatomy.
            </motion.p>

            {/* Act image */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...transition, duration: 1 }} className="relative z-10 mb-8">
                <img src={act} alt="World Cup Lobster Logo" className="w-40 h-20 md:w-56 md:h-56 object-contain drop-shadow-[0_0_40px_rgba(255,77,0,0.25)]" />
            </motion.div>

            {/* Title */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: 0.2 }}
                className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-body mb-6">
                PREPARING FOR KICKOFF
            </motion.p>

            {/* Countdown numbers */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.3 }} className="flex items-center gap-3 md:gap-6 z-10">
                {[
                    { val: time.days, label: 'DAYS' },
                    { val: time.hours, label: 'HRS' },
                    { val: time.minutes, label: 'MIN' },
                    { val: time.seconds, label: 'SEC' }
                ].map((item, i) => (
                    <div key={item.label} className="flex flex-col items-center">
                        <span className="font-display font-black text-[clamp(1.5rem,3vw,2rem)] leading-none tracking-tighter text-foreground text-glow-lobster tabular-nums">{pad(item.val)}</span>
                        <span className="text-muted-foreground text-[10px] tracking-[0.3em] mt-2 font-body">{item.label}</span>
                        {i < 3 && <span className="absolute text-muted-foreground/30 text-[clamp(2rem,6vw,5rem)] font-display" style={{ position: 'relative' }}></span>}
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
