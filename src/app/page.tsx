import Navbar from "./Navbar";
import CurvedDivider from "./CurvedDivider";
// import Carousel from "./Carousel";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="min-h-screen bg-forest-900 flex items-center justify-center">
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
      </div>
      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-forest-900"
        fillColor="var(--color-forest-800)"
      />
      <section className="w-full py-8 bg-forest-800">
        <div className="grid gap-6 mx-auto sm:grid-cols-1 md:grid-cols-3 px-6">
          <div className="card">
            <h1 className="text-2xl font-extrabold">
              Software Engineering Student
            </h1>
            <p className="mb-4 text-forest-800">
              Game Developer | Web Designer
            </p>
            <p className="font-medium">
              UVic Software Engineering Student graduating in 2027
            </p>
          </div>
          <div className="card">
            <h1 className="text-2xl font-extrabold">Music Producer</h1>
            <p className="mb-4 text-forest-800">
              Recording Artist | Singer | Beatmaker
            </p>
          </div>
          <div className="card">
            <h1 className="text-2xl font-extrabold">Filmmaker</h1>
            <p className="mb-4 text-forest-800">
              Director | Writer | Editor | Videographer
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-forest-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Jayden Hagerty. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
