import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="https://codehush.com/termsofservice" className="underline" target="_blank">Terms and Conditions</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        &#169; {new Date().getFullYear()} Omar | <a href="https://codehush.com" target="_blank" className="underline">CodeHush</a>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
