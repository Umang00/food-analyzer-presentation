import Hero from './components/Hero';
import Team from './components/Team';
import MyStory from './components/MyStory';
import Problem from './components/Problem';
import Personas from './components/Personas';
import Research from './components/Research';
import Market from './components/Market';
import Insight from './components/Insight';
import Solution from './components/Solution';
import Differentiators from './components/Differentiators';
import TechStack from './components/TechStack';
import Journey from './components/Journey';
import Download from './components/Download';

function App() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen text-white overflow-x-hidden">
      <Hero />
      <Team />
      <MyStory />
      <Problem />
      <Personas />
      <Research />
      <Market />
      <Insight />
      <Solution />
      <Differentiators />
      <TechStack />
      <Journey />
      <Download />
    </div>
  );
}

export default App;
