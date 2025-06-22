import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';

const NotFoundPage = () => {
  const sectionRef = useRef(null);
  const zeroRef = useRef(null);
  const [easter, setEaster] = useState(false);
  const navigate = useNavigate();

  const audio = new Audio('/sounds/easter.mp3'); // Put your audio in /public/sounds

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  const handleEasterClick = () => {
    if (easter) return;

    setEaster(true);
    audio.play();

    // Confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // GSAP bounce animation
    gsap.fromTo(
      zeroRef.current,
      { scale: 1 },
      {
        scale: 1.5,
        rotate: 360,
        duration: 1,
        ease: 'bounce.out',
        onComplete: () => {
          // Mini game start: bouncing effect
          gsap.to(zeroRef.current, {
            y: -50,
            repeat: -1,
            yoyo: true,
            duration: 0.4,
            ease: 'power1.inOut',
          });
        },
      }
    );

    sessionStorage.setItem('fun_access_granted', 'true');

    setTimeout(() => {
      navigate('/fun');
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-20 py-20"
    >
      <h1 className="text-[100px] md:text-[160px] font-bold text-white leading-none select-none">
        4
        <span
          ref={zeroRef}
          onClick={handleEasterClick}
          className="inline-block cursor-pointer transition-transform relative"
          title="Click me!"
        >
          0
        </span>
        4
      </h1>
      <p className="text-white-50 text-xl md:text-2xl mb-6">
        {easter
          ? "😎 Nice! Mini game loading..."
          : "Oops! The page you're looking for doesn't exist."}
      </p>
      <Link
        to="/"
        className="px-6 py-3 border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
