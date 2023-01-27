import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[0.625rem] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className='logoContainer'>
          <h1 className='logo text-[1.5rem] text-white pb-[1.5rem]'>
            <strong>Tech</strong>Ventures
          </h1>
        </div>
        <p className='text-white pb-[0.875rem] opacity-70 leading-7'>
          We always make our seekers and companies find the best and employers
          find the best candidates.
        </p>
      </div>

      <div className='grid'>
        <span className='titleContainer text-[1.125rem] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>

        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            About Us
          </li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Features
          </li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>FAQs</li>
        </div>
      </div>

      <div className='grid'>
        <span className='titleContainer text-[1.125rem] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>

        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Account
          </li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Support Center
          </li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Feedback
          </li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Contact Us
          </li>
        </div>
      </div>

      <div className='grid'>
        <span className='titleContainer text-[1.125rem] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>

        <div className='grid gap-3'>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Request Demo
          </li>
          <li className='text-white opacity-[0.7] hover:opacity-[1]'>
            Careers
          </li>
        </div>
      </div>

      <div className='grid'>
        <span className='titleContainer text-[1.125rem] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>

        <div>
          <small className='text-[0.875rem] text-white'>
            info@techventures.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='text-[2rem] first-letter:rounded-full icon text-white' />
            <AiFillFacebook className='text-[2rem] first-letter:rounded-full icon text-white' />
            <AiOutlineTwitter className='text-[2rem] first-letter:rounded-full icon text-white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
