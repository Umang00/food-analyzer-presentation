import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Palette, Cpu } from 'lucide-react';

import umangImg from '../assets/team/umang_linkedin.png';
import dineshImg from '../assets/team/dinesh.jpg';
import deeaImg from '../assets/team/deea.jpg';

const teamMembers = [
  {
    name: 'Umang Thakkar',
    role: 'AI PM',
    description: 'PRDs, Research, Frontend Development, AI Wiring',
    image: umangImg,
    icon: Code,
    color: 'green',
    linkedin: 'https://www.linkedin.com/in/umang-thakkar-90a4a5164/',
    github: 'https://github.com/Umang00',
  },
  {
    name: 'Dinesh Nimmagadda',
    role: 'Data Engineer',
    description: 'Engineering backbone, API Design, AI Integrations',
    image: dineshImg,
    icon: Cpu,
    color: 'blue',
    linkedin: 'https://www.linkedin.com/in/dinesh-nimmagadda/',
    github: 'https://github.com/dinesh-nimmagadda3',
  },
  {
    name: 'Deea Mavani',
    role: 'AI PM',
    description: 'UI/UX Design, Lead Warming, User Outreach',
    image: deeaImg,
    icon: Palette,
    color: 'purple',
    linkedin: 'https://www.linkedin.com/in/deepalimavani/',
  },
];

const colorClasses: Record<string, { border: string; glow: string; text: string }> = {
  green: { border: 'border-green-500/30', glow: 'group-hover:shadow-green-500/20', text: 'text-green-400' },
  blue: { border: 'border-blue-500/30', glow: 'group-hover:shadow-blue-500/20', text: 'text-blue-400' },
  purple: { border: 'border-purple-500/30', glow: 'group-hover:shadow-purple-500/20', text: 'text-purple-400' },
};

const Team = () => {
  return (
    <section className="min-h-screen gradient-section-alt py-24 px-4 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4 block">
            The Builders
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Built by People Who{' '}
            <span className="text-gradient-green">Live This Problem</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A team of engineers who understand the struggle firsthand.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const colors = colorClasses[member.color];
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group glass-card p-6 ${colors.border} border transition-all duration-500 hover:scale-[1.02] ${colors.glow} hover:shadow-2xl`}
              >
                {/* Photo */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className={`absolute -bottom-3 -right-3 w-12 h-12 glass rounded-xl flex items-center justify-center ${colors.text}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className={`text-sm font-semibold mb-3 ${colors.text}`}>{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.description}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
