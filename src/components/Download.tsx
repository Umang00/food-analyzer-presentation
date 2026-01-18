import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, Heart, ExternalLink, Youtube, Github } from 'lucide-react';

const links = [
  {
    label: 'LinkedIn Post',
    url: 'https://www.linkedin.com/posts/umang-thakkar-90a4a5164_capstoneproject-buildinpublic-foodtech-activity-7417589067078606848-dHts',
    icon: ExternalLink,
    color: 'blue',
  },
  {
    label: 'Demo Video',
    url: 'https://youtu.be/ix9lkE7u8yc',
    icon: Youtube,
    color: 'red',
  },
  {
    label: 'Frontend Repo',
    url: 'https://github.com/Umang00/Food-fe',
    icon: Github,
    color: 'gray',
  },
  {
    label: 'Backend Repo',
    url: 'https://github.com/dinesh-nimmagadda3/food_be',
    icon: Github,
    color: 'gray',
  },
];

const Download = () => {
  return (
    <section className="min-h-screen gradient-hero bg-grid py-24 px-4 flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <Heart className="w-4 h-4 text-pink-400" />
          <span className="text-sm font-medium text-gray-300">100% Free. Giving back to the community.</span>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black mb-6">
          Get <span className="text-gradient-green">Food Analyzer</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
          Join our early users. Break it. Test it. Tell us what works.
        </p>

        {/* QR Codes */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          {/* Android */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-8 border border-green-500/30"
          >
            <div className="mb-4 relative">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://github.com/Umang00/Food-fe/releases/download/v1.0.0/Food.Analyser.apk&color=22C55E&bgcolor=0A0A0F"
                alt="Android APK QR Code"
                className="w-44 h-44 mx-auto rounded-xl"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Smartphone className="w-5 h-5 text-green-400" />
              <span className="font-bold">Android APK</span>
            </div>
            <a
              href="https://github.com/Umang00/Food-fe/releases/download/v1.0.0/Food.Analyser.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-green-500 text-black rounded-full font-bold text-sm hover:bg-green-400 transition-colors"
            >
              <DownloadIcon className="w-4 h-4" /> Download
            </a>
          </motion.div>

          {/* iOS */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-8 border border-blue-500/30"
          >
            <div className="mb-4 relative">
              <div className="w-44 h-44 mx-auto rounded-xl bg-blue-500/10 flex items-center justify-center">
                <p className="text-blue-400 text-sm font-medium">Coming Soon</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span className="font-bold">iOS TestFlight</span>
            </div>
            <button
              disabled
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-gray-700 text-gray-400 rounded-full font-bold text-sm cursor-not-allowed"
            >
              Coming Soon
            </button>
          </motion.div>

          {/* Presentation */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="glass-card p-8 border border-purple-500/30"
          >
            <div className="mb-4 relative">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://food-analyzer-presentation.vercel.app&color=A855F7&bgcolor=0A0A0F"
                alt="Presentation QR Code"
                className="w-44 h-44 mx-auto rounded-xl"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <ExternalLink className="w-5 h-5 text-purple-400" />
              <span className="font-bold">This Presentation</span>
            </div>
            <a
              href="https://food-analyzer-presentation.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-purple-500 text-black rounded-full font-bold text-sm hover:bg-purple-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Visit Site
            </a>
          </motion.div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 glass-card text-sm hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-400" />
                {link.label}
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-sm"
        >
          © 2026 Food Analyzer · Built with ❤️ for dietary freedom
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Download;
