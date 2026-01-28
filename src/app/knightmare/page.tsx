import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  return (
    <>
      <section className="md:p-16 p-8 pt-24 md:pt-24 bg-black">
        <Link className="mb-8 cursor-pointer transition transform hover:-translate-x-2 w-min pr-16 text-forest-800 font-bold text-xl flex items-center gap-2" href="/software">
          <img src="left-arrow.png" className="h-[24px]" />
          Back
        </Link>
        <div className="rounded-2xl shadow-lg bg-forest-950 text-off-white overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row w-full gap-8 items-start">
              <div className="flex-1">

                {/* <img src="/knightmare logo.png" alt="Knightmare Logo" className="w-full mb-4"/> */}
                <h1 className="font-bold text-4xl mb-2">Knightmare</h1>
                <b className="block text-forest-700">Available on PC</b>
                <div className="flex gap-3 mt-2">
                <a className="logo-button text-off-white px-4 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 bg-forest-900" href="https://store.steampowered.com/app/1414920/Knightmare/" target="_blank">
                  <img src="/steam_logo.png" className="h-[25px]"/>
                  Steam
                </a>
                <a className="logo-button text-off-white px-4 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 bg-forest-900" href="https://www.coolmathgames.com/0-knightmare" target="_blank">
                  <img src="/cmg_logo.svg" className="h-[25px]"/>
                  Cool Math Games
                </a>
                </div>
                <div>
                  <p className="block mt-8"><i>Knightmare</i> is a mouse-controlled puzzle platformer by Jayden Hagerty. Explore 30 carefully crafted levels with the move set of a chess knight and save the Dream Realm from destruction.</p>
                  <p className="block mt-12"><b>Slay various monsters.</b> Each enemy has its own weaknesses. Use clever timing and movement strategy to defeat all of them!</p>
                  <p className="block mt-3"><b>Experience the game in different modes.</b> In addition to the normal way to play, there is an unlockable hard mode and speed run mode.</p>
                  <p className="block mt-3"><b>Enjoy 10+ original soundtracks.</b> Atmospheric music that adds to the experience.</p>
                  <p className="block mt-3"><b>Save the Dream Realm from destruction.</b> Stop The Bishop before it's too late.</p>
                </div>
              </div>
              <div className="w-full md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  loading="lazy"
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/Fw2m4lJSwh4"
                  title="YouTube video player"
                ></iframe>
                <img src="knightmare2.png" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-black"
        fillColor="var(--color-forest-900)"
      />
    </>
  );
}

export default App;
