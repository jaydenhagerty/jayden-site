import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  return (
    <>
      <div className="md:p-16 p-8 pt-32 md:pt-32 bg-black">
        {/* <h1 className="font-bold text-forest-700 text-3xl mb-4 mt-16">Big Projects</h1> */}
        <section className="w-full gap-8 flex flex-col">
          <div className="video-card">
            <div className="p-6 w-lg">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-3xl">Willem Boast</h1>
                {/* <p className="text-forest-700">HTML, JS, CSS</p> */}
              </div>
              {/* <p className="text-forest-700 ">A cinematic Minecraft trailer for an upcoming <a href="https://faunacraft.web.app" target="_blank" className="underline">FaunaCraft</a> server</p> */}
            </div>
            <iframe src="https://www.youtube.com/embed/zybqV01gWMY" className="aspect-video w-full" title="OstrichCraft | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="video-card">
            <div className="p-6 w-lg">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-3xl">The Search For Velma</h1>
                {/* <p className="text-forest-700">HTML, JS, CSS</p> */}
              </div>
              {/* <p className="text-forest-700 ">A cinematic Minecraft trailer for an upcoming <a href="https://faunacraft.web.app" target="_blank" className="underline">FaunaCraft</a> server</p> */}
            </div>
            <iframe src="https://www.youtube.com/embed/d_Etdy9TcMY" className="aspect-video w-full" title="OstrichCraft | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="video-card">
            <div className="p-6 w-lg">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-3xl">Evo Shards: The Fatal Pursuit</h1>
                {/* <p className="text-forest-700">HTML, JS, CSS</p> */}
              </div>
              {/* <p className="text-forest-700 ">A cinematic Minecraft trailer for an upcoming <a href="https://faunacraft.web.app" target="_blank" className="underline">FaunaCraft</a> server</p> */}
            </div>
            <iframe src="https://www.youtube.com/embed/TZ2cFa_mO84?start=301" className="aspect-video w-full" title="OstrichCraft | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="video-card">
            <div className="p-6 w-lg">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-3xl">Prof. Hagerty Opens the Multiverse</h1>
                {/* <p className="text-forest-700">HTML, JS, CSS</p> */}
              </div>
              {/* <p className="text-forest-700 ">A cinematic Minecraft trailer for an upcoming <a href="https://faunacraft.web.app" target="_blank" className="underline">FaunaCraft</a> server</p> */}
            </div>
            <iframe src="https://www.youtube.com/embed/Ctl38XQCHJM" className="aspect-video w-full" title="OstrichCraft | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="video-card">
            <div className="p-6 w-lg">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-3xl">Creativity: To Feel, To Heal</h1>
                {/* <p className="text-forest-700">HTML, JS, CSS</p> */}
              </div>
              {/* <p className="text-forest-700 ">A cinematic Minecraft trailer for an upcoming <a href="https://faunacraft.web.app" target="_blank" className="underline">FaunaCraft</a> server</p> */}
            </div>
            <iframe src="https://www.youtube.com/embed/qRESsZLpSPg" className="aspect-video w-full" title="OstrichCraft | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="video-card">
            <div className="p-6 w-lg">
              <div className="flex flex-column justify-between space-x-4 items-center">
                <h1 className="font-bold text-3xl">OstrichCraft Official Trailer</h1>
                {/* <p className="text-forest-700">HTML, JS, CSS</p> */}
              </div>
              <p className="text-forest-700 ">A cinematic Minecraft trailer for an upcoming <a href="https://faunacraft.web.app" target="_blank" className="underline">FaunaCraft</a> server</p>
            </div>
            <iframe src="https://www.youtube.com/embed/dJyPF1ApkdA" className="aspect-video w-full" title="OstrichCraft | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
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
