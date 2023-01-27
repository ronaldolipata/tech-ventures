const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-center text-textColor text-[2rem] py-[2rem] pb-[3rem] font-bold'>
        The value that holds us true and to account
      </h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[0.625rem] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imageContainer p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[2.5rem] w-[2.5rem] flex items-center justify-center'>
              <img
                className='w-[70%]'
                src='https://cdn-icons-png.flaticon.com/512/732/732243.png'
                alt='simple icon'
              />
            </div>

            <span className='font-semibold text-textColor text-[1rem]'>
              Simplicity
            </span>
          </div>

          <p className='text-[1rem] text-textColor opacity-[0.7] py-[1rem]'>
            Things being made beatuiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className='singleGrid rounded-[0.625rem] hover:bg-[#f7edf5] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imageContainer p-[4px] rounded-[0.8rem] bg-inherit-[#f7d1e1] h-[2.5rem] w-[2.5rem] flex items-center justify-center'>
              <img
                className='w-[70%]'
                src='https://cdn-icons-png.flaticon.com/512/1007/1007226.png'
                alt='better icon'
              />
            </div>

            <span className='font-semibold text-textColor text-[1rem]'>
              Simplicity
            </span>
          </div>

          <p className='text-[1rem] text-textColor opacity-[0.7] py-[1rem]'>
            We believe in making things better for everyone, even if just by a
            little bit!
          </p>
        </div>

        <div className='singleGrid rounded-[0.625rem] hover:bg-[#fcfae3] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imageContainer p-[4px] rounded-[0.8rem] bg-inherit-[#f3f2ad] h-[2.5rem] w-[2.5rem] flex items-center justify-center'>
              <img
                className='w-[70%]'
                src='https://cdn-icons-png.flaticon.com/512/306/306047.png'
                alt='shield icon'
              />
            </div>

            <span className='font-semibold text-textColor text-[1rem]'>
              Simplicity
            </span>
          </div>

          <p className='text-[1rem] text-textColor opacity-[0.7] py-[1rem]'>
            We work on the basis of creating trust which can be nurtured through
            authenticity and transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
