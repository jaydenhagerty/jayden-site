import CurvedDivider from "../CurvedDivider";

function App() {
  return (
    <>
      <div className="p-16 pt-32 bg-black">
        <h1 className="font-bold text-forest-700 text-3xl mb-4">Big Projects</h1>
        <section className="w-full grid grid-cols-3 gap-4 grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
          <a href="knightmare" className="project-card">
            <img className="bg-black w-full " alt="Knightmare Cover Image" src="/knightmare1.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Knightmare</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Use a unique chess-based move set to travel through the Dream Realm.</p>
            </div>
          </a>
          <div className="project-card">
            <img className="bg-black w-full border-off-white/30" alt="The Train to Somewhere Cover Image" src="/traingame1.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">The Train to Somewhere</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Fight monsters and explore the mysterious train.</p>
            </div>
          </div>
          <div className="project-card">
            <img className="bg-black w-full" alt="Redemption TGC Pocket Cover Image" src="/redemptionpocket1.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Redemption TGC Pocket</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Digital collecting for the Redemption trading card game.</p>
            </div>
          </div>
        </section>

        <h1 className="font-bold text-forest-700 text-3xl mb-4 mt-8">Cool Websites</h1>
        <section className="w-full grid grid-cols-3 gap-4 grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
          <a href="knightmare" className="project-card">
            <img className="bg-black w-full" alt="Knightmare Cover Image" src="/fewtube.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">FewTube</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Paste a YouTube link and watch instantly without trackers or pre-roll ads.</p>
            </div>
          </a>
          <div className="project-card">
            <img className="bg-black w-full" alt="MakeTeams Cover Image" src="/maketeams.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">MakeTeams</h1>
                <p></p>
              </div>
              <p className="text-forest-700">An intuitive admin tool for managing teams and matchups for live events!</p>
            </div>
          </div>
          <div className="project-card">
            <img className="bg-black w-full" alt="Swatch Cover Image" src="/swatch.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">Swatch</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Generate beautiful palettes based on one colour.</p>
            </div>
          </div>
          <div className="project-card">
            <img className="bg-black w-full" alt="JJ Message Cover Image" src="/jj message.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">JJ Message</h1>
                <p></p>
              </div>
              <p className="text-forest-700">Fight monsters and explore the mysterious train.</p>
            </div>
          </div>
          
          <div className="project-card">
            <img className="bg-black w-full" alt="Redemption TGC Pocket Cover Image" src="/groupwatch.png" />
            <div className="p-6">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-2xl">GroupWatch</h1>
                <p></p>
              </div>
              <p className="text-forest-700">React to video clips with your friends!</p>
            </div>
          </div>
        </section>


        <h1 className="font-bold text-forest-700 text-3xl mb-4 mt-8">Silly Games</h1>
        <section className="w-full grid grid-cols-3 gap-4 grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">



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
