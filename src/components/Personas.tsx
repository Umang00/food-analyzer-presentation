import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, GraduationCap, Briefcase, Home } from 'lucide-react';

import raviImg from '../assets/personas/ravi.png';
import priyaImg from '../assets/personas/priya.png';
import arjunImg from '../assets/personas/arjun.png';

const personas = [
  {
    name: 'Ravi',
    tagline: 'The Diaspora Professional',
    location: 'London, UK',
    age: 28,
    icon: Briefcase,
    color: 'green',
    gradient: 'from-green-500/20 to-emerald-500/10',
    image: raviImg,
    pain: 'Spends 20+ minutes scanning labels in supermarkets.',
    goal: 'Quick verification without reading every ingredient.',
    quote: '"I just want a yes or no. Is this safe for me?"',
  },
  {
    name: 'Priya',
    tagline: 'The Business Traveler',
    location: 'Mumbai, India',
    age: 35,
    icon: Home,
    color: 'blue',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    image: priyaImg,
    pain: 'Relies only on Indian restaurants when traveling abroad.',
    goal: 'Explore local packaged foods confidently.',
    quote: '"I miss trying local snacks because I\'m never sure."',
  },
  {
    name: 'Arjun',
    tagline: 'The International Student',
    location: 'Toronto, Canada',
    age: 22,
    icon: GraduationCap,
    color: 'purple',
    gradient: 'from-purple-500/20 to-pink-500/10',
    image: arjunImg,
    pain: 'Limited budget, can\'t afford to waste money on wrong purchases.',
    goal: 'Fast, accurate answers on a student budget.',
    quote: '"Every wrong purchase is money I can\'t get back."',
  },
];

const colorClasses: Record<string, { border: string; text: string; bg: string }> = {
  green: { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500/10' },
  blue: { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10' },
  purple: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10' },
};

const Personas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen gradient-section py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 block">
            User Personas
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Who <span className="text-gradient-blue">Experiences</span> This Problem?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Swipe to explore the people we're building for.
          </p>
        </motion.div>



        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="horizontal-scroll flex gap-8 pb-8 px-4 snap-x snap-mandatory"
        >
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            const colors = colorClasses[persona.color];
            return (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex-shrink-0 w-[350px] md:w-[400px] glass-card ${colors.border} border p-8 snap-center`}
              >
                {/* Header with Image */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={persona.image}
                      alt={persona.name}
                      className="w-20 h-20 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center border ${colors.border}`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{persona.name}</h3>
                    <p className={`text-sm font-semibold ${colors.text}`}>{persona.tagline}</p>
                  </div>
                </div>


                {/* Meta */}
                <div className="flex gap-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {persona.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Age {persona.age}
                  </span>
                </div>

                {/* Pain & Goal */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase text-red-400 mb-1 block">Pain</span>
                    <p className="text-gray-300 text-sm">{persona.pain}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-green-400 mb-1 block">Goal</span>
                    <p className="text-gray-300 text-sm">{persona.goal}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
                  <p className="text-sm italic text-gray-200">{persona.quote}</p>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Personas;
