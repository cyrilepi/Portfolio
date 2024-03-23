import "../css/office_header.css";
import { useState, useEffect } from "react";

export default function OfficeHeader() {
  const [time, setTime] = useState({
    month: "",
    day: "",
    hour: "",
    minute: "",
  });
  const getInfo = new Date();

  useEffect(() => {
    const clock = setInterval(() => {
      clearInterval(clock);
      setTime({
        month: getInfo.toLocaleString("fr", {month: "short"}),
        day: ("0" + getInfo.getDate()).slice(-2),
        hour: ("0" + getInfo.getHours()).slice(-2),
        minute: ("0" + getInfo.getMinutes()).slice(-2),
      });
    }, 1000);
  });
  
  return (
    <div className="office-header">
      <div className="left-office-header">
        <p className="activity-office-header">Activités</p>
        <img className="terminal-logo-office-header" src="terminal-header.png" alt="icone terminal" />
        <p>Terminal</p>
      </div>
      <div className="center-office-header">
        <p className="date-office-header">
          {time.day} {time.month}
        </p>
        <p>
          {time.hour}:{time.minute}
        </p>
      </div>
      <div className="right-office-header">
        <img src="wifi-header.png" alt="wifi" />
        <img className="sound-office-header" src="volume-header.png" alt="volume" />
        <img
          className="batterie-office-header"
          src="batterie-header.png"
          alt="batterie"
        />
      </div>
    </div>
  );
}
