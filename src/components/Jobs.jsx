import { BiTimeFive } from 'react-icons/bi';

const Jobs = () => {
  const openPositions = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/3536/3536785.png',
      title: 'Web Developer',
      time: 'Now',
      location: 'Canada',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      eligendi.`,
      company: 'Novac Linus Co.',
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/5969/5969073.png',
      title: 'Full Stack Developer',
      time: '5Hrs',
      location: 'California',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      eligendi.`,
      company: 'Huawei Technologies Co., Ltd.',
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/512/6033/6033716.png',
      title: 'Software Engineer',
      time: '14Hrs',
      location: 'Toronto',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      eligendi.`,
      company: 'Meta Platforms, Inc.',
    },
  ];

  return (
    <div className='jobsContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      {openPositions.map(
        ({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className='group group/item singleJob w-[18.625rem] p-[1.5rem] bg-white rounded-[0.625rem] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'
            >
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[1rem] font-semibold text-textColor group-hover:text-white'>
                  {title}
                </h1>

                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive />
                  {time}
                </span>
              </span>

              <h6 className='text-[#ccc]'>{location}</h6>
              <p className='text-[0.8125rem] text-[#959595] pt-[1.25rem] border-t-[2px] mt-[1.25rem] group-hover:text-white'>
                {desc}
              </p>

              <div className='company flex items-center gap-2'>
                <img className='w-[10%]' src={image} alt='company logo' />
                <span className='text-[0.875rem] py-[1rem] block group-hover:text-white'>
                  {company}
                </span>
              </div>

              <button className='border-[2px] rounded-[0.625rem] block p-[0.625rem] w-full text-[0.875rem] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                Apply Now
              </button>
            </div>
          );
        }
      )}

      {/* <h6 className='text-[#ccc]'>Canada</h6>
        <p className='text-[0.8125rem] text-[#959595] pt-[1.25rem] border-t-[2px] mt-[1.25rem] group-hover:text-white'></p>

        <div className='company flex items-center gap-2'>
          <img
            className='w-[10%]'
            src='https://cdn-icons-png.flaticon.com/512/3536/3536785.png'
            alt='Novac Linus Co. - Logo'
          />
          <span className='text-[0.875rem] py-[1rem] block group-hover:text-white'>
            Novac Linus Co.
          </span>
        </div>

        <button className='border-[2px] rounded-[0.625rem] block p-[0.625rem] w-full text-[0.875rem] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
          Apply Now
        </button> */}

      {/* <a
          href='https://www.flaticon.com/free-icons/huawei'
          title='huawei icons'
        >
          Huawei icons created by Freepik - Flaticon
        </a>

        <a href='https://www.flaticon.com/free-icons/line' title='line icons'>
          Line icons created by Fathema Khanom - Flaticon
        </a>

        <a
          href='https://www.flaticon.com/free-icons/microsoft'
          title='microsoft icons'
        >
          Microsoft icons created by Pixel perfect - Flaticon
        </a>

        <a
          href='https://www.flaticon.com/free-icons/facebook'
          title='facebook icons'
        >
          Facebook icons created by Fathema Khanom - Flaticon
        </a> */}
    </div>
  );
};

export default Jobs;
