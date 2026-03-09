// // types
// import TickCircl from '@/components/Svgs/tick';
// import { env } from '@/data/env.mjs';
// import type { Metadata } from 'next';
// import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Blog',
//   // description: 'NextJS + TailwindCSS minimalist starter kit',
//   // openGraph: {
//   //   title: 'NextJS + TailwindCSS minimalist starter kit',
//   //   description: 'The React Framework for the Web',
//   //   url: 'https://nextjs.org',
//   //   siteName: 'Next.js',
//   //   images: [
//   //     {
//   //       url: 'https://nextjs.org/og.png',
//   //       width: 800,
//   //       height: 600,
//   //     },
//   //   ],
//   //   locale: 'en-US',
//   //   type: 'website',
//   // },
// };

// const fetcheAllPosts = async () => {
//   const res = await fetch(`http://localhost:3000/api/tutorials`, {
//     method: 'GET',
//     cache: 'no-store', // Disable caching
//   });
//   const data = await res.json();
//   return data; 
// };

// export default async function Index() {
//   const postsList = await fetcheAllPosts();
//   console.log(postsList, 'postsList.data')
//    const filterPostsCategories = postsList.data.map((obj: any) => obj.category);
//    const makeSeparate = Array.from(new Set(filterPostsCategories));
//   const makeBoxes = makeSeparate.map((eachCategoryName) => {
//     const objs = postsList.data.filter((post: any) => {
//       return post.category == eachCategoryName;
//     });
//     return objs;
//   });
//   return (
//     <>
//       <div className='w-full'>
//         <p className='mt-6 text-lg text-gray-900 dark:text-[#AAB7D2] sm:text-center md:mt-6 lg:text-[22px] lg:leading-[33px]'>
//           Next Js
//         </p>
//       </div>

//       {/*
//         Big Rounded Section
//       */}
//       {makeBoxes.map((posts) => {
//         return (
//           <div className="relative my-8 grid grid-cols-1 gap-8 rounded-[25px] border-[2px] border-transparent bg-gray-100 bg-clip-padding p-8 text-sm text-gray-900 before:absolute before:inset-0 before:z-[-1] before:m-[-2px] before:rounded-[inherit] before:bg-gradient-to-r before:from-violet-500 before:to-fuchsia-500 before:content-[''] dark:bg-[#09101F] dark:text-[#AAB7D2] sm:mx-8 md:grid-cols-3 lg:p-12">
//             {posts.map((post: any) => {
//               return (
//                 <div className='flex items-start space-x-2'>
//                   <div className='flex flex-col space-y-4'>
//                     <Link
//                       className='transition duration-300 text-primary text-hover'
//                       href={`/blog/${post.title.replaceAll(' ', '-')}?id=${post._id}`}
//                     >
//                       <div className='flex items-center space-x-2'>
//                         <TickCircl />
//                         <h2 className='pt-[2px] text-base font-semibold text-gray-900 dark:text-gray-100'>
//                           {post.title}
//                         </h2>
//                       </div>
//                       <p>{post.detail}</p>
//                     </Link>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </>
//   );
// }

import React from 'react'

export default function page() {
  return (
    <div className='mx-auto  pt-40 h-screen '>
       <h1 className="text-4xl text-center  font-bold">Blog posts comming soon!</h1>
    </div>
  )
}
