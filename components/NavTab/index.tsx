"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';



const NavTab = () => {
    const navigationData = [
        {
                 title: "home",
                 inActiveIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                         ></path>
                     </svg>
                     `,
                 activeIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                         ></path>
                     </svg>
                     `,
             },
             {
                 title: "user profile",
                 inActiveIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                         ></path>
                     </svg>
                     `,
                 activeIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         fill-rule="evenodd"
                         d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                         clip-rule="evenodd"
                         ></path>
                     </svg>
                     `,
             },
             {
                 title: "likes",
                 inActiveIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                         ></path>
                     </svg>
                     `,
                 activeIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         fill-rule="evenodd"
                         d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                         clip-rule="evenodd"
                         ></path>
                     </svg>
                     `,
             },
             {
                 title: "tickets",
                 inActiveIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                         ></path>
                     </svg>
                     `,
                 activeIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                         ></path>
                     </svg>
                     `,
             },
             {
                 title: "settings",
                 inActiveIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                         ></path>
                         <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                         ></path>
                     </svg>
                     `,
                 activeIcon: `
                     <svg
                         aria-hidden="true"
                         class="w-8 h-8 text-purple-500"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                         <path
                         fill-rule="evenodd"
                         d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                         clip-rule="evenodd"
                         ></path>
                     </svg>
                     `,
             },
         
       // Add data for other menu items
     ];
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    // @ignore ts 
    // @ts-ignore
    const indicator: any = document.getElementById('indicator');
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        setActiveLink(navigationData[index].title);

        indicator.style.transform = `translateX(calc(${96 * index}px)`;
      });
    });
  }, []);
 console.log(navigationData)
  return (
    <div className="flex items-center justify-center  antialiased fixed
    bottom-0
    left-0
    right-0
    w-96
    m-auto">
      <div className="relative flex items-center px-6 overflow-hidden bg-white border-4 border-purple-500 h-20 rounded-2xl">
        <nav className="flex items-center justify-center gap-8">
           
          {navigationData.map((link :any, index: number) => (
            <Link onClick={()=>setActiveLink( link.title)} href="/#" className="nav-link grid w-16 h-16 grid-cols-1 grid-rows-1 text-purple-500" key={link.title}>
              <span className="sr-only">{link.title}</span>
              <div className="col-[1/1] row-[1/1] flex items-center justify-center w-16 h-16" dangerouslySetInnerHTML={{ __html: link.inActiveIcon }}></div>
              <div className={`col-[1/1] row-[1/1] flex items-center justify-center w-16 h-16 transition-opacity duration-300 ${activeLink === link.title ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} dangerouslySetInnerHTML={{ __html: link.activeIcon }}></div>
            </Link>
          ))}
        </nav>
         <div id="indicator" className="absolute w-6 h-8 transition-all duration-300 bg-purple-500 rounded-full -bottom-4 left-11">
          <div style={{ boxShadow: '0 10px 0 #a855f7' }} className="absolute w-5 h-5 bg-white -left-4 bottom-1/2 rounded-br-3xl"></div>
          <div style={{ boxShadow: '0 10px 0 #a855f7' }} className="absolute w-5 h-5 bg-white -right-4 bottom-1/2 rounded-bl-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default NavTab;
