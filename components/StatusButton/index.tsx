import { cn } from '../../lib/cn';
 

export const StatusButton = ( ) => {
  let indicator = '';

  /*
    Status Colors 
  */
  
  return (
    <div className='bg-gray-50 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-[6px]'>
      <a
        href={"statusData.page.url"}
        target='_blank'
        rel='noreferrer'
        aria-label='cloud status'
        className='flex items-center px-2 py-1 rounded-lg'
      >
        <span className={cn('inline-block w-3 h-3 mr-2 rounded-full', indicator)}></span>
        <span className='text-sm hover:text-berry-900 dark:text-gray-300'>
          {/* {statusData.status.description} */}
          description here
        </span>
      </a>
    </div>
  );
};
