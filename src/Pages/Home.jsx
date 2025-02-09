

import HomeSection from "../Components/HomeSection.jsx";
import About from "../Components/About.jsx";


function Home() {

  return (
    <>
     <div className='font-Montserrat flex items-center justify-center flex-col mt-8 sm:p-4'>
        <HomeSection/>
        <About/>
                    </div>
      
    </>
  )
}

export default Home