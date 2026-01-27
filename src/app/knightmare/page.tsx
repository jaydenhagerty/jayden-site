import Navbar from "../Navbar";
import CurvedDivider from "../CurvedDivider";
import Tag from "../Tag";
import YouTubeLoop from "../YouTubeLoop";
import Link from 'next/link';

function App() {
  return (
    <>
      <section className="w-full mt-16 p-8">
        <div className="rounded-2xl shadow-lg bg-off-white text-forest-900 overflow-hidden">
          <div className="p-6">
            <div className="flex flex-column justify-between space-x-4 items-center">
              <h1 className="font-bold text-2xl">Knightmare</h1>
              <p></p>
            </div>
            <p>Use a unique chess-based move set to travel through the Dream Realm.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
