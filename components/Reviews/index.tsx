import Image from 'next/image'
import React from 'react'

export default function Reviews() {
    const testimonialsData = [
        {
          quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
          author: "Leslie Alexander",
          role: "Freelance React Developer",
          avatar: "/img/avatar-male-1.png",
        },
        {
          quote: "As I understand that next js is fast and secure. But you made as i expected. I am so happy to work with you.",
          author: "Jacob Jones",
          role: "Digital Marketer",
          avatar: "/img/avatar-male-2.png",
        },
        {
          quote: "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
          author: "Jenny Wilson",
          role: "Graphic Designer",
          avatar: "/img/avatar-female.png",
        },
        {
            quote: "You made rest APIs so fast and secure with documentation. The main thing is that it is very easy to use and understand.",
            author: "Micheal Jordan",
            role: "Startup Founder",
            avatar: "/img/avatar.webp",
          },
      ];
      
  return (
    <section className="py-4  bg-gray-50 dark:bg-[#17191c] sm:py-4 lg:py-4">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
            <div className="text-center">
                {/* <p className="text-lg font-medium text-gray-600  dark:text-white font-pj">2,157 people have said how good Rareblocks</p> */}
                <h2 className="mt-4 text-3xl font-bold text-gray-900  dark:text-white sm:text-4xl xl:text-5xl font-pj">My happy clients say about me</h2>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
                <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600 dark:text-white"> Check all reviews </a>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
                <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                    <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
                </div>
                <div className="relative flex-wrap flex gap-3 mx-auto  lg:gap-4 ">
                   {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="slg:w-[100%] w-[24%]  slg:mt-3 h-60 relative overflow-hidden shadow-xl  bg-gradient-to-tr from-zinc-100 to-zinc-300  dark:from-zinc-800 dark:to-zinc-900 rounded-md">
                        <div className="flex flex-col justify-between flex-1 p-4  lg:py-4 lg:px-5">
                            <div className="flex-1">
                            <blockquote className="flex-1 mt-1 ">
                                <p className="text-lg leading-normal text-gray-900 dark:text-gray-300 font-pj">{testimonial.quote}</p>
                            </blockquote>
                            </div>
                            <div className="flex items-center mt-2 absolute bottom-6">
                            <Image width={300} height={300} className="flex-shrink-0 object-cover rounded-full w-11 h-11" src={testimonial.avatar} alt="" />
                            <div className="ml-4">
                                <p className="text-base font-bold text-gray-400 font-pj">{testimonial.author}</p>
                                <p className="mt-0.5 text-sm font-pj text-gray-400">{testimonial.role}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
