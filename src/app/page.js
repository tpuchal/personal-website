import FlippingCard from "@/components/FlippingCard";
import HeaderCard from "@/components/HeaderCard";
import ParagraphCard from "@/components/ParagraphCard";

export default function Home() {
  return (
    <div>
      <HeaderCard className={'my-20'}>
        <span className="text-fontcolor text-6xl transition-all duration-150 opacity-10 animate-pulse">tpuchal@root:~$</span> Hi! --welcome
      </HeaderCard>
      <ParagraphCard>
        <div className="my-2 px-6 font-bold">Welcome to my personal website!</div>
        <div className="my-2 px-6">Hope you will have a good time here and will know me better after this short journey!</div>
        <div className="my-2 px-6 font-bold">Important note!!!! <br></br> This website currently is not optimized for mobile devices. Please check it out on PC</div>
        <div className="my-12">
          <HeaderCard>Who am i?</HeaderCard>
          <div className="my-2 px-6">
            I’m a results-driven software developer with a passion for engineering, cybersecurity, and business innovation. With hands-on experience in system integration, cloud computing, algorithm creation. I specialize in building scalable, high-performance applications. Over the years, I’ve worked with global financial institutions, tech startups, and industrial firms, delivering impactful solutions that merge technology with strategic business insights.
          </div>
          <div className="my-2 px-6">
            When I’m not coding, you can find me exploring emerging technologies, participating in industry events, or training in the gym.
          </div>
          <div className="my-2 px-6">
            Currently I am based in Warsaw, Poland. I can work remotely or on site. As long as somebody speaks Polish, English or wants to deal with my broken Italian or German, I can work anywhere!
          </div>
        </div>
        <div className="my-12">
        <HeaderCard>My journey</HeaderCard>
          <div className="my-2 px-6">
            I always liked to figure out how things work. From disassembling old phones, reading about every topic (social or technical), to looking in all the places I should not have, my curiosity has driven me forward.
          </div>
          <div className="my-2 px-6">
            I have started programming in high school. I've been loving it ever since. Since my first "Hello world", I've felt great after making the computer bend to my will. It felt like magic and has given me the realization that, with proper training, I can do all sorts of cool stuff and play around with computers. There were also some drawbacks, like always being called when someone from my family needed help with computer.
          </div>
          <div className="my-2 px-6">
            Then I went to study Computer Science. I starded the studies out with scholarship for best students. After short time I landed my first job. It has helped me a lot in a way that I have learned what professional software development is.
          </div>
          <div className="my-2 px-6">
            After this time I have started a few of my own ventuers, which all orbited around IT and programming. My own businesses have taught me the art of negotiation, team leading, team building and has fulfilled my ever growing desire to learn. Over the years and various businesses/contracts I have learned a lot a bout Spring, Spring Boot, various SQL and non SQL databases and also building infrastructure on AWS.
          </div>
          <div className="my-2 px-6">
            Now I do consider myself a seasoned developer, with solid all-around knowledge on not only how certain frameworks work, but also how computers and networks work on low level, how to create scalable, clean solutions and how to build great things that will bring a ton of value into the company.
          </div>
          <div className="my-2 px-6">
            If you are looking for a proactive, creative and engaged developer who creates, clean, efficient and safe solutions then you are in the right place!. Give me a call and I can tell you more about myself.
          </div>
          <div className="my-2 px-6">
            If you found my skills interesting then feel free to contact me, via email or Linkedin. You can get all the information below. Hope you enjoyed your stay! See you around!
          </div>
        </div>
        <div className="my-12">
          <HeaderCard>What can I do?</HeaderCard>
          <FlippingCard/>
          <div className="my-2 px-6">
            I have a great ammount of experience working for both small and large entities. In my line of work I utilized Spring framework extensively. I am also quite comfortable with relational and non-relational databases, Docker, Kafka and RabbitMQ. My other favourite language is C. I find it simple, elegant and undefeated when it comes to writing something that needs to execute fast.
          </div>
          <div className="my-2 px-6">
            For the frontend side of things I have started with AngularJS (does this even exist right now?) but quickly learned React and have started working with it. After NextJS became a thing I suddenly fell in love with it, especially because of the appRouter and native SSR. Pretty cool stuff if you ask me!
          </div>
        </div>
      </ParagraphCard>
      
    </div>
  );
}
