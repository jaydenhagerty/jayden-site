import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  return (
    <>
      <section className="min-h-screen bg-forest-900 flex items-center justify-center">
        <div className="bg-forest-800 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-center space-y-0 md:space-x-16 max-w-4xl overflow-hidden relative shadow-xl">
          <div className="slide-up-fade-2 absolute bottom-[-100px] right-[-100px] md:bottom-[-100px] md:right-[-100px] transform rotate-[-30deg]">
            {/* <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] bg-forest-700 rounded-4xl opacity-30"></div> */}
          </div>

          <div className="text-off-white z-10 text-left leading-none">
            <h3 className="text-3xl font-semibold">Ready to be hired!</h3>
            <p className="text-lg md:mt-0">I'm looking for a co-op position starting May 2026.</p>
            <p className="text-lg md:mt-4"><b>jayden at hagertech dot dev</b></p>
          </div>

          <div className="relative order-first md:order-last">
            {/* <div className="slide-up-fade absolute bottom-[-450px] right-[-250px] w-32 h-32 md:w-100 md:h-100 bg-forest-700/50 rounded-[2rem] transform rotate-[10deg]"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
