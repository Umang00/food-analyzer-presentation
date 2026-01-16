import { motion } from 'framer-motion';
import { Leaf, Shield, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero bg-grid relative overflow-hidden flex flex-col justify-center items-center text-center px-4">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-gray-300">AI-Powered Food Analysis</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="text-gradient-green">Food Analyzer</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Eat with Confidence.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          The AI-first app that helps you verify if packaged food aligns with your dietary restrictions — allergies, religious, or ethical.
        </motion.p>

        {/* Community Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Jain', 'Vaishnav', 'Swaminarayan', 'Vegan', 'Allergies'].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium"
            >
              {i < 3 ? <Leaf className="w-4 h-4 text-green-400" /> : <Shield className="w-4 h-4 text-blue-400" />}
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Shocker Hashtag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-2xl md:text-3xl font-black text-gray-500 tracking-tight"
        >
          #YetAnotherAIWrapper
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-green-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
