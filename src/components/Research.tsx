import { motion } from 'framer-motion';
import { MessageCircle, Mic, BarChart3, Users } from 'lucide-react';

import whatsapp1 from '../assets/research/whatsapp_1.jpeg';
import whatsapp2 from '../assets/research/whatsapp_2.jpeg';
import whatsapp3 from '../assets/research/whatsapp_3.jpeg';
import interview1 from '../assets/research/interview_1.ogg';

const stats = [
  { value: '78%', label: 'Struggle reading ingredient labels', icon: BarChart3 },
  { value: '65%', label: 'Have accidentally consumed restricted foods', icon: Users },
  { value: '20+', label: 'Minutes spent per shopping trip on labels', icon: MessageCircle },
];

const Research = () => {
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
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 block">
            User Research
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Real <span className="text-gradient-blue">Evidence</span> From Real Users
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Surveys, interviews, and conversations that validated the need.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-4xl md:text-5xl font-black text-gradient-blue mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: WhatsApp Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold">Community Conversations</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[whatsapp1, whatsapp2, whatsapp3].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`WhatsApp screenshot ${index + 1}`}
                    className="w-full rounded-xl shadow-lg border border-white/10 group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-xs text-white">Click to enlarge</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Audio Interview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mic className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold">User Interview</h3>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">User Interview #1</p>
                  <p className="text-gray-500 text-sm">Recorded conversation about food label struggles</p>
                </div>
              </div>
              <audio controls className="w-full">
                <source src={interview1} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
