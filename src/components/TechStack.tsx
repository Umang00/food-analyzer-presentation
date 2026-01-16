import { motion } from 'framer-motion';
import { Smartphone, Server, Database, Brain, Zap } from 'lucide-react';

const frontendTech = [
  { name: 'React Native', detail: 'Cross-Platform' },
  { name: 'Expo 54', detail: 'Expo Router' },
  { name: 'NativeWind v4', detail: 'Tailwind for RN' },
  { name: 'Zustand', detail: 'Client State' },
];

const backendTech = [
  { name: 'Bun', detail: 'Runtime' },
  { name: 'Hono', detail: 'Framework' },
  { name: 'Neon', detail: 'Postgres + Drizzle' },
  { name: 'Backblaze B2', detail: 'Storage' },
];

const TechStack = () => {
  return (
    <section className="min-h-screen gradient-section py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 block">
            Under The Hood
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Tech <span className="text-gradient-blue">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card border border-cyan-500/30 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {frontendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 bg-white/5 rounded-xl"
                >
                  <p className="font-semibold text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card border border-purple-500/30 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {backendTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="p-4 bg-white/5 rounded-xl"
                >
                  <p className="font-semibold text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Core */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-card border border-amber-500/30 p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                <Brain className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Core</h3>
                <p className="text-gray-500 text-sm">The Secret Sauce</p>
              </div>
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-sm">Tiered AI System</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <Database className="w-5 h-5 text-amber-400" />
                <span className="text-sm">Multi-source Reasoning</span>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 p-4 border-l-4 border-amber-500 bg-amber-500/5"
          >
            <p className="text-amber-200 font-semibold">
              ⚡ Design Principle: <span className="text-white">Accuracy over Latency.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
