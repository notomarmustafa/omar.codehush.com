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
                        <div className="image-wrapper">
                            <img src="/images/hushbot.png" alt="Hush Bot" />
                        </div>
                        <div className="text-content">
                            <h2>Hush Bot, Your Ultimate Discord Companion for Fun, Moderation, and Community Engagement!</h2>
                            <p className="text-white-50 md:text-xl">
                                Hush Bot is a versatile Discord bot designed to enhance community engagement and moderation on servers. It features a variety of commands.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden" ref={virisRef}>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Viris"/>
                            </div>
                            <h2>AI-Powered Interview Website for Programmers.</h2>
                        </div>
                        <div className="project" ref={chatRef}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="chat.codehush.com"/>
                            </div>
                            <h2>Discord clone that is fully functional for educational purposes only!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
