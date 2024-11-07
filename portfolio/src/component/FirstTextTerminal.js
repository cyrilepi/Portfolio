import "../css/firstTextTerminal.css";
import { useEffect } from "react";

export default function ShowText({texte}) {

  useEffect(() => {
    let whiteBlinker = document.getElementById("white_blinker");
    let content = texte;
    let element = document.getElementById("textAnimation");
    let i = 0,
      stopCondition,
      text;

    (function animationText() {
      text = content.slice(0, ++i);
      if (text === content) {
        whiteBlinker.classList.add("blinker");
        return;
      }
      element.innerHTML = text;
      let char = text.slice(-1);
      if (char === "<") stopCondition = true;
      if (char === ">") stopCondition = false;
      if (stopCondition) return animationText();
      setTimeout(animationText, 15);
    })();
  });

  return (
    <div className="boxFirstTextTerminal">
      <span id="textAnimation" className="text"></span>
      <span id="white_blinker">&#32;</span>
    </div>
  );
}
