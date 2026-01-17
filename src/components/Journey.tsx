import { motion } from 'framer-motion';
import { Clock, Users, Handshake, Rocket } from 'lucide-react';

const Journey = () => {
  const milestones = [
    { icon: Clock, text: '15 Days of Intense Building', color: 'green' },
    { icon: Users, text: 'Endless Debates & Multiple Rewrites', color: 'blue' },
    { icon: Rocket, text: 'First Mobile App for the Team', color: 'purple' },
  ];

  return (
    <section className="min-h-screen gradient-section-alt py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-pink-400 mb-4 block">
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            From Idea to <span className="text-gradient-purple">Reality</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            const colorMap: Record<string, string> = {
              green: 'bg-green-500/10 text-green-400 border-green-500/30',
              blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
              purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
            };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-card p-6 border ${colorMap[item.color].split(' ').slice(2).join(' ')}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colorMap[item.color].split(' ').slice(0, 2).join(' ')} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Community Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card border border-pink-500/30 p-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
              <Handshake className="w-8 h-8 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">The Community Connection</h3>
              <p className="text-gray-300 mb-4">
                A <span className="text-white font-semibold">Jain community in the US</span> has been working on a similar idea for months, going door-to-door, conducting surveys, trying to understand what people need.
              </p>
              <p className="text-gray-300 mb-4">
                They haven't cracked it yet. We pulled it off in <span className="text-green-400 font-semibold">15 days</span>.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-pink-500/5 border-l-4 border-pink-500"
              >
                <p className="text-pink-200 font-semibold">
                  🤝 Partnering with them for distribution is a real possibility.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Their community reach + our technology = massive impact.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
