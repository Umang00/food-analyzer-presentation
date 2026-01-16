import { motion } from 'framer-motion';
import { Shield, Rocket } from 'lucide-react';

const differentiators = [
  {
    icon: Shield,
    title: 'GDPR Compliant',
    description: 'Built with privacy by design. Your data stays yours.',
    color: 'green',
  },
  {
    icon: Rocket,
    title: 'Scalable & Independent',
    description: 'Not dependent on any single platform or regional database. Custom authentication, full control.',
    color: 'blue',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
};

const Differentiators = () => {
  return (
    <section className="py-24 px-4 gradient-section-alt">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 block">
            Why We're Different
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built for <span className="text-gradient-green">Trust</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`glass-card ${colors.border} border p-8 text-center transition-all duration-300`}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
