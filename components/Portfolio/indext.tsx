"use client"
import Link from "next/link";
import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState<string>("all");

  const handleProject = (category: any) => {
    setShowCard(category);
  };
  // js array object instead of portfolio cards 
  const projects: {
    id: number,
    tags: string[],
    ImageHref: string,
    title: string,
    button: string,
    buttonHref: string,
    showCard: string,
    category: string,
    github: string,
    behance: string
  }[] = [
      {
        id: 10,
        tags: ["website", "wordpress", "Own theme", "php"],
        category: "websites",
        ImageHref: "/img/dermaflage.jpg",
        title: "Dermaflage",
        button: "Demo",
        buttonHref: "https://dermaflage.com/",
        github: "",
        behance: "",
        showCard: showCard,
      },
      {
        id: 10,
        tags: ["website", "wordpress", "Own theme", "php"],
        category: "websites",
        ImageHref: "/img/philiptweedi.png",
        title: "Philip Tweedie & Company",
        button: "Demo",
        buttonHref: "https://philiptweedie.com/",
        github: "",
        behance: "https://www.behance.net/gallery/111344511/Philip-Tweedie-Property-web-Site",
        showCard: showCard,
      },
      {
        id: 11,
        tags: ["website", "wordpress", "Own theme", "php"],
        category: "websites",
        ImageHref: "/img/silver-dollar.png",
        title: "Silver Dollar Financial",
        button: "Demo",
        buttonHref: "https://silverdollarfinancial.com/",
        github: "",
        behance: "https://www.behance.net/gallery/93288835/httpssilverdollarfinancialco-Silver-Dollar-Finance",
        showCard: showCard,

      },
      {
        id: 12,
        tags: ["website", "wordpress", "woocomerce", "php"],
        category: "websites",
        ImageHref: "/img/armagh-sport.png",
        title: "Armagh Sports and Trophies",
        button: "Demo",
        buttonHref: "https://www.buytrophies.ie/",
        github: "",
        behance: "https://www.behance.net/gallery/114077791/Armagh-sports",
        showCard: showCard
      },

      {
        id: 13,
        tags: ["website", "wordpress", "Own theme", "php"],
        category: "websites",
        ImageHref: "/img/vms.png",
        title: "Velocity Merchant Services",
        button: "Demo",
        buttonHref: "https://www.getvms.com/",
        github: "",
        behance: "https://www.behance.net/gallery/96833213/Velocity-Merchant-Service-httpswwwgetvmscom",
        showCard: showCard
      },
      {
        id: 14,
        tags: ["website", "wordpress", "Own theme", "php"],
        category: "websites",
        ImageHref: "/img/pst.png",
        title: "Pure Speech Technology",
        button: "Demo",
        buttonHref: "https://www.purespeechtechnology.com/",
        github: "",
        behance: "https://www.behance.net/gallery/92660373/PureSpeechTechnolgoy-httpswwwpurespeechtechnology",
        showCard: showCard
      },

      {
        id: 15,
        tags: ["other"],
        category: "other",
        ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg",
        title: "Creative",
        button: "Internal",
        buttonHref: "#",
        github: "",
        behance: "",
        showCard: showCard,
      },
      {
        id: 1,
        tags: ["web-apps", "Next.js", "Themed", "TypeScript"],
        category: "web-apps",
        ImageHref: "/best-tailwind-templates.webp",
        title: "Dogwood Analytic",
        button: "Demo",
        buttonHref: "https://white-meadow-08a741110.3.azurestaticapps.net/",
        github: "https://github.com/hikmat12345/dw-analytic",
        behance: "https://www.behance.net/gallery/173373739/Dogwood-analytic",
        showCard: showCard,
      },
      {
        id: 2,
        tags: ["web-apps", "Next.js", "MUI", "TypeScript"],
        category: "web-apps",
        ImageHref: "/img/expert.png",
        title: "Expert Bookings Platform",
        button: "Demo",
        buttonHref: "https://expert.one/",
        github: "https://github.com/hikmat12345/new-expert",
        behance: "https://www.behance.net/gallery/137288555/Service-based-React-app",
        showCard: showCard,
      },
      {
        id: 3,
        tags: ["web-apps", "React", "Tailwind"],
        category: "web-apps",
        ImageHref: "/img/dr-clinica.png",
        title: "Dr Clinica",
        button: "Demo",
        buttonHref: "https://drclinica.com/",
        github: "https://github.com/hikmat12345/dr-clinica-customer",
        behance: "https://www.behance.net/gallery/173374311/Dr-clinica-partner",
        showCard: showCard,
      },
      {
        id: 4,
        tags: ["web-apps", "React", "Typescript", "MUI"],
        category: "web-apps",
        ImageHref: "/img/beeyond-boats.jpg",
        title: "Luxary Boat Rental Platform",
        button: "Demo",
        buttonHref: "https://beeyondboats.com/",
        github: "",
        behance: "https://www.behance.net/gallery/137289483/Beyond-Boats-(Service-base-app-)-MERN-stack",
        showCard: showCard,
      },

      {
        id: 5,
        tags: ["web-apps", "React", "MUI", "TypeScript"],
        category: "web-apps",
        ImageHref: "/img/plexaar.png",
        title: "Plexar ERP System",
        button: "Demo",
        buttonHref: "https://plexaar.com/",
        github: "https://github.com/hikmat12345/Plexaar-ERP",
        behance: "",
        showCard: showCard,
      },
      {
        id: 6,
        tags: ["web-apps", "Next.js", "Bootstrap"],
        category: "web-apps",
        ImageHref: "/img/chelsford.png",
        title: "Chelsford LMS System",
        button: "Demo",
        buttonHref: "https://chelsford.com/",
        github: "",
        behance: "",
        showCard: showCard,
      },
      {
        id: 7,
        tags: ["web-apps", "React", "MUI"],
        category: "web-apps",
        ImageHref: "/img/calendex.png",
        title: "Calendex BP",
        button: "Internal",
        buttonHref: "#",
        github: "",
        behance: "",
        showCard: showCard,
      },
      {
        id: 8,
        tags: ["web-apps", "Next.js", "Bootstrap"],
        category: "web-apps",
        ImageHref: "/img/rovel.png",
        title: "Rovel Inventory MS",
        button: "Internal",
        buttonHref: "#",
        github: "",
        behance: "",
        showCard: showCard,
      },
      {
        id: 9,
        tags: ["web-apps", "React", "MUI"],
        category: "web-apps",
        ImageHref: "/img/docloud.png",
        title: "Docloud",
        button: "Internal",
        buttonHref: "#",
        github: "",
        behance: "",
        showCard: showCard,
      },
    ]
  return (
    <>
      <section className="pt-20 px-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="slg:px-2 px-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-secondary">
                  My Expertise
                </span>
                <h2 className="mb-4 text-3xl font-bold text-primary dark:text-white sm:text-4xl md:text-[40px]">
                  Recent HubSpot & WordPress Projects
                </h2>
                <p className="text-base text-body-color dark:text-gray-400">
                  Specializing in 70% HubSpot (HubBL, CRM, CMS) and 30% WordPress.
                  Expert in Quote Templates, Websites, and Custom CRM solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 slg:px-1 px-5 text-center dark:bg-accent slg:text-xs text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                        ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
                      }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("websites")}
                    className={`inline-block rounded-lg py-2 slg:px-1 px-5 text-center dark:bg-accent slg:text-xs text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "websites"
                        ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
                      }`}
                  >
                    Websites
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("web-apps")}
                    className={`inline-block rounded-lg py-2 slg:px-1 px-5 text-center dark:bg-accent slg:text-xs text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "web-apps"
                        ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
                      }`}
                  >
                    FE (Web-Apps)
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("other")}
                    className={`inline-block rounded-lg py-2 slg:px-1 px-5 text-center dark:bg-accent slg:text-xs text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "other"
                        ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700"
                      }`}
                  >
                    Other
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {
              projects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  showCard={project.showCard}
                  category={project.category}
                  tags={project.tags}
                  ImageHref={project.ImageHref}
                  title={project.title}
                  button={project.button}
                  buttonHref={project.buttonHref}
                  github={project.github}
                  behance={project.behance}
                />
              ))
            }
            {
              showCard === "mobile-apps" && (
                <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[510px] text-center">

                    <h4 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                      No Projects
                    </h4>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
  tags,
  github,
  behance
}:
  {
    showCard: string;
    category: string,
    ImageHref: string;
    title: string;
    button: string;
    buttonHref: string;
    tags: string[],
    github: string,
    behance: string
  }) => {
  return (
    <>
      <div
        className={`w-full slg:px-1 px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
          }`}
      >

        <div className="relative mb-12">
          <div className="overflow-hidden rounded-lg bg-gradientemerald slg:h-60  h-80">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          {/* // bg-gradient-to-tr dark:from-slate-200 dark:to-slate-400  */}

          <div className="bg-white dark:bg-accent relative z-10 px-3 -mt-12 text-center 
          rounded-lg shadow-xl slg:mx-2 mx-7 py-5 border-b-4 border-secondary">

            <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">{title}</h3>
            <div className="flex justify-center mmd:flex-wrap mb-4">
              {tags?.map((category, index) => (
                <span key={index} className={`mr-1 mb-1 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded bg-primary dark:bg-hubspot-teal/40`}>
                  {category}
                </span>))}
            </div>
            <div className="flex justify-center flex-wrap gap-2">
              <Link
                target="_blank"
                href={buttonHref}
                className="inline-block text-white bg-secondary py-2 px-4 text-sm font-bold transition rounded-md hover:bg-opacity-90 shadow-md"
              >
                {button}
              </Link>
              {behance !== "" && <Link
                target="_blank"
                href={behance}
                className="inline-block text-primary dark:text-white border-2 border-primary dark:border-white/20 py-2 px-4 text-sm font-bold transition rounded-md hover:bg-primary hover:text-white"
              >
                Portfolio
              </Link>}
              {github !== "" ? <Link
                target="_blank"
                href={github}
                className="inline-block text-primary dark:text-white border-2 border-primary dark:border-white/20 py-2 px-4 text-sm font-bold transition rounded-md hover:bg-primary hover:text-white"
              >
                Github
              </Link> : <div className="inline-block text-gray-400 border-2 border-gray-200 dark:border-gray-700 py-2 px-4 text-sm font-bold rounded-md italic"
              > Private</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
