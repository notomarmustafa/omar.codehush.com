import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const hushbotRef = useRef(null);
    const virisRef = useRef(null);
    const chatRef = useRef(null);

    useGSAP(() => {
        const projects = [hushbotRef.current, virisRef.current, chatRef.current];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    })

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={hushbotRef}>
                      <div className="relative group xl:h-[70vh] md:h-[50vh] h-96 rounded-xl overflow-hidden">
                        <img
                          src="/images/projects/hushbot.png"
                          alt="Hush Bot"
                          className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
                          <a
                            href="https://discord.com/oauth2/authorize?client_id=1231284260963483748"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
                          >
                            Demo
                          </a>
                          <a
                            href="https://hush.codehush.com"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
                          >
                            Website
                          </a>
                        </div>
                      </div>

                      <div className="text-content">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5">
                          Hush Bot, Your Ultimate Discord Companion for Fun, Moderation, and Community Engagement!
                        </h2>
                        <p className="text-white-50 md:text-xl mt-2">
                          Hush Bot is a versatile Discord bot designed to enhance community engagement and moderation on servers. It features a variety of commands.
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden" ref={virisRef}>

                      {/* Viris Project */}
                      <div className="project">
                        <div className="relative group xl:h-[37vh] md:h-52 lg:h-72 h-64 bg-transparent rounded-xl overflow-hidden">
                          <img
                            src="/images/projects/viris.png"
                            alt="Viris"
                            className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
                            <a
                              href="https://viris.codehush.com"
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
                            >
                              Demo
                            </a>
                            <a
                              href="https://github.com/notomarmustafa/viris.codehush.com"
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
                            >
                              View Code
                            </a>
                          </div>
                        </div>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                          AI-Powered Interview Website for Programmers.
                        </h2>
                      </div>

                      {/* Chat Project */}
                      <div className="project" ref={chatRef}>
                        <div className="relative group xl:h-[37vh] md:h-52 lg:h-72 h-64 bg-transparent rounded-xl overflow-hidden">
                          <img
                            src="/images/projects/chat.png"
                            alt="chat.codehush.com"
                            className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center gap-4 transition-opacity duration-300">
                            <a
                              href="https://chat.codehush.com"
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
                            >
                              Demo
                            </a>
                            <a
                              href="https://github.com/notomarmustafa/chat.codehush.com"
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
                            >
                              View Code
                            </a>
                          </div>
                        </div>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                          Discord clone that is fully functional for educational purposes only!
                        </h2>
                      </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
