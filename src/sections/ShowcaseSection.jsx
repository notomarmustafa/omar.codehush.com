import React, {useRef} from 'react'

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const hushbot = useRef(null);
    const viris = useRef(null);
    const chat = useRef(null);

    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper">
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
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Viris"/>
                            </div>
                            <h2>AI-Powered Interview Website for Programmers.</h2>
                        </div>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="chat.codehush.com"/>
                            </div>
                            <h2>Discord clone that is fully functional for educational purposes only!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
