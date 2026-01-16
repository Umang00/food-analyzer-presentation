import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import storyImage from '../assets/umang_story.png';

const MyStory = () => {
  const bulletPoints = [
    "I'm vegetarian. I don't consume eggs.",
    'Relatives fly in from UK/Canada with chocolates.',
    '"Suitable for Vegetarians" — but it has eggs.',
    'In the UK, eggs = vegetarian. Not for me.',
    'I want users to define what "vegetarian" means to them.',
  ];

  return (
    <section className="min-h-screen gradient-section py-24 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4 block">
              The Origin Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              My <span className="text-gradient-purple">Personal</span> Frustration
            </h2>

            {/* Quote Box */}
            <div className="glass-card p-6 mb-8 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-purple-500/30" />
              <p className="text-xl md:text-2xl font-medium text-gray-200 italic pl-10">
                "Is this actually safe for me to eat?"
              </p>
              <p className="text-gray-400 mt-2 pl-10">
                — A question I've asked more times than I can count.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-300 text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Key Insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-4 border-l-4 border-amber-500 bg-amber-500/5"
            >
              <p className="text-amber-200 font-semibold">
                The nuance control that mainstream apps completely miss.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-amber-500/10 rounded-3xl blur-3xl" />
            <img
              src={storyImage}
              alt="Umang confused with Celebrations box"
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
