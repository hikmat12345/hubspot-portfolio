// /* Docs: https://env.t3.gg/ */

// import { createEnv } from '@t3-oss/env-nextjs';
// import { z } from 'zod';

// export const env = createEnv({
//   /*
//    * Serverside Environment variables, not available on the client.
//    * Will throw if you access these variables on the client.
//    */
//   server: {
//     BASE_URL: z.string().min(12),
//     // OPENAI_API_KEY: z.string().min(47),
//     MONGODB_URI : z.string().min(12),
//     MONGODB_DB_NAME: z.string().min(1),
//   },
//   /*
//    * Environment variables available on the client (and server).
//    *
//    * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
//    */
//   client: {
//     // NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().min(11),
//   },
//   /*
//    * Due to how Next.js bundles environment variables we need to manually destructure them.
//    * For Next.js >= 13.4.4, you only need to destructure client variables (those that
//    * start with "NEXT_PUBLIC_")
//    */
//   // experimental__runtimeEnv: {
//   //   NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
//   // },
//   runtimeEnv: {
//     BASE_URL: process.env.BASE_URL,
//     MONGODB_URI: process.env.MONGODB_URI,
//     MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
//   },
// });
