"use client";
import Image from "next/image";
import { useState } from "react";
import * as ReactDOM from "react-dom";

// function getHiddenPresent() {
//   element = document.getElementById("present");
//   element.classList.remove("hidden");
// }

// function getHiddenPro() {
//   element = document.getElementById("pro");
//   element.classList.remove("hidden");
// }

// function pushHidden() {
//     let i = 0;
//     let elements = document.getElementsByClassName("hide");
//     for (i ; i < elements.length; i++) {
//       elements[i].classList.add("hidden");
//     }
//   }

export default function Home() {
  let d = new Date();
  let hours = d.getHours() + ":" + d.getMinutes();

  const [showPro, setShowPro] = useState(false);
  const onClickPro = () => {
    setShowPro(true);
    setShowPresent(false);
    setShowProject(false);
    setShowMore(false);
  };
  const [showPresent, setShowPresent] = useState(false);
  const onClickPresent = () => {
    setShowPresent(true);
    setShowPro(false);
    setShowProject(false);
    setShowMore(false);
  };
  const [showProject, setShowProject] = useState(false);
  const onClickProject = () => {
    setShowProject(true);
    setShowPro(false);
    setShowPresent(false);
    setShowMore(false);
  };
  const [showMore, setShowMore] = useState(false);
  const onClickMore = () => {
    setShowMore(true);
    setShowPro(false);
    setShowPresent(false);
    setShowProject(false);
  };
  return (
    <>
      <div className="bg-cover h-screen bg-[url(/background_ubuntu.jpg)] flex justify-center items-center">
        <div className="absolute flow-root top-0 h-8 w-full bg-cover bg-[url(/barre_barre_du_haut.png)] shadow-[0_0px_10px_0px_rgba(0,0,0,0)] shadow-black flex">
          <div className="float-left ml-2 mt-1 font-semibold drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)] text-white">
            <p>Terminal</p>
          </div>

          <div className="flex mt-1 right-0 float-right mr-2 mt-0.5">
            <Image height={21} width={24} src="/internet_barre_du_haut.png" />
            <Image
              className="ml-2"
              height={21}
              width={24}
              src="/langue_barre_du_haut.png"
            />
            <Image
              className="ml-2"
              height={21}
              width={24}
              src="/mail_barre_du_haut.png"
            />
            <Image
              className="ml-2"
              height={21}
              width={24}
              src="/volume_barre_du_haut.png"
            />
            <div className=" ml-2 text-sm text-white">{hours}</div>
            <Image
              className="ml-2"
              height={21}
              width={24}
              src="/parametre_barre_du_haut.png"
            />
          </div>
        </div>

        <div className="rounded-t-xl shadow-[0_5px_20px_0px_rgba(0,0,0,0)] shadow-black w-[80vw] mb-10">
          <div className="h-8 bg-[url(/barre_barre_du_haut.png)] bg-cover rounded-t-xl flex flex-wrap items-center">
            <div className="flex ml-2">
              <Image
                height={19}
                width={21}
                src="/croix_orange_barre_terminal.png"
              />
              <Image
                height={19}
                width={21}
                src="/diminuer_barre_terminal.png"
              />
              <Image
                height={19}
                width={21}
                src="/fullscreen_barre_terminal.png"
              />
            </div>
            <div className="ml-2">
              <p className="text-white font-['Ubuntu_Mono'] font-semibold drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
                Portfolio@LedieuCyril: ~
              </p>
            </div>
            <div className="ml-60">
              <p className="text-teal-400 font-['Ubuntu_Mono'] font-semibold drop-shadow-[0_0px_1.2px_rgba(0,0,0,0.8)]">
                Recherche une alternance
              </p>
            </div>
          </div>

          <div className="bg-black h-[70vh]">
            <div className="flex mb-10">
              <p className="ml-1 font-['Ubuntu_Mono'] font-semibold text-[#86e134] text-xl">
                Ledieu@Cyril
              </p>
              <p className="font-['Ubuntu_Mono'] text-xl text-white">:</p>
              <p className="font-['Ubuntu_Mono'] text-xl text-[#6fa5cd]">~</p>
              <p className="font-['Ubuntu_Mono'] text-xl text-white">$</p>
              <div className="h-5 w-3 ml-3 mt-0.5 bg-white"></div>
            </div>
            <div className="relative w-full h-full">
              <div>
                {showPresent ? <Present /> : null}
                {showPro ? <Pro /> : null}
                {showProject ? <Project /> : null}
              </div>
              <div className="absolute w-full bottom-[4.5rem] flex justify-between">
                <button
                  className="text-white font-['Ubuntu_Mono'] border-bot border-b-[3px] border-dotted"
                  onClick={onClickPresent}
                >
                  Présentation
                </button>
                <button
                  className="text-white font-['Ubuntu_Mono'] border-bot border-b-[3px] border-dotted"
                  onClick={onClickPro}
                >
                  Coordonées/CV
                </button>
                <button
                  className="text-white font-['Ubuntu_Mono'] border-bot border-b-[3px] border-dotted"
                  onClick={onClickProject}
                >
                  Projets
                </button>
                <button
                  className="text-white font-['Ubuntu_Mono'] border-bot border-b-[3px] border-dotted"
                  onClick={onClickMore}
                >
                  Plus sur moi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black flow-root bg-opacity-50 h-16 w-full absolute bottom-0">
          <div className="absolute bottom-0 ml-1 mb-1 flex">
            <Image width={56} height={56} src="/bureau_barre_de_tache.png" />
            <Image
              className="ml-1"
              width={56}
              height={56}
              src="/terminal_barre_de_tache.png"
            />
            <Image
              className="ml-1"
              width={56}
              height={56}
              src="/document_barre_de_tache.png"
            />
            <Image
              className="ml-1"
              width={56}
              height={56}
              src="/firefox_barre_de_tache.png"
            />
            <Image
              className="ml-1"
              width={56}
              height={56}
              src="/software_barre_de_tache.png"
            />
            <Image
              className="ml-1"
              width={56}
              height={56}
              src="/parametre_barre_de_tache.png"
            />
          </div>
          <div className="w-14 absolute right-1 bottom-0 mb-1">
            <Image width={56} height={56} src="/corbeille_barre_de_tache.png" />
          </div>
        </div>
      </div>
    </>
  );
}

const Project = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/5 h-[15rem] border-b-2 border-white">
          <p className="text-center">PiePHP</p>
          <p className="text-justify">
            Création d'un framework MVC zzzzzzzzzzzzzzzzz zzzzzzzzzz
            zzzzzzzzzzzzz zzzz zzzzz zzzzzz zzzzzzz zzzzz zzzz zz z zz zzzzz zz
          </p>
        </div>
        <div className="w-2/5 h-[15rem] border-b-2 border-white ml-14">
          <p className="text-center">PiePHP</p>
          <p className="text-justify">
            Création d'un framework MVC zzzzzzzzzzzzzzzzz zzzzzzzzzz
            zzzzzzzzzzzzz zzzz zzzzz zzzzzz zzzzzzz zzzzz zzzz zz z zz zzzzz zz
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 h-[16rem] border-b-2 border-white">
          <p className="text-center">PiePHP</p>
          <p className="text-justify">
            Création d'un framework MVC zzzzzzzzzzzzzzzzz zzzzzzzzzz
            zzzzzzzzzzzzz zzzz zzzzz zzzzzz zzzzzzz zzzzz zzzz zz z zz zzzzz zz
          </p>
        </div>
        <div className="w-2/5 h-[16rem] ml-14 border-b-2 border-white">
          <p className="text-center">PiePHP</p>
          <p className="text-justify">
            Création d'un framework MVC zzzzzzzzzzzzzzzzz zzzzzzzzzz
            zzzzzzzzzzzzz zzzz zzzzz zzzzzz zzzzzzz zzzzz zzzz zz z zz zzzzz zz
          </p>
        </div>
      </div>
    </div>
  );
};

const Pro = () => {
  return (
    <div className="hide ml-1 text-white font-['Ubuntu_Mono'] font-semibold pro">
      <div className="flex">
        <p>Linkedin :</p>
        <a
          className="ml-2"
          target="_blank"
          href="https://www.linkedin.com/in/cyril-ledieu-1a725226a/"
        >
          https://www.linkedin.com/in/cyril-ledieu-1a725226a/
        </a>
      </div>
      <div className="flex mt-2">
        <p>Adresse mail : cyril.ledieu@epitech.eu</p>
      </div>
      <div className="flex mt-2">
        <p>Num de téléphone : 06-06-46-61-61</p>
      </div>
      <div className="flex mt-2">
        <p>Mon CV :</p>
        <embed src="/CV Ledieu Cyril.pdf" className="w-4/5 h-[20rem] ml-2" />
      </div>
    </div>
  );
};

const Present = () => {
  return (
    <div className="flex hide present">
      <div className="ml-5 mt-10 w-full">
        <Image
          className="border-dashed border-4 border-white p-1"
          width={300}
          height={300}
          src="/Photo CV.jpg"
        />
      </div>
      <div className="mt-8 mr-12 text-white font-['Ubuntu_Mono'] font-semibold w-full">
        <p className="text-lg text-center">Qui suis je ?</p>
        <br></br>
        <p className="text-jutify">
          Je suis un développeur web en formation de 23 ans qui a passé
          peut-être autant de temps à la lumière d'un écran qu'a celle du jour.
          Pour cause une passion pour l'informatique et les jeux vidéo depuis
          mes 12 ans, quand j'ai eu pour la première fois entre mes mains un
          ordinateur :D
        </p>
        <br></br>
        <p>
          Depuis j'ai toujours voulu savoir comment les choses se passent en
          coulisses, c'est ce qui m'a mené à vouloir devenir développeur et a
          suivre la web@cademie by Epitech.
        </p>
      </div>
    </div>
  );
};
