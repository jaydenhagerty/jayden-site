import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-forest-950 text-off-white gap-4 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-center max-w-5xl overflow-hidden relative shadow-xl">
          <a className="cursor-pointer transition duration-100 ease-out hover:-translate-y-[3px]" target="_blank" href="https://open.spotify.com/artist/1mVeJFxcxJ8yLLGrosaQ8y"><img src="spotify_logo.png" className="h-[60px]"/></a>
          <a className="cursor-pointer transition duration-100 ease-out hover:-translate-y-[3px]" target="_blank" href="https://music.apple.com/ca/artist/jayden-hagerty/1702645272"><img src="apple_music_logo.png" className="h-[60px]"/></a>
          <a className="cursor-pointer transition duration-100 ease-out hover:-translate-y-[3px]" target="_blank" href="https://www.youtube.com/@JaydenHagerty"><img src="youtube_logo.png" className="h-[60px]"/></a>
          <a className="cursor-pointer transition duration-100 ease-out hover:-translate-y-[3px]" target="_blank" href="https://www.tiktok.com/@jayden_hagerty"><img src="tiktok_logo.jpg" className="h-[60px] rounded-xl"/></a>
          <a className="cursor-pointer transition duration-100 ease-out hover:-translate-y-[3px]" target="_blank" href="https://www.instagram.com/jaydenhagertymusic/"><img src="instagram_logo.png" className="h-[60px]"/></a>
          <a className="cursor-pointer transition duration-100 ease-out hover:-translate-y-[3px]" target="_blank" href="https://soundcloud.com/jaydenhagerty"><img src="soundcloud_logo.png" className="h-[60px]"/></a>
          
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
