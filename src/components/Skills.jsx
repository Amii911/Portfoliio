import React from 'react'
const PY_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
const HTML5_LOGO = "https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
const CSS_LOGO = "data:image/jpeg;base64,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"
const JS_LOGO = "https://logosdownload.com/logo/javascript-logo-big.png"
const REACT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
const REDUX_LOGO = "https://cdn.worldvectorlogo.com/logos/redux.svg"
const SQL_LOGO = "https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
const SQLALCHEMY_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/640px-SQLAlchemy.svg.png"
const FLASK_LOGO = "https://www.seekpng.com/png/detail/875-8753366_flask-framework-logo-svg.png"
const JAVA_LOGO = "https://static.vecteezy.com/system/resources/previews/022/101/050/original/java-logo-transparent-free-png.png"
const TAILWIND_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuj6cYQp7nRdHeEBfpkulmsCp1xgtVgOU9AA&usqp=CAU"

const Skills = () => {
    return (
        <div name='skills' className='w-full bg-[#f1ecea] text-[#1f2435] mt-8 md:mt-16'>
        <div className='max-w-[1000px] mx-auto p-4'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 '>Skills</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8'>
            {/* Repeat the following block for each skill */}
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={PY_LOGO} alt="Python icon" />
              <p className='my-4'>Python</p>
            </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVA_LOGO} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS_LOGO} alt="JS icon" />
                    <p className='my-4'>JavaScript</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML5_LOGO} alt="HTML icon" />
                    <p className='my-4'>HTML 5</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS_LOGO} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT_LOGO} alt="React icon" />
                    <p className='my-4'>React</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TAILWIND_LOGO} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REDUX_LOGO} alt="Redux icon" />
                    <p className='my-4'>Redux</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FLASK_LOGO} alt="Flask icon" />
                    <p className='my-4'>Flask</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQLALCHEMY_LOGO} alt="SQLAchemy icon" />
                    <p className='my-4'>SQLAlchemy</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQL_LOGO} alt="SQLite icon" />
                    <p className='my-4'>SQL</p>
                </div> 
            </div>
            {/* add sqlite, mysql, postgressql... fix styling */}
        </div>
      </div>
    );
  };
  
  export default Skills;