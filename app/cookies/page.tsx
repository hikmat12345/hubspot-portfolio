// types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies',
  // description: 'NextJS + TailwindCSS minimalist starter kit',
  // openGraph: {
  //   title: 'NextJS + TailwindCSS minimalist starter kit',
  //   description: 'The React Framework for the Web',
  //   url: 'https://nextjs.org',
  //   siteName: 'Next.js',
  //   images: [
  //     {
  //       url: 'https://nextjs.org/og.png',
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
};


export default function Index() {
  return (
    <div className='mx-auto max-w-4xl'>
      <div className='prose prose-lg mb-8 max-w-none break-words dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500'>
        <div className='flex w-full px-4 pt-12 text-center'>
          <div className='w-full'>
             
            <h2 className='px-6 pb-12 pt-6 text-xl leading-relaxed  dark:text-gray-300 sm:px-24'>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </h2>
          </div>
        </div>

        <article className='prose max-w-none dark:prose-invert'>
        

      <section className="my-8">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p>This Privacy Policy outlines the information handling practices of [Your Name], a Software Engineer and Full Stack Developer. We are committed to protecting your privacy and ensuring that your personal information remains secure.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold">Information We Collect</h2>
        <p>We collect and process the following information:</p>
        <ol className="list-decimal list-inside ml-4">
          <li><span className="font-bold">Personal Information:</span> We may collect your name, email address, phone number, and location for the purpose of communication and providing our services.</li>
          <li><span className="font-bold">Resume Download:</span> If you choose to download our professional resume, we will collect your email address for this purpose.</li>
          <li><span className="font-bold">Contact Form:</span> If you reach out to us using the contact form on our website, we will collect your name, email address, phone number, and the content of your message.</li>
          <li><span className="font-bold">Portfolio Projects:</span> Information about our portfolio projects may be shared on our website, but this does not include personal information.</li>
        </ol>
      </section>

      {/* Add more sections for "How We Use Your Information," "Data Security," "Third-Party Services," "Your Choices," and "Contact Information" as needed. */}

      <footer className="mt-8 text-center">
        <p className="text-gray-600">Changes to this Privacy Policy</p>
        <p>We may update this Privacy Policy from time to time. Please review this policy periodically to stay informed about how we are protecting your personal information.</p>
      </footer>
        </article>
        <div className='py-8 text-center text-sm text-slate-500'>[As of August 20th, 2023]</div>
      </div>
    </div>
  );
}
