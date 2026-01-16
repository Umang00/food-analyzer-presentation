import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ from, to, suffix = '', prefix = '', duration = 2 }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

const marketData = [
  {
    label: 'TAM',
    fullLabel: 'Total Addressable Market',
    value: 8,
    suffix: 'M+',
    description: 'Global Jain/Vaishnava/Vegan diaspora',
    icon: TrendingUp,
    color: 'green',
  },
  {
    label: 'SAM',
    fullLabel: 'Serviceable Available Market',
    value: 2,
    suffix: 'M',
    description: 'Travelers + Diaspora in Western countries',
    icon: Users,
    color: 'blue',
  },
  {
    label: 'SOM',
    fullLabel: 'Serviceable Obtainable Market',
    value: 10,
    suffix: 'K',
    description: 'Year 1 Active Users Target',
    icon: Target,
    color: 'purple',
  },
];

const colorClasses: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  green: { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500/10', glow: 'shadow-green-500/20' },
  blue: { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10', glow: 'shadow-blue-500/20' },
  purple: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'shadow-purple-500/20' },
};

const Market = () => {
  return (
    <section className="min-h-screen gradient-section py-24 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4 block">
            Market Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            A <span className="text-gradient-green">Growing</span> Underserved Market
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Diaspora communities are growing. Their needs aren't being met.
          </p>
        </motion.div>

        {/* Market Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {marketData.map((item, index) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-card ${colors.border} border p-8 text-center hover:shadow-2xl ${colors.glow} transition-shadow duration-500`}
              >
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                <p className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-2`}>{item.label}</p>
                <p className="text-xs text-gray-500 mb-4">{item.fullLabel}</p>

                <motion.p
                  className="text-5xl md:text-6xl font-black mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Counter from={0} to={item.value} suffix={item.suffix} />
                </motion.p>

                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Growth Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            📈 Global vegetarian/vegan population <span className="text-white font-semibold">growing 300%+ over the past decade</span>. Religious dietary needs remain underserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
