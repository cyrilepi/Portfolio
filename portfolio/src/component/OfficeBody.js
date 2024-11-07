import TerminalInput from "./TeminalInput";
import ShowText from "./FirstTextTerminal";
import { handleProjectsCommand } from './ShowProjects';
import { useState } from "react";
import "../css/office_body.css";
import "../css/ShowCV.css";

export default function OfficeBody() {
  const [terminalContent, setTerminalContent] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  const handleCommand = async (command) => {
    let newContent;
    let newTextContent;

    switch (command.toLowerCase()) {
      case "projets":
        const projectsData = await handleProjectsCommand();
        newTextContent = projectsData.newTextContent;
        newContent = projectsData.newContent;
        break;
      case "presentation":
        newTextContent = `<span>tapez "commandes" pour afficher la liste des commandes.
        <br><br>J'ai eu mon premier ordinateur dans les mains à l'âge de douze ans.
        <br><br>Rapidement, j'ai développé une passion pour le jeu vidéo et ma première étincelle de curiosité pour l'informatique en général en démontant les composants d'une tour.
        <br><br>Ma route à croisé celle de la web@cademie en .... et la découverte du développement informatique fut révélateur, cherchant la voie que j'allais emprunter dans ce domaine.
        <br><br>Celui-ci correspond particulièrement à mes appétences, étant assez féru des défis de l'intellect et curieux de comprendre les coulisses de ce monde. J'aurais pu, dans une autre vie, m'orienter vers la Biologie.</span>`;
        break;
      case "accueil":
        newTextContent = `<span>Bonjour et bienvenue sur mon Portfolio.
              <br><br>Je suis un jeune développeur web et ce Portfolio vous permettra de retracer mon parcours et d'en savoir plus sur moi et mes compétences.
              <br><br>Pour utiliser le terminal Linux dont vous êtes en train de lire le contenu, vous devrez taper à l'aide de votre clavier une commande et appuyer sur la touche Entrée. L'entrée textuelle se trouve en bas du terminal, juste à droite du texte [cyril@ledieu-portfilio:~$].
              <br><br>Voici la liste des commandes disponibles :
              <br><br>- accueil : Reviens à cette interface d'accueil.
              <br>- presentation : Présentation.
              <br>- CV : Affiche mon CV.
              <br>- projets : Affiche mes projets publiés sur GitHub.
              <br>- commandes : Affiche la liste des commandes.</span>`
        break;
        case "cv":
          newTextContent = `tapez "commandes" pour afficher la liste des commandes.<br><br>Mon CV :<br>`;
          newContent = (
            <div className="cv-container">
              <img alt="CV" src="/CV Ledieu Cyril.png" className="cv-image" />
            </div>
          )
          break;
        case "commandes":
        newTextContent = `<span>Liste des commandes :
        <br><br>- accueil : Revenir à cette interface d'accueil.
        <br>- presentation : Présentation.
        <br>- CV : Affiche mon CV.
        <br>- projets : Afficher mes projets publiés sur GitHub.
        <br>- commandes : Affiche la liste des commandes.</span>`
          break;
      default:
        newTextContent = `Commande non reconnue : ${command} `;
        break;
    }

    setTerminalContent([newTextContent, newContent]);
    setShowAnimation(false);
  };

  return (
    <div className="office-body">
      <div className="terminal-office-body">
        <div className="header-terminal-office-body">
          <div className="blblbl">
            <img
              className="plus-header-terminal-office-body"
              src="plus-header-terminal-office-body.png"
              alt="icon plus terminal"
            />
          </div>
          <p className="text-header-terminal-office-body">
            cyril@ledieu-portfolio: ~
          </p>
          <div className="right-header-terminal-office-body">
            <img
              className="square-img-right-header-terminal-office-body"
              src="loupe-header-terminal-office-body.png"
              alt="icon loupe terminal"
            />
            <img
              className="square-img-right-header-terminal-office-body"
              src="menu-header-terminal-office-body.png"
              alt="icon menu terminal"
            />
            <img
              className="circle-img-one-right-header-terminal-office-body"
              src="moins-header-terminal-office-body.png"
              alt="icon moins terminal"
            />
            <img
              className="circle-img-right-header-terminal-office-body"
              src="carré-header-terminal-office-body.png"
              alt="icon full screen terminal"
            />
            <img
              className="circle-img-right-header-terminal-office-body"
              src="close-header-terminal-office-body.png"
              alt="icon close terminal"
            />
          </div>
        </div>
        <div className="terminal_content">
          <div className="terminal-output">
            {showAnimation ? (
              <ShowText texte="<span>Bonjour et bienvenue sur mon Portfolio.
              <br><br>Je suis un jeune développeur web et ce Portfolio vous permettra de retracer mon parcours et d'en savoir plus sur moi et mes compétences.
              <br><br>Pour utiliser le terminal Linux dont vous êtes en train de lire le contenu, vous devrez taper à l'aide de votre clavier une commande et appuyer sur la touche Entrée. L'entrée textuelle se trouve en bas du terminal, juste à droite du texte [cyril@ledieu-portfilio:~$].
              <br><br>Voici la liste des commandes disponibles :
              <br><br>- accueil : Reviens à cette interface d'accueil.
              <br>- presentation : Présentation.
              <br>- CV : Affiche mon CV.
              <br>- projets : Affiche mes projets publiés sur GitHub.
              <br>- commandes : Affiche la liste des commandes.</span>" />
            ) : (
              <ShowText texte={terminalContent[0]} />
            )}
            {terminalContent[1]}
          </div>
          <TerminalInput onCommand={handleCommand} />
        </div>
      </div>
    </div>
  );
}
