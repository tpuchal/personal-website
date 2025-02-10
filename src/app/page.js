import FlippingCard from "@/components/FlippingCard";
import HeaderCard from "@/components/HeaderCard";
import ParagraphCard from "@/components/ParagraphCard";
import WeatherComponent from "@/components/WeatherComponent";

export default function Home() {
  return (
    <div>
      <HeaderCard>
        <span className="text-fontcolor text-6xl transition-all duration-150 opacity-10 animate-pulse">tpuchal@root:~$</span> Hi! --welcome
      </HeaderCard>
      <ParagraphCard>
        <div className="my-2 px-6">Welcome to my personal website!</div>
        <div className="my-2 px-6">Hope you will have a good time here and will know me better after this short journey!</div>
        <HeaderCard>Who am i?</HeaderCard>
        <div className="my-2 px-6">
        I’m a results-driven software developer with a passion for engineering, cybersecurity, and business innovation. With hands-on experience in system integration, cloud computing, algorithm creation. I specialize in building scalable, high-performance applications. Over the years, I’ve worked with global financial institutions, tech startups, and industrial firms, delivering impactful solutions that merge technology with strategic business insights.
        </div>
        <div className="my-2 px-6">
        When I’m not coding, you can find me exploring emerging technologies, participating in industry events, or training in the gym.
        </div>
        <HeaderCard>What can I do?</HeaderCard>
        <FlippingCard/>
        <div className="my-2 px-6">
          I specialize in Java and C. I can do frontend too! I had some little experience in Angular, however I prefer creating websites in NextJS (like this one!)
        </div>
        <HeaderCard>My journey</HeaderCard>
        <div className="my-2 px-6">
          I always liked to figure out how things work. From disassembling old phones, reading about every topic (social or technical), to looking in all the places I should not have, my curiosity has driven me forward.
        </div>
        <div className="my-2 px-6">
          I have started programming in high school. I've been loving it ever since. Since my first "Hello world", I've felt great after making the computer bend to my will. It felt like magic and has given me the realization that, with proper training, I can do all sorts of cool stuff and play around with computers. There were also some drawbacks, like always being called when someone from my family needed help with computer.
        </div>
        <div className="my-2 px-6">

        </div>
        




      </ParagraphCard>
      
    </div>
  );
}
