import "../css/firstTextTerminal.css";
import { useEffect } from "react";

export default function FirstTextTerminal() {
  let data =
    "<span>Bonjour et bienvenue sur mon Portfolio.<br/><br/>Afin de vous garantir la meilleure expérience possible, j'ai besoin d'une seule information. Avez vous déjà utilisé un terminal ?</span><br/><br/><span>Pour me répondre, il vous suffit de taper oui ou non dans le terminal et de présser la touche entrée.</span>";

  useEffect(() => {
    let whiteBlinker = document.getElementById("white_blinker");
    let content = data;
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
      setTimeout(animationText, 30);
    })();
  });

  return (
    <div className="boxFirstTextTerminal">
      <span id="textAnimation" className="text"></span>
      <span id="white_blinker">&#32;</span>
    </div>
  );
}
