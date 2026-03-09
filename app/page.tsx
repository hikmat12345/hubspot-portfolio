import Accounts from '@/components/Accounts';
import BannerSection from '@/components/BannerSection';
import ContactForm from '@/components/ContactForm';
import NavTab from '@/components/NavTab';
import Portfolio from '@/components/Portfolio/indext';
import Reviews from '@/components/Reviews';
import SocialIconBar from '@/components/SocialIconBar';
import Image from 'next/image';
import Link from 'next/link';

export default async function Index() {

  const blogPosts = [
    {
      title: "Master Technologies and Guide for Frontend Development",
      date: "Aug 15",
      content: "In the fast-paced world of frontend development, choosing the right technologies and tools can significantly impact the success of your",
      readTime: "5 min read",
    },
    {
      title: "Elevate Your Node.js Development with Nest.js: A 90% Tool-Powered Solution",
      date: "Aug 20",
      content:
        "In the ever-evolving landscape of Node.js development, the tools and frameworks at your disposal can make a world of difference. While a simple Node.js app with Express.js might have served you well in the past, it’s time to consider a…",
      readTime: "3 min read",
    },
    {
      title: "Revolutionizing Frontend Development: Exploring TurboPack Alpha with Next.js 13",
      date: "Aug 30",
      content:
        "In the rapidly evolving landscape of frontend development, performance is paramount. As we venture into 2023, the tools we choose can make all the difference. Bid farewell to sluggish build times and unresponsive development environments, as we introduce you to the game-changer that is TurboPack Alpha in conjunction with Next.js…",
      readTime: "4 min read",
    },
    {
      title: "Here is a step-by-step guide on how to integrate Stripe with a Node.js backend and a React.js frontend",
      date: "Sep 07",
      content:
        "I tried to complete the Stripe integration with both the frontend and the Node.js backend. However, I couldn’t find effective methods to handle the Stripe integration on the backend. Here is a comprehensive guide that will help you overcome any challenges: Below are step-by-step instructions for both the frontend and…",
      readTime: "5 min read",
    },

  ];
  const skills = [
    {
      name: "Frontend Development",
      icon: "/img/reactjs.png",
      skillSet: [

        { name: "Elementor", skillNameLink: "https://elementor.com/", },
        { name: "Divi", skillNameLink: "https://www.elegantthemes.com/gallery/divi/", },
        { name: "Elementor Pro", skillNameLink: "https://elementor.com/pro/", },
        { name: "Divi Pro", skillNameLink: "https://www.elegantthemes.com/join/", },
        { name: "Beaver Builder Pro", skillNameLink: "https://www.wpbeaverbuilder.com/pricing/", },
        { name: "WP Bakery Pro", skillNameLink: "https://wpbakery.com/", },
        { name: "Visual Composer Pro", skillNameLink: "https://visualcomposer.com/", },
        { name: "WPML", skillNameLink: "https://wpml.org/", },
        { name: "Redux", skillNameLink: "https://redux.js.org/", },
        { name: "wp diagnostic", skillNameLink: "https://wordpress.org/plugins/wp-diagnostic/", },
        { name: "wp rocket", skillNameLink: "https://wp-rocket.me/", },
        { name: "wp smush", skillNameLink: "https://wordpress.org/plugins/wp-smushit/", },
        { name: "wp super cache", skillNameLink: "https://wordpress.org/plugins/wp-super-cache/", },
        { name: "wp fastest cache", skillNameLink: "https://wordpress.org/plugins/wp-fastest-cache/", },
        { name: "wp total cache", skillNameLink: "https://wordpress.org/plugins/w3-total-cache/", },
        { name: "wp seo", skillNameLink: "https://wordpress.org/plugins/wordpress-seo/", },
        { name: "wp php", skillNameLink: "https://wordpress.org/plugins/php/", },
        { name: "wp debug", skillNameLink: "https://wordpress.org/plugins/debug/", },
        { name: "wp security", skillNameLink: "https://wordpress.org/plugins/wp-security-audit-log/", },
        { name: "wp backup", skillNameLink: "https://wordpress.org/plugins/backup/", },
      ]
    },
    {
      name: "Backend Development",
      icon: "/img/nodejs.png",
      skillSet: [
        { name: "Wordpress Themes", skillNameLink: "https://developer.wordpress.org/themes/", },
        { name: "wordpress plugin", skillNameLink: "https://wordpress.org/plugins/", },
        { name: "wordpress templates", skillNameLink: "https://wordpress.org/themes/", },
        { name: "ACF", skillNameLink: "https://www.advancedcustomfields.com/", },
        { name: "Node, Express.js", skillNameLink: "https://expressjs.com/", },
        { name: "Nest.js", skillNameLink: "https://nestjs.com/", },
        { name: "Prisma, ORM", skillNameLink: "https://www.prisma.io/", },

        { name: "MySQL", skillNameLink: "https://www.mysql.com/", },
        { name: "GraphQL", skillNameLink: "https://graphql.org/", },
        { name: "wp plugin", skillNameLink: "https://wordpress.org/plugins/", },
        { name: "PostgreSQL", skillNameLink: "https://www.postgresql.org/", },

        { name: "MongoDB", skillNameLink: "https://www.mongodb.com/", },
        { name: "Redis", skillNameLink: "https://redis.io/", },

        { name: "Socket", skillNameLink: "https://socket.io/", },
        { name: "WebRTC", skillNameLink: " https://webrtc.org/", },
        { name: "PHP", skillNameLink: "https://www.php.net/", },
        { name: "custm theme", skillNameLink: "https://developer.wordpress.org/themes/", },
      ]
    },
    {
      name: "DevOps",
      icon: "/img/devops.png",
      skillSet: [
        { name: "Git", skillNameLink: "https://git-scm.com/", },
        // {name:"GitHub",skillNameLink : "https://github.com"},
        { name: "CD/CI", skillNameLink: "", },
        { name: "Jenkins", skillNameLink: "https://www.jenkins.io/", },
        // {name:"Travis CI",skillNameLink : "https://travis-ci.org/",},
        // {name:"Circle CI",skillNameLink : "https://circleci.com/",},
        { name: "Docker", skillNameLink: "https://www.docker.com/", },
        // {name:"Kubernetes",skillNameLink : "https://kubernetes.io/",},
        { name: "AWS", skillNameLink: "https://aws.amazon.com/", },
        { name: "Heroku", skillNameLink: "https://www.heroku.com/", },
        { name: "Netlify", skillNameLink: "https://www.netlify.com/", },
        { name: "Vercel", skillNameLink: "https://vercel.com/", },
        { name: "Digital Ocean", skillNameLink: "https://www.digitalocean.com/", },
        { name: "Nginx", skillNameLink: "https://www.nginx.com/", },
        { name: "Apache", skillNameLink: "https://httpd.apache.org/", },
        // {name:"Linux",skillNameLink : "https://www.linux.org/",},
        // {name:"Windows",skillNameLink : "https://www.microsoft.com/en-us/windows/",},
        // {name:"MacOS",skillNameLink : "https://www.apple.com/macos/",},
        { name: "Ubuntu", skillNameLink: "https://ubuntu.com/", },

      ]
    }

  ]
  const bgColor = 'linear-gradient(342deg, rgba(17,24,39,1) 0%, rgba(25,25,25,1) 98%)'
  return (
    <>
      {/* make a portfolio Hikmat javascript developer  */}
      <SocialIconBar />
      <BannerSection />
      <div className='w-full mt-4'>
        <div className='flex flex-row flex-wrap space-x-4 justify-between p-8'>
          <div className=' '>
            <p className='text-2xl font-semibold pb-3'>Schedule a meeting on your prefered day and time</p>
            <p className='text-lg'>
              Get a copy of my professional resume to learn more about my qualifications and
              experience.
            </p>
          </div>
          <div className='space-x-2 flex justify-center slg:mt-8' >

            <Link
              href={'https://calendly.com/hikmatullahit/30min'}
              target='_blank'
              className='bg-gradient-to-r from-hubspot-orange to-hubspot-charcoal bg-clip-text leading-[40px] tracking-[-0.05em] text-transparent sm:text-center    md:leading-[50px] md:tracking-[-0.07em]    lg:leading-[70px]'
            >
              <div className='pointer-events-none relative rounded-lg shadow-lg '>
                <div className='relative isolate z-10 m-[-2px] overflow-hidden rounded-[inherit] p-[3px]'>
                  <div className='animate-buttonStroke bg-buttonConicGradient absolute inset-0 origin-[center_center] blur-[4px] will-change-transform'></div>
                  <div className='relative z-50'>
                    <div className='flex items-center space-x-3 rounded-lg border border-[#ffffff10] bg-gray-100 px-4 font-bold text-gray-900 hover:bg-gray-200 dark:bg-[#17191c] dark:text-white'>
                      <span>Schedule a meeting</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2.5px'
                        stroke='currentColor'
                        aria-hidden='true'
                        className='h-5 w-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* my advantage  */}
      <div
        style={{
          marginTop: '3rem',
        }}
        className=' mt-4w-full relative pt-2 slg:px-2 px-10 dark:bg-grayGredient'
      >
        <div className='flex items-center'>
          <div className='lg:w-4/12 md:w-full sm:w-full'>
            <div className='bg-[#2221210d] dark:bg-[#222121] wpo-about-img slg:hidden'>
              {/* <Image className='w-full h-full relative p-8 bg-[#222121]'  */}
              <Image
                style={{
                  background: 'linear-gradient(169deg, rgba(17,24,39,1) 0%, rgba(25,25,25,1) 77%)',
                }}
                className='w-full h-full rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'
                src='/img/me.jpg'
                alt='Picture of the author'
                width={300}
                height={300}
              ></Image>
              <div className='icon-1 floating-item'>
                <Image
                  className='w-10 h-10'
                  alt='img'
                  title='React JS'
                  width={20}
                  height={20}
                  src='/img/reactjs.png'
                />
              </div>
              <div className='icon-2 floating-item'>
                <Image
                  className='w-10 h-10'
                  alt=' img '
                  title='Next Js'
                  width={20}
                  height={20}
                  src='/img/nextj.png'
                />
              </div>
              <div className='icon-3 floating-item'>
                <Image
                  className='w-10 h-10'
                  alt=' img '
                  title='Node Js'
                  width={20}
                  height={20}
                  src='/img/nj.png'
                />
              </div>
              <div className='icon-3 floating-item'>
                <Image
                  className='w-10 h-10'
                  alt=' img '
                  title='Wordpress Development'
                  width={20}
                  height={20}
                  src='/img/nj.png'
                />
              </div>
              <div className='project floating-item flex'>
                <div className='icon'>
                  {/* svg green icon for verified   */}
                  <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current text-green-500'>
                    <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm0 18.2c-4.2 0-7.6-3.4-7.6-7.6S7.8 5 12 5s7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6Z'></path>
                    <path
                      d='M16.2 9.8l-5.4 5.4-2.4-2.4c-.2-.2-.4-.2-.6 0-.2.2-.2.4 0 .6l3 3c.
                    1.2 1.2 3.2 1.2 4.4 0l6-6c.2-.2.2-.4 0-.6-.2-.2-.4-.2-.6 0Z'
                    ></path>
                  </svg>
                </div>
                <div className='p-text dark:text-black'>
                  <h3>
                    <span data-count='1500'>50</span>+
                  </h3>
                  <p className=''>Complete Project</p>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-8/12 lg:pl-4 md:w-full sm:w-full  pt-3'>
            <div className='slg:p-5 p-4  wpo-about-content '>
              <h2 className='text-3xl font-bold dark:text-white text-primary mb-4'>Professional Edge</h2>
              <p className='text-lg pt-2 dark:text-gray-300 text-gray-700 leading-relaxed'>
                {"I am"} a dedicated <strong>HubSpot & WordPress Expert</strong> with a focus on building high-performance digital solutions.
                My expertise lies in 70% HubSpot (CMS Hub, HubBL, Custom Quote Templates, and CRM integrations) and 30% WordPress (Custom Themes & Plugins).
                <br /><br />
                I bridge the gap between complex CRM workflows and stunning frontend experiences, ensuring your business stays ahead with seamless, automated, and visually captivating web solutions.
              </p>
              <div className=' wpo-about-funfact flex flex-wrap -mx-4  slg:justify-center'>
                <div className='slg:!mx-1 slg:!my-2 grid'>
                  <div className='slg:!p-[31px] grid-inner bg-hubspotGradient shadow-lg'>
                    <h3 className='text-xl font-bold text-white'>
                      <span data-count='95'>95</span>%
                    </h3>
                    <h5 className='text-xs font-bold text-white uppercase tracking-wider'>HubSpot CMS / HubBL</h5>
                  </div>
                </div>
                <div className='slg:!mx-1 slg:!my-2 grid'>
                  <div className='slg:!p-[31px] grid-inner bg-tealGradient shadow-lg'>
                    <h3 className="text-xl font-bold text-white">
                      <span data-count='92'>92</span>%
                    </h3>
                    <h5 className='text-xs font-bold text-white uppercase tracking-wider'>Quote Templates</h5>
                  </div>
                </div>
                <div className='slg:!mx-1 slg:!my-2 grid'>
                  <div className='slg:!p-[31px] grid-inner bg-charcoalGradient shadow-lg'>
                    <h3 className="text-xl font-bold text-white">
                      <span data-count='88'>90</span>%
                    </h3>
                    <h5 className='text-xs font-bold text-white uppercase tracking-wider'>CRM Integration</h5>
                  </div>
                </div>
                <div className='slg:!mx-1 slg:!my-2 grid'>
                  <div className='slg:!p-[31px] grid-inner bg-hubspotGradient shadow-lg'>
                    <h3 className="text-xl font-bold text-white">
                      <span data-count='72'>90</span>%
                    </h3>
                    <h5 className='text-xs font-bold text-white uppercase tracking-wider'>Custom WP Themes</h5>
                  </div>
                </div>
                <div className='slg:!mx-1 slg:!my-2 grid'>
                  <div className='slg:!p-[31px] grid-inner bg-tealGradient shadow-lg'>
                    <h3 className="text-xl font-bold text-white">
                      <span data-count='43'>85</span>%
                    </h3>
                    <h5 className='text-xs font-bold text-white uppercase tracking-wider'>Next.js / React</h5>
                  </div>
                </div>
                <div className='slg:!mx-1 slg:!my-2 grid'>
                  <div className='slg:!p-[31px] grid-inner bg-charcoalGradient shadow-lg'>
                    <h3 className="text-xl font-bold text-white">
                      <span data-count='37'>95</span>%
                    </h3>
                    <h5 className='text-xs font-bold text-white uppercase tracking-wider'>HTML/JS/PHP</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* companies I worked with
       */}
      <div
        className='pt-24 sm:px-8 pb-3 bg-white   dark:bg-blackGredient'
      // style={{
      //   background: bgColor,
      // }}
      >
        <div className='mx-auto '>
          <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className='mx-auto  '>
              <h3 className='text-2xl font-bold  pb-3 text-white'>Blog Posts</h3>

              <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
                <div className='flex flex-col gap-16'>

                  {blogPosts.map((post, index) => (
                    <article key={index} className='group relative flex flex-col items-start'>
                      <h2 className='text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'>
                        <div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl'></div>
                        <a href='/articles/crafting-a-design-system-for-a-multiplanetary-future'>
                          <span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'></span>
                          <span className='relative z-10 text-zinc-800 dark:text-white '>
                            {post.title}
                          </span>
                        </a>
                      </h2>
                      <time
                        className='relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500'
                        dateTime='2022-09-05'
                      >
                        <span
                          className='absolute inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
                        </span>
                        {post.date}
                      </time>

                      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                        {post.content}
                      </p>
                      <div
                        className=' absolute right-0 bottom-0 z-10 order-third mb-3 flex items-center pt-4 pl-0 text-sm text-zinc-400 dark:text-zinc-500'
                      >
                        <span
                          className='  inset-y-0 left-0 flex items-center'
                          aria-hidden='true'
                        >
                          {post.readTime}
                        </span>
                      </div>
                      <div
                        aria-hidden='true'
                        className='relative z-10 mt-1 flex items-center text-sm font-medium text-secondary'
                      >
                        Read article
                        <svg
                          viewBox='0 0 16 16'
                          fill='none'
                          aria-hidden='true'
                          className='ml-1 h-4 w-4 stroke-current'
                        >
                          <path
                            d='M6.75 5.75 9.25 8l-2.5 2.25'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          ></path>
                        </svg>
                      </div>
                    </article>
                  ))}

                  <form
                    action='/thank-you'
                    className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
                  >
                    <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                        className='h-6 w-6 flex-none'
                      >
                        <path
                          d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
                          className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
                        ></path>
                        <path
                          d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
                          className='stroke-zinc-400 dark:stroke-zinc-500'
                        >

                        </path>
                      </svg>
                      <span className='ml-3'>Stay up to date</span>
                    </h2>
                    <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                      Get notified when I publish something new, and unsubscribe at any time.
                    </p>
                    <div className='mt-6 flex'>
                      <input
                        type='email'
                        placeholder='Email address'
                        aria-label='Email address'
                        required
                        className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-secondary focus:outline-none focus:ring-4 focus:ring-secondary/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-secondary dark:focus:ring-secondary/10 sm:text-sm'
                      />
                      <button
                        className='ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-blueGredient   hover:bg-purple-300  px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition   active:bg-zinc-800 active:text-zinc-100/70 active:transition-none bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
                        type='submit'
                      >
                        Join
                      </button>
                    </div>
                  </form>

                </div>

                <div className='space-y-10 lg:pl-16 xl:pl-24'>


                  <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
                    <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                        className='h-6 w-6 flex-none'
                      >
                        <path
                          d='M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
                          className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
                        ></path>
                        <path
                          d='M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5'
                          className='stroke-zinc-400 dark:stroke-zinc-500'
                        ></path>
                      </svg>
                      <span className='ml-3'>Work</span>
                    </h2>
                    <ol className='mt-6 space-y-4'>
                      <li className='flex gap-4'>
                        <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                          <Image
                            className='rounded-full'
                            alt='Planetaria'
                            src='/selteq.jpg'
                            height={32}
                            width={32}
                          />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                          <dt className='sr-only'>Company</dt>
                          <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                            Selteq IT Solution - (Pakistan)
                          </dd>
                          <dt className='sr-only'>Role</dt>
                          <dd className='text-xs text-zinc-500 dark:text-zinc-400'>Wordpress PHP Developer</dd>
                          <dt className='sr-only'>Date</dt>
                          <dd
                            className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                            aria-label='2019 until Present'
                          >
                            <time dateTime='2019'>2022</time> <span aria-hidden='true'>—</span>{' '}
                            <time dateTime='2022'>Present</time>
                          </dd>
                        </dl>
                      </li>

                      <li className='flex gap-4'>
                        <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                          <Image alt='Facebook' className='rounded-full' src='/aivatek.jpg' height={32} width={32} />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                          <dt className='sr-only'>Company</dt>
                          <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                            AIVATEK
                          </dd>
                          <dt className='sr-only'>Role</dt>
                          <dd className='text-xs text-zinc-500 dark:text-zinc-400'>
                            Wordpress Full Stack Web Developer
                          </dd>
                          <dt className='sr-only'>Date</dt>
                          <dd
                            className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                            aria-label='2011 until 2014'
                          >
                            <time dateTime='2011'>2019</time> <span aria-hidden='true'>—</span>{' '}
                            <time dateTime='2014'>2022</time>
                          </dd>
                        </dl>
                      </li>
                      <li className='flex gap-4'>
                        <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                          <Image alt='Starbucks' className='rounded-full' src='/cps.jpg' height={32} width={32} />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                          <dt className='sr-only'>Company</dt>
                          <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                            Cyber peak solution
                          </dd>
                          <dt className='sr-only'>Role</dt>
                          <dd className='text-xs text-zinc-500 dark:text-zinc-400'>
                            Wordpress Developer (Rawalpindi, Pakistan)
                          </dd>
                          <dt className='sr-only'>Date</dt>
                          <dd
                            className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                            aria-label='2008 until 2011'
                          >
                            <time dateTime='2008'>2017</time> <span aria-hidden='true'>—</span>{' '}
                            <time dateTime='2011'>2019</time>
                          </dd>
                        </dl>
                      </li>
                    </ol>
                    <a
                      className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blueGredient text-white hover:bg-purple-300  px-3 py-2 text-sm font-medium outline-offset-2 transition   active:bg-zinc-100 active:text-zinc-900/60 active:transition-none    dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
                      href={'https://wa.me/923006115331'}
                    >
                      Whatsapp me, Will send you updated CV.
                      <svg
                        viewBox='0 0 16 16'
                        fill='none'
                        aria-hidden='true'
                        className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50'
                      >
                        <path
                          d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                    </a>
                  </div>

                  {/* tags  */}

                  <div
                    className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
                  >
                    <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                        className='h-6 w-6 flex-none'
                      >
                        <path
                          d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
                          className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
                        ></path>
                        <path
                          d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
                          className='stroke-zinc-400 dark:stroke-zinc-500'
                        ></path>
                      </svg>
                      <span className='ml-3'>Stay up to date</span>
                    </h2>

                    <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" data-te-spy-item="">
                      Skills
                    </h2>
                    {skills.map((skilset, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-medium">{skilset.name}</h3>
                        <div className="justify-content-start w-100 mb-4 text-start">
                          {skilset.skillSet.map((skillName, index) => (
                            <Link target='_blank' key={index} href={skillName.skillNameLink} type="button" data-te-ripple-init="" className="my-2 inline-block rounded-full bg-primary/10 px-3 mx-[2px] pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-primary shadow-sm transition duration-150 ease-in-out hover:bg-secondary hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary dark:bg-white/10 dark:text-white dark:hover:bg-secondary">
                              {skillName.name}
                            </Link>))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio  */}
      <Portfolio />

      <Accounts />
      <Reviews />
      <div className='w-full mt-4'>
        <div className='flex flex-row flex-wrap space-x-4 justify-between p-8'>
          <div className=' '>
            <p className='text-2xl font-semibold pb-3'>Schedule a meeting on your prefered day and time</p>
            <p className='text-lg'>
              Get a copy of my professional resume to learn more about my qualifications and
              experience.
            </p>
          </div>
          <div className='space-x-2 flex justify-center slg:mt-8' >
            <Link
              href={'https://calendly.com/hikmatullahit/30min'}
              target='_blank'
              className='bg-gradient-to-r from-hubspot-orange to-hubspot-charcoal bg-clip-text leading-[40px] tracking-[-0.05em] text-transparent sm:text-center    md:leading-[50px] md:tracking-[-0.07em]    lg:leading-[70px]'
            >
              <div className='pointer-events-none relative rounded-lg shadow-lg '>
                <div className='relative isolate z-10 m-[-2px] overflow-hidden rounded-[inherit] p-[3px]'>
                  <div className='animate-buttonStroke bg-buttonConicGradient absolute inset-0 origin-[center_center] blur-[4px] will-change-transform'></div>
                  <div className='relative z-50'>
                    <div className='flex items-center space-x-3 rounded-lg border border-[#ffffff10] bg-gray-100 px-4 font-bold text-gray-900 hover:bg-gray-200 dark:bg-[#17191c] dark:text-white'>
                      <span>Schedule a meeting</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2.5px'
                        stroke='currentColor'
                        aria-hidden='true'
                        className='h-5 w-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Contact us  */}

      <ContactForm />
      {/* <NavTab /> */}
    </>
  );
}
