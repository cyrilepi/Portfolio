// TerminalInput.js
import React, { useState } from "react";

export default function TerminalInput({ onCommand }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onCommand(input); // Envoie la commande au composant parent
      setInput(""); // Réinitialise le champ d’entrée
    }
  };

  return (
    <div className="terminal-input">
      <span>cyril@ledieu-portfolio:~$ </span>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
}
