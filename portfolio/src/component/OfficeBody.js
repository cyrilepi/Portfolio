import TerminalInput from "./TeminalInput";
import ShowText from "./FirstTextTerminal";
import { useState } from "react";
import "../css/office_body.css";
import "../css/ShowCV.css";

async function fetchGitHubProjects() {
  const response = await fetch("https://api.github.com/users/cyrilepi/repos");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des projets GitHub");
  }
  const repos = await response.json();
  return repos.map((repo) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
  }));
}

export default function OfficeBody() {
  const [terminalContent, setTerminalContent] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  const handleCommand = async (command) => {
    let newContent;
    let newTextContent;

    switch (command.toLowerCase()) {
      case "projets":
        try {
          const projects = await fetchGitHubProjects();
          newTextContent = "Mes projets : <br>"
          newContent = projects.length
            ? projects.map((project, index) => (
                <div key={index}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                  <p>{project.description || "Aucune description disponible"}</p>
                </div>
              ))
            : "Aucun projet disponible.";
        } catch (error) {
          newTextContent = "Erreur lors de la récupération des projets.";
        }
        break;
      case "présentation":
        newTextContent = "";
        break;
      default:
        newTextContent = `Commande non reconnue : ${command} `;
        newContent = "";
        break;
    }

      setTerminalContent([newTextContent, newContent]);
      setShowAnimation(false); // Arrête d'afficher l'animation après la première commande
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
              <ShowText texte="<span>Bonjour et bienvenue sur mon Portfolio.<br/><br/>Je suis un étudiant en quête de devenir développeur web. Ma rencontre avec l'école Epitech fut décisive en ce sens, et ce Portfolio retrace mon parcours au sein de celle-ci. <br/><br/><span>Pour accéder à l'ensemble de mes projets, il vous suffit de taper projets et d'appuyer sur entrée.</br></br>Si vous souhaitez me contacter :</br></br>Adresse mail : cyril.ledieu@epitech.eu</br><a href='https://www.linkedin.com/in/cyril-ledieu-1a725226a/'>Linkedin</a></span>" />
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
