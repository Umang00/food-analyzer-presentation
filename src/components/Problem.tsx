import { motion } from 'framer-motion';
import { AlertTriangle, Globe, Barcode, XCircle } from 'lucide-react';
import memeImage from '../assets/meme1.png';

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Confusing Labels',
    description: 'E-codes and chemical names hide animal derivatives.',
  },
  {
    icon: Globe,
    title: 'Cultural Differences',
    description: '"Vegetarian" means different things in different countries.',
  },
  {
    icon: Barcode,
    title: 'Barcode Dependency',
    description: 'Existing apps need barcodes. Travel abroad? They break.',
  },
  {
    icon: XCircle,
    title: 'No Religious Nuance',
    description: 'Zero understanding of Jain, Vaishnav, or Swaminarayan rules.',
  },
];

const Problem = () => {
  return (
    <section className="min-h-screen gradient-section-alt py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-red-400 mb-4 block">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Millions Make Food Decisions Based on{' '}
            <span className="text-gradient-purple">Guesswork</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Meme */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-3xl blur-2xl" />
            <img
              src={memeImage}
              alt="Confused about ingredients meme"
              className="relative z-10 w-full rounded-3xl shadow-2xl border border-white/10"
            />

          </motion.div>

          {/* Right: Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-5 flex gap-4 group hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                      <p className="text-gray-400 text-sm">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-4 border-l-4 border-red-500 bg-red-500/5"
            >
              <p className="text-gray-300 italic">
                "I usually just skip products I'm unsure about..."
              </p>
              <p className="text-gray-500 text-sm mt-1">— User Interview</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
