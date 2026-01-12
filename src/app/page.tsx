import Navbar from "./Navbar";
import CurvedDivider from "./CurvedDivider";
import Tag from "./Tag";
import YouTubeLoop from "./YouTubeLoop";
// import Carousel from "./Carousel";

function App() {
  return (
    <div>
      <Navbar />

      <section className="min-h-screen bg-forest-900 flex items-center justify-center">
        <div className="bg-forest-800 rounded-[4rem] p-4 md:p-16 flex flex-col md:flex-row items-center justify-center space-y-0 md:space-x-16 w-full max-w-5xl overflow-hidden relative shadow-xl">
          <div className="absolute bottom-[-100px] right-[-100px] md:bottom-[-200px] md:right-[-200px] transform rotate-[-30deg]">
            <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-forest-700 rounded-[4rem] opacity-30"></div>
          </div>

          <div className="text-off-white z-10 text-center md:text-left leading-none">
            <p className="text-xl font-bold">Hey! I&apos;m</p>
            <h1 className="text-7xl font-emphasize">Jayden</h1>
            <h1 className="text-6xl font-emphasize">Hagerty</h1>
            <div className="w-full md:w-48 h-1 bg-off-white my-6 mx-auto md:mx-0"></div>
            {/* <h2 className="text-xl font-bold">Software Developer</h2> */}
            {/* <Carousel /> */}
          </div>

          <div className="relative z-10">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden">
              <img
                src="/jaydenpic_v3_square.jpg"
                alt="Jayden Hagerty"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-[-300px] right-[-250px] w-32 h-32 md:w-100 md:h-100 bg-forest-700/50 rounded-[2rem] transform rotate-[10deg] z-[1]"></div>
          </div>
        </div>
      </section>
      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-forest-900"
        fillColor="var(--color-forest-800)"
      />
      <section className="w-full bg-forest-800 flex items-center justify-center">
        <div className="bg-forest-800 flex flex-col md:flex-row items-stretch justify-center w-full max-w-5xl overflow-hidden relative gap-8 p-8">
          <img 
            src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Coding Screen" 
            className="w-[400px] object-cover flex-1 rounded-2xl shadow-xl" 
          />
          <div className="rounded-2xl text-off-white flex-1 flex flex-col justify-center text-right p-8">
            <h1 className="text-4xl font-emphasize">
              Software Developer
            </h1>
            <div className="my-2 flex gap-2 flex-wrap justify-end">
              <Tag text="UVic Student" />
              <Tag text="Web Designer" />
              <Tag text="Game Developer" />
            </div>
            <p className="font-medium text-justify mb-8">
              Programming started as a hobby for me when I was 10 years old. Since then, it's grown into a career path that I'm incredibly  passionate about! I'll be graduating from the <b>University of Victoria</b> in 2027 with a Bachelor of Software Engineering.
            </p>
            <button className="bg-off-white text-forest-800 px-4 py-2 rounded-full font-semibold transition">See More</button>
          </div>
        </div>
      </section>

      <section className="w-full bg-forest-800 flex items-center justify-center">
        <div className="bg-forest-800 flex flex-col md:flex-row items-stretch justify-center w-full max-w-5xl overflow-hidden relative gap-8 p-8">
          
          <div className="rounded-2xl text-off-white flex-1 flex flex-col justify-center p-8">
            <h1 className="text-4xl font-emphasize">
              Music Producer
            </h1>
            <div className="my-2 flex gap-2 flex-wrap">
              <Tag text="Recording Artist" />
              <Tag text="Mixing/Mastering Engineer" />
            </div>
            <p className="font-medium text-justify">
              Programming started as a hobby for me when I was 10 years old. Since then, it's grown into a career path that I'm incredibly  passionate about! I'll be graduating from the <b>University of Victoria</b> in 2027 with a Bachelor of Software Engineering.
            </p>
          </div>
          <img 
            src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Coding Screen" 
            className="w-[400px] object-cover flex-1 rounded-2xl shadow-xl" 
          />
        </div>
      </section>

      <section className="w-full bg-forest-800 flex items-center justify-center">
        <div className="bg-forest-800 flex flex-col md:flex-row items-stretch justify-center w-full max-w-5xl overflow-hidden relative gap-8 p-8">
          <div className="w-[400px] object-cover flex-1 rounded-2xl shadow-xl">
            <YouTubeLoop videoId="zybqV01gWMY" start={126} end={142} />

          </div>
          <div className="rounded-2xl text-off-white flex-1 flex flex-col justify-center text-right p-8">
            <h1 className="text-4xl font-emphasize">
              Filmmaker and Director
            </h1>
            <div className="my-2 flex gap-2 flex-wrap justify-end">
              <Tag text="Writer" />
              <Tag text="Editor" />
              <Tag text="Videographer" />
            </div>
            <p className="font-medium text-justify mb-8">
              Programming started as a hobby for me when I was 10 years old. Since then, it's grown into a career path that I'm incredibly  passionate about! I'll be graduating from the <b>University of Victoria</b> in 2027 with a Bachelor of Software Engineering.
            </p>
            <button className="bg-off-white text-forest-800 px-4 py-2 rounded-full font-semibold transition">See More</button>
          </div>
        </div>
      </section>

        {/* <div className="grid gap-6 mx-auto sm:grid-cols-1 md:grid-cols-3 px-6">
          <div className="card">
            <h1 className="text-2xl font-extrabold">
              Software Engineering Student
            </h1>
            <div className="my-2 flex gap-2 flex-wrap">
              <Tag text="Game Developer" />
              <Tag text="Web Designer" />
            </div>
            <p className="font-medium">
              UVic Software Engineering Student graduating in 2027
            </p>
          </div>
          <div className="card">
            <h1 className="text-2xl font-extrabold">Music Producer</h1>
            <div className="my-2 flex gap-2 flex-wrap">
              <Tag text="Recording Artist" />
              <Tag text="Singer" />
              <Tag text="Beatmaker" />
            </div>
          </div>
          <div className="card">
            <h1 className="text-2xl font-extrabold">Filmmaker and Director</h1>
            <div className="my-2 flex gap-2 flex-wrap">
              <Tag text="Writer" />
              <Tag text="Editor" />
              <Tag text="Videographer" />
            </div>
          </div>
        </div> */}
      
      <footer className="bg-forest-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-off-white">
            &copy; {new Date().getFullYear()} Jayden Hagerty. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
