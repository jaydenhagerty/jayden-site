"use client";

import { useState } from "react";
import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhase, setModalPhase] = useState(1);

  return (
    <>
      <section className="md:p-16 p-8 pt-24 md:pt-24 bg-black">
        <Link
          className="mb-8 cursor-pointer transition transform hover:-translate-x-2 w-min pr-16 text-forest-800 font-bold text-xl flex items-center gap-2"
          href="/software"
        >
          <img src="left-arrow.png" className="h-[24px]" />
          Back
        </Link>

        <div className="rounded-2xl shadow-lg bg-forest-950 text-off-white overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row w-full gap-8 items-start">
              <div className="flex-1">
                <h1 className="font-bold text-4xl mb-2">Redemption Pocket</h1>
                <b className="block text-forest-700">Available as a Progressive Web App</b>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    className="logo-button button text-off-white px-4 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 bg-forest-900"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get the mobile app!
                  </button>
                  <a
                    className="logo-button text-off-white px-4 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 bg-forest-900"
                    href="https://redemptionpocket.web.app/"
                    target="_blank"
                  >
                    Play on web
                  </a>
                  <a
                    className="logo-button text-off-white px-4 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 bg-forest-900"
                    href="https://github.com/jaydenhagerty/redemption-pocket"
                    target="_blank"
                  >
                    <img src="/github_logo.webp" className="h-[25px]" />
                    GitHub
                  </a>
                </div>
                <p className="block mt-8">
                  A digital collectathon for the Redemption trading card game.
                </p>
              </div>
              <div className="w-full md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/redemptionpocket1.png"
                  alt="Redemption Pocket Screenshot"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 bg-black z-100 flex items-center justify-center bg-opacity-20 mt-[-100px]">
          <div className="bg-forest-950 text-off-white p-8 rounded-2xl shadow-xl w-11/12 max-w-md relative">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Get the App</h2>
              <p
                className="cursor-pointer text-xl bg-forest-900 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => {
                  setIsModalOpen(false);
                  setModalPhase(1);
                }}
              >
                ×
              </p>
            </div>

            {/* PHASE CONTENT */}
            {modalPhase === 1 ? (
              <>
                <div className="px-16 py-6">
                  <a href="https://redemptionpocket.web.app/" target="_blank">
                    <img src="/redemption_qr.png" />
                    <p className="flex justify-center text-xl">
                      redemptionpocket.web.app
                    </p>
                  </a>
                </div>
                <button onClick={() => setModalPhase(2)} className="chill-button w-full text-xl logo-button items-center justify-center">Next <img className="h-[16px]" src="right-arrow.png"/></button>
              </>
            ) : (
              <>
                <div className="py-10 text-center space-y-4">
                  <h3 className="text-xl font-semibold">You’re almost there</h3>
                  <p className="">
                    Once you're on the site, look for your mobile browser's "Add to
                    Home Screen" option.
                  </p>
                  <img src="add_homescreen.png" className="mx-auto w-full rounded-2xl" />
                </div>

                <button
                  className="chill-button block text-center bg-forest-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
                  onClick={() => {
                    setIsModalOpen(false)
                    setModalPhase(1)}}
                >
                  Done!
                </button>
              </>
            )}
          </div>
        </div>
      )}


      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-black"
        fillColor="var(--color-forest-900)"
      />
    </>
  );
}

export default App;
