import { motion } from 'framer-motion';
import { Lightbulb, Sparkles } from 'lucide-react';

const Insight = () => {
  return (
    <section className="min-h-[70vh] gradient-section-alt py-24 px-4 flex items-center justify-center overflow-hidden relative">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-purple-500/5"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8"
        >
          <Lightbulb className="w-10 h-10 text-amber-400" />
        </motion.div>

        {/* Main Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-8"
        >
          If AI can understand{' '}
          <span className="text-gradient-blue">images</span>,{' '}
          <span className="text-gradient-purple">languages</span>, and{' '}
          <span className="text-gradient-green">chemistry</span>...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-gray-300 font-medium"
        >
          Why can't it understand food restrictions{' '}
          <span className="text-white font-bold">the way humans experience them?</span>
        </motion.p>

        {/* Sparkle decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center gap-2 mt-8"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              <Sparkles className={`w-5 h-5 ${i === 1 ? 'text-amber-400' : 'text-gray-600'}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Insight;
