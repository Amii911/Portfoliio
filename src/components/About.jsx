import React from 'react';
import headshot from '../assets/Aminat Adebayo Headshot.JPG';
import resume from '../assets/Aminat_Adebayo Resume.pdf'


const About = () => {
  return (
    <div name='about' className='w-full h-screen text-[#1f2435]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <div className='aspect-w-1 aspect-h-1 w-full h-auto max-w-[100px] sm:max-w-[200px]'>
              <img
                src={headshot}
                alt='Headshot'
                className='w-full h-full object-cover' 
              />
            </div>
          </div>
          <div>
            <p>
              I'm a Software Engineer based in Brooklyn, NY, who boldly shifted
              from a Paralegal role to pursue the challenges of the tech world
              in September 2022. A recent coding bootcamp graduate, I've honed
              my skills in JavaScript, HTML, CSS, React, Python, SQLite, SQL
              Alchemy, and Flask.
              <br />
              Passionate about continual learning in the dynamic field of
              software engineering, I pride myself on being a lifelong learner
              and a skilled problem-solver. Beyond work, I enjoy spending time
              with friends and family, exploring new foods, play tennis, yoga,
              attend meetups, and help host Tech Gather NYC!
            </p>
            <a
              href={resume}
              className='border-4 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]'
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;