import { useEffect, useState } from "react";
import "../Cursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2, // easing factor
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [position]);

  return (
    <img
      src="/images/cursor.gif"
      alt="cursor"
      className="custom-cursor"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
      }}
    />
  );
}
