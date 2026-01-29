import Navbar from "./Navbar";
import CurvedDivider from "./CurvedDivider";
import Tag from "./Tag";
import YouTubeLoop from "./YouTubeLoop";
import Link from 'next/link';
import AnimateOnScroll from "./AnimateOnScroll";

function App() {
  return (
    <div>

      <section className="min-h-screen bg-forest-900 flex items-center justify-center">
        <div className="bg-forest-800 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-center space-y-0 md:space-x-16 max-w-5xl overflow-hidden relative shadow-xl">
          <div className="slide-up-fade-2 absolute bottom-[-100px] right-[-100px] md:bottom-[-200px] md:right-[-200px] transform rotate-[-30deg]">
            <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-forest-700 rounded-[4rem] opacity-30"></div>
          </div>

          <div className="text-off-white z-10 text-left leading-none">
            <p className="text-xl font-bold mt-5 md:mt-0">Hey! I&apos;m</p>
            <h1 className="text-7xl font-emphasize">Jayden</h1>
            <h1 className="text-6xl font-emphasize">Hagerty</h1>
            <div className="w-48 h-1 bg-off-white mt-6 mx-0 animate-width"></div>
          </div>

          <div className="relative z-10 order-first md:order-last">
            <div className="relative w-full h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden">
              <img
                src="/jaydenpic_v3_square.jpg"
                alt="Jayden Hagerty"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="slide-up-fade absolute bottom-[-300px] right-[-250px] w-32 h-32 md:w-100 md:h-100 bg-forest-700/50 rounded-[2rem] transform rotate-[10deg] z-[1]"></div>
          </div>
        </div>
      </section>

      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-forest-900"
        fillColor="var(--color-forest-800)"
      />

      <div className="bg-forest-800">


          <section className="w-full bg-forest-800 flex items-center justify-center">
            <div className="bg-forest-800 flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl overflow-hidden relative gap-8 p-8">

                <img src="/traingame1.png" className="h-auto w-full object-cover rounded-2xl shadow-xl md:order-first order-last" />
            

              <div className="max-w-full md:max-w-sm rounded-2xl text-off-white flex flex-col justify-center ">
                <h1 className="text-4xl font-emphasize">
                  Software Developer
                </h1>
                <div className="my-2 flex gap-2 flex-wrap">
                  <Tag text="UVic Student" />
                  <Tag text="Web Designer" />
                  <Tag text="Game Developer" />
                </div>
                <p className="font-medium text-justify mb-8">
                  Programming started as a hobby for me when I was 10 years old. Since then, it&apos;s grown into a career path that I&apos;m incredibly  passionate about! I&apos;ll be graduating from the <b>University of Victoria</b> in 2027 with a Bachelor of Software Engineering.
                </p>
                <Link href="/software">
                  <button className="button w-full text-xl logo-button items-center justify-center">See My Coding Projects<img className="h-[16px]" src="right-arrow.png"/></button>
                </Link>
              </div>
            </div>
          </section>



          <section className="w-full bg-forest-800 flex items-center justify-center">
            <div className="bg-forest-800 flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl overflow-hidden relative gap-8 p-8">
              
              <div className="max-w-full md:max-w-sm rounded-2xl text-off-white flex flex-col justify-center">
                <h1 className="text-4xl font-emphasize">
                  Music Producer
                </h1>
                <div className="my-2 flex gap-2 flex-wrap">
                  <Tag text="Recording Artist" />
                  <Tag text="Mixing/Mastering Engineer" />
                </div>
                <p className="font-medium text-justify mb-8">
                  I work on a wide variety of music projects, ranging from game/film soundtracks to singer-songwriter productions. I'm incredbilty fortunate to have amassed over <b>50,000 streams</b> across platforms like Spotify and Apple Music!
                </p>
                <Link href="/music">
                  <button className="button w-full text-xl logo-button items-center justify-center">Listen to My Music <img className="h-[16px]" src="right-arrow.png"/></button>
                </Link>
              </div>
              <img 
                src="music prod placeholder.jpg" 
                alt="Music Production" 
                className="h-[400px] w-full object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </section>

          <section className="w-full bg-forest-800 flex items-center justify-center">
            <div className="bg-forest-800 flex flex-col md:flex-row items-stretch justify-center w-full max-w-6xl overflow-hidden relative gap-8 p-8">
              {/* <video
                poster="/willem.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-[400px] w-full object-cover rounded-2xl shadow-xl"
              >
                <source src="/Jayden Site Film Reel.mov" type="video/mp4" />
              </video> */}
              <img src="/willem.jpg" className="h-auto w-full object-cover rounded-2xl shadow-xl md:order-first order-last" />

              <div className="max-w-full md:max-w-sm rounded-2xl text-off-white flex flex-col justify-center">
                <h1 className="text-4xl font-emphasize">
                  Filmmaker and Director
                </h1>
                <div className="my-2 flex gap-2 flex-wrap">
                  <Tag text="Writer" />
                  <Tag text="Videographer" />
                  <Tag text="Editor" />
                </div>
                <p className="font-medium text-justify mb-8">
                  Film is a combination of so many things I love, and I've managed to try unique roles in each project I've been a part of! I&apos;ve directed and produced a variety of short films- I've also been heavily involved in acting roles, script writing, cinematography, sound mixing, and video editing.
                </p>
                <Link href="/film">
                  <button className="button w-full text-xl logo-button items-center justify-center">Watch My Films <img className="h-[16px]" src="right-arrow.png"/></button>
                </Link>
              </div>
            </div>
          </section>

      </div>
      
      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-forest-800"
        fillColor="var(--color-forest-900)"
      />

    </div>

    
  );
}

export default App;
