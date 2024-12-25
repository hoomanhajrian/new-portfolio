"use client";
import { useEffect, useState,createContext } from "react";
import { Project3D } from "./Project3D";
import { ProjectDataType } from "@/types";
import { Project2D } from "./Project2D";

export const Projects = () => {
  // screen dimentions
  const [screenDimention, updateScreenDimentions] = useState<{ width: number, height: number }>({
    width: 0,
    height: 0,
  });


  useEffect(() => {
    updateScreenDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const screenSizeHandler = () => {
      updateScreenDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", screenSizeHandler);
    return () => {
      window.removeEventListener("resize", screenSizeHandler);
    };
  }, []);


  // render on screen size

  if (screenDimention.width <= 900) {
    return (
      <Project2D projectsData={appData}/>
    );
  } else {
    return (
      <Project3D projectsData={appData}/>
    );
  }
};


const appData : ProjectDataType[] = [
  {
    id: 0,
    name: "Go Hike",
    position: "Full Stack Developer",
    year: " 2020-2021",
    href: "#",
    description:
      "Cordova-based mobile application that shows the hiking trails around the user and the user is able to see the route to the trail and the trail route itself on the map.",
    imgUrl: "/img/gohike.jpg",
    gitHub: "https://github.com/costa-rodrigo/goHike",
    position3D: [32.5, 7, 10],
  },
  {
    id: 1,
    name: "Farmer Fresh",
    position: "Full Stack Developer",
    year: " 2021-2022",
    href: "https://farmer-fresh-d266e.web.app/",
    description:
      "Java based mobile application that help farmers share their products and consumers are able to put an order for pick up or delivery.",
    imgUrl: "/img/farmerfresh.jpg",
    gitHub: "https://github.com/hoomanhajrian/FarmerFresh_android-app",
    position3D: [32.5, 7, 20],
  },
  {
    id: 2,
    name: "Patch App",
    position: "Full Stack Developer",
    year: " 2021-2022",
    href: "https://patch-app-a5afe.web.app/",
    description:
      "Online Platform for kids to learn, how to fix injuries in case of emergency. This platform was based on React Technology with the back end on AWS servers.",
    imgUrl: "/img/patchapp.jpg",
    gitHub: "https://github.com/costa-rodrigo/patch-frontend",
    position3D: [32.5, 7, 30],
  },

  {
    id: 3,
    name: "Movie Time",
    position: "Front End Developer",
    year: " 2022-2023",
    href: "https://movie-time-54da1.web.app/",
    description:
      "React based application using movie API and more features such as watching and commenting on the movies will be added later.",
    imgUrl: "/img/movie-time.jpg",
    gitHub: "https://github.com/hoomanhajrian/Moive-app",
    position3D: [32.5, 7, 40],
  },
  {
    id: 4,
    name: "Wedding Planner",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://react-redux-auth-544ed.web.app/",
    description:
      "We are here to make sure your event planning will go as perfect as it can be with the least affort using this platform. You can estimate your event total cost and book appointment for consultation about your event.",
    imgUrl: "/img/wedding.jpg",
    gitHub: "https://github.com/hoomanhajrian/EventPlanner",
    position3D: [32.5, 7, 50],
  },
  {
    id: 5,
    name: "Card Creator",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://card-creator-9f5f3.web.app/",
    description:
      "Platform for customizing your own business card and ordering it with QR code and NFC features that you can add to your card.",
    imgUrl: "/img/card-creator.jpg",
    gitHub: "https://github.com/hoomanhajrian/card-creator",
    position3D: [32.5, 7, 60],
  },
  {
    id: 6,
    name: "Tajhiz Aras",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://tajhizaras.ir/",
    description:
      "Online store for selling industrial kitchen equipment coded fully in React using Redux and many other libraries.(Site in farsi language)",
    imgUrl: "/img/tajhizaras.jpg",
    gitHub: "https://github.com/hoomanhajrian/tajhizaras",
    position3D: [32.5, -7, 10],
  },
  {
    id: 7,
    name: "Hesab Ketab",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://hesabketabapp.com/",
    description:
      "Online web application for small stores accounting and inventory management using React(TypeScript) and Nodejs",
    imgUrl: "/img/hesab.jpg",
    gitHub: "https://github.com/hoomanhajrian/hesabketab",
    position3D: [32.5, -7, 20],
  },
  {
    id: 8,
    name: "LapseMoon",
    position: "Full Stack Developer",
    year: " 2022-2023",
    href: "https://lapsemoon-hoomanhajrian.vercel.app/",
    description:
      "Web site for photographer introduction and portfolio and resume using Nextjs and Nodejs.",
    imgUrl: "/img/lapsemoon.jpeg",
    gitHub: "https://github.com/hoomanhajrian/lapsemoon",
    position3D: [32.5, -7, 30],
  },
  {
    id: 9,
    name: "Littlesellca",
    position: "Full Stack Developer",
    year: " 2023-current",
    href: "https://littlesellca-hooman-hajarians-projects.vercel.app/",
    description:
      "Online Platform to connect web customers to Amazon Market place and the business social media.",
    imgUrl: "/img/littesellca.jpg",
    gitHub: "https://github.com/hoomanhajrian/littlesellca",
    position3D: [32.5, -7, 40],
  },
  {
    id: 10,
    name: "Pacivil",
    position: "Full Stack Developer",
    year: " 2023-2024",
    href: "https://pacivil.com",
    description:
      "Website using Next.js technology using react for front end and simple mail service for backend all server side rendered.",
    imgUrl: "/img/pacivil.jpg",
    gitHub: "https://github.com/hoomanhajrian/pacivil",
    position3D: [32.5, -7, 50],
  },

  {
    id: 11,
    name: "Tariq Louis",
    position: "Full Stack Developer",
    year: " 2024-2025",
    href: "https://www.tariq-mesopotamiaart.com/en",
    description:
      "Website using Next.js technology using react for front end and simple mail service for backend all server side rendered coded for 2 different UIs for 2 languages.",
    imgUrl: "/img/tariq.jpg",
    gitHub: "https://github.com/hoomanhajrian/tariq",
    position3D: [32.5, -7, 60],
  },
  {
    id: 12,
    name: "Gojunk4moving",
    position: "Full Stack Developer",
    year: " 2024-2025",
    href: "https://www.gojunk4moving.ca/",
    description:
      "Website using Next.js technology using react for front end and simple mail service for backend. Components being rendered on server mostly.",
    imgUrl: "/img/gojunk.jpg",
    gitHub: "https://github.com/hoomanhajrian/gojunk4moving",
    position3D: [32.5, 7, 70],
  },

];




