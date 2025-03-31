import { useState, useEffect } from "react";

export default function TypewriterText() {
  const fullText = "Hey! I'm Trey Israel";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const introText = "Hey! I'm ";
    const nameText = "Trey Israel";
    const typingDelay = 800;
    const introSpeed = 60;
    const nameSpeed = 120;

    let i = 0;

    const startTyping = setTimeout(() => {
      const typeIntro = setInterval(() => {
        setDisplayedText(introText.slice(0, i + 1));
        i++;
        if (i === introText.length) {
          clearInterval(typeIntro);
          i = 0;
          const typeName = setInterval(() => {
            setDisplayedText(introText + nameText.slice(0, i + 1));
            i++;
            if (i === nameText.length) {
              clearInterval(typeName);
              setInterval(() => {
                setShowCursor((prev) => !prev);
              }, 500);
            }
          }, nameSpeed);
        }
      }, introSpeed);
    }, typingDelay);

    return () => clearTimeout(startTyping);
  }, []);

  const introLength = "Hey! I'm ".length;
  const whitePart = displayedText.slice(0, introLength);
  const purplePart = displayedText.slice(introLength);

  return (
    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
      <span className="text-white">{whitePart}</span>
      <span className="text-[#a78bfa]">{purplePart}</span>
      <span
        className={`ml-1 inline-block align-middle bg-[#a78bfa] transition-opacity duration-200 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: "4px",
          height: "0.9em",
          transform: "translateY(-4px)",
          borderRadius: "1px",
        }}
      />
    </h1>
  );
}
