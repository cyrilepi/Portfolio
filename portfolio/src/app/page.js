import Image from "next/image";

export default function Home() {
  let d = new Date();
  let hours = d.getHours() + ":" + d.getMinutes();
  return (
    <>
      <div className="bg-cover h-screen bg-[url(/background_ubuntu.jpg)] flex justify-center items-center">
        <div className="absolute flow-root top-0 h-8 w-full bg-cover bg-[url(/barre_barre_du_haut.png)] shadow-[0_0px_10px_0px_rgba(0,0,0,0)] shadow-black flex">
          <div className="float-left ml-2 mt-1 font-semibold drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
            <p>Terminal</p>
          </div>

          <div className="flex mt-1 right-0 float-right mr-2 mt-0.5">
            <img className="h-6 ml-3" src="internet_barre_du_haut.png"></img>
            <img className="h-6 ml-3" src="langue_barre_du_haut.png"></img>
            <img className="h-6 ml-3" src="mail_barre_du_haut.png"></img>
            <img className="h-6 ml-3" src="volume_barre_du_haut.png"></img>
            <div className="ml-3 text-sm">{hours}</div>
            <img className="h-6 ml-3" src="parametre_barre_du_haut.png"></img>
          </div>
        </div>

        <div className="rounded-t-xl shadow-[0_5px_20px_0px_rgba(0,0,0,0)] shadow-black w-[80vw] mb-10">
          <div className="h-8 bg-[url(/barre_barre_du_haut.png)] bg-cover rounded-t-xl flex flex-wrap items-center">
            <img className="ml-2" src="croix_orange_barre_terminal.png"></img>
            <img className="" src="diminuer_barre_terminal.png"></img>
            <img className="" src="fullscreen_barre_terminal.png"></img>

            <div className="ml-2">
              <p className="text-slate-100 font-['Ubuntu_Mono'] font-semibold drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
                Ledieu@Cyril: ~
              </p>
            </div>
          </div>

          <div className="bg-black h-[70vh]">
            <div className="flex">
              <p className="ml-1 font-['Ubuntu_Mono'] font-semibold text-[#86e134] text-xl">
                Ledieu@Cyril
              </p>
              <p className="font-['Ubuntu_Mono'] text-xl">:</p>
              <p className="font-['Ubuntu_Mono'] text-xl text-[#6fa5cd]">~</p>
              <p className="font-['Ubuntu_Mono'] text-xl">$</p>
              <div className="h-5 w-3 ml-3 mt-0.5 bg-white"></div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
        <div className="bg-black flow-root bg-opacity-50 h-16 w-full absolute bottom-0">
          <div className="absolute bottom-0 ml-1 mb-1 flex">
            <img className="ml-1" src="bureau_barre_de_tache.png"></img>
            <img className="ml-1" src="terminal_barre_de_tache.png"></img>
            <img className="ml-1" src="document_barre_de_tache.png"></img>
            <img className="ml-1" src="firefox_barre_de_tache.png"></img>
            <img className="ml-1" src="software_barre_de_tache.png"></img>
            <img className="ml-1" src="parametre_barre_de_tache.png"></img>
          </div>
          <div className="w-14 absolute right-1 bottom-0 mb-1">
            <img src="corbeille_barre_de_tache.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}
