import "../css/office_footer.css";

export default function OfficeFooter() {
  return (
    <div className="office-footer">
      <div className="top-office-footer">
        <img src="logo-firefox-footer.png" alt="logo firefox"></img>
        <img src="icon-folder-footer.png" alt="folder icon" />
        <img src="visual-studio-code-footer.png" alt="visuel studio code icon" />
        <img src="icon-teams-footer.png" alt="icon teams" />
        <img className="icon-terminal-office-footer" src="icon-terminal-footer.png" alt="icon terminal" />
        <img src="icons8-corbeille-footer.png" alt="icon corbeille" />
      </div>
      <div className="bottom-office-footer">
        <img
          className="activity-img-office-footer"
          src="grid-activity-footer.png"
          alt="activity"
        />
      </div>
    </div>
  );
}
