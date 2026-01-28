import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  return (
    <>
      <div className="md:p-16 p-8 pt-32 md:pt-32 bg-black">
      {/* <div className="w-full rounded-2xl bg-forest-950 p-8 shadow-xl"></div> */}
        <h1 className="font-bold text-forest-700 text-3xl mb-4 mt-16">Big Projects</h1>
        <section className="w-full grid grid-cols-3 gap-4 grid-cols-[repeat(auto-fit,_minmax(min(100%,_400px),_1fr))]">
          <Link href="knightmare" className="project-card">
            <img className="bg-black w-full " alt="Knightmare Cover Image" src="/knightmare1.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Knightmare</h1>
                <p className="text-forest-700">HTML, JS, CSS</p>
              </div>
              <p className="text-forest-700 ">Use a unique chess-based move set to travel through the Dream Realm.</p>
            </div>
          </Link>
          <Link href="the-train-to-somewhere" className="project-card">
            <img className="bg-black w-full border-off-white/30" alt="The Train to Somewhere Cover Image" src="/traingame1.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">The Train to Somewhere</h1>
                <p className="text-forest-700">Godot</p>
              </div>
              <p className="text-forest-700">Fight monsters and explore the mysterious train.</p>
            </div>
          </Link>
          <Link className="project-card" href="redemption-pocket">
            <img className="bg-black w-full" alt="Redemption TGC Pocket Cover Image" src="/redemptionpocket1.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Redemption Pocket</h1>
                <p className="text-forest-700">HTML, JS, CSS</p>
              </div>
              <p className="text-forest-700">A digital collectathon for the Redemption trading card game.</p>
            </div>
          </Link>
        </section>


        <h1 className="font-bold text-forest-700 text-3xl mb-4 mt-16">Silly Games</h1>
        <section className="w-full grid grid-cols-3 gap-4 grid-cols-[repeat(auto-fit,_minmax(min(100%,_400px),_1fr))]">
          <a href="https://meddle.hagertech.dev/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="Meddle Cover Image" src="/meddle.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Meddle</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Ever played one word story? This is that, but online, with points and a voting system.</p>
            </div>
          </a>

          <a href="https://risk-button.web.app/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="The Risk Button Cover Image" src="/risk-button.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">The Risk Button</h1>
                <p></p>
              </div>
              <p className="text-forest-700">What will happen when you click it? Nobody knows...</p>
            </div>
          </a>
          
          <a href="https://sort-this.web.app/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="Sort This Cover Image" src="/sort-this.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Sort This</h1>
                <p></p>
              </div>
              <p className="text-forest-700">It's literally just a game where you sort red and blue things.</p>
            </div>
          </a>

        </section>


        <h1 className="font-bold text-forest-700 text-3xl mb-4 mt-16">Cool Websites</h1>
        <section className="w-full grid grid-cols-3 gap-4 grid-cols-[repeat(auto-fit,_minmax(min(100%,_400px),_1fr))]">
          <a href="https://fewtube.hagertech.dev/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="Knightmare Cover Image" src="/fewtube.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">FewTube</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Paste a YouTube link and watch instantly without trackers or pre-roll ads.</p>
            </div>
          </a>
          <a href="https://make-teams.web.app/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="MakeTeams Cover Image" src="/maketeams.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">MakeTeams</h1>
                <p></p>
              </div>
              <p className="text-forest-700">An intuitive admin tool for managing teams and matchups for live events!</p>
            </div>
          </a>
          <a href="https://swatch-infinite.web.app/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="Swatch Cover Image" src="/swatch.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Swatch</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Generate beautiful palettes based on one colour.</p>
            </div>
          </a>
          <a href="https://jj-message.web.app/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="JJ Message Cover Image" src="/jj message.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">JJ Message</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Simple file encryption for sending fun secret messages.</p>
            </div>
          </a>

          <a href="https://groupwatch.hagertech.dev/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="GroupWatch Cover Image" src="/groupwatch.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">GroupWatch</h1>
                <p></p>
              </div>
              <p className="text-forest-700">React to video clips with your friends!</p>
            </div>
          </a>
          <a href="https://mess-c02e4.web.app/" target="_blank" className="project-card">
            <img className="bg-black w-full" alt="Mess Cover Image" src="/mess.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Mess</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Messaging with a twist.</p>
            </div>
          </a>
        </section>


        


      </div>
      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-black"
        fillColor="var(--color-forest-900)"
      />
    </>
  );
}

export default App;
