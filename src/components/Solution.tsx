import { motion } from 'framer-motion';
import { Camera, Brain, CheckCircle, Globe, Zap } from 'lucide-react';

const steps = [
  { icon: Camera, label: 'Snap', description: 'Take a photo of ingredients' },
  { icon: Brain, label: 'Analyze', description: 'AI processes the label' },
  { icon: CheckCircle, label: 'Verdict', description: 'Get a clear answer' },
];

const features = [
  { icon: Globe, text: 'Works globally – India, US, Russia, Japan, Europe... even Mars 🚀' },
  { icon: Zap, text: 'No barcode needed. Just the ingredient list.' },
];

const Solution = () => {
  return (
    <section className="min-h-screen gradient-section py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-green">Food Analyzer</span> in Action
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/10 rounded-3xl blur-3xl" />

            {/* Video Container - Phone Style */}
            <div className="relative z-10 w-[280px] md:w-[320px]">
              <div className="bg-gray-900 rounded-[40px] p-3 border border-gray-700 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
                
                <div className="aspect-[9/19] rounded-[32px] overflow-hidden">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/wvaxJqyC6Kc?rel=0&modestbranding=1"
                    title="Food Analyzer Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                📱 Watch the app in action
              </p>
            </div>
          </motion.div>

          {/* Right: Steps & Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* How it Works */}
            <h3 className="text-2xl font-bold mb-8">How It Works</h3>
            <div className="flex gap-4 mb-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                    className="flex-1 glass-card p-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="font-bold text-sm mb-1">{step.label}</p>
                    <p className="text-gray-500 text-xs">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-gray-300">{feature.text}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 p-4 border-l-4 border-green-500 bg-green-500/5"
            >
              <p className="text-green-200 font-semibold">
                Design Principle: <span className="text-white">Accuracy over Latency.</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                We'd rather take an extra second to be sure than give you a wrong answer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
