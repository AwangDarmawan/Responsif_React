import React from 'react'
import Your from "../Assets/img/svg/your.svg"

function Section3() {
  return (
    <>
 <section className=" py-16 px-16  bg-putih">
   <div className="container mx-auto">
    
      <h1 className="text-center font-ClashDispaly font-semibold text-[40px] pb-10">Your Best Choice</h1>
     <div className="grid grid-cols-12 ">

      <div className="col-span-12 lg:col-span-3 md:col-span-3 bg-white sm:col-span-12 mx-auto rounded-2xl mb-10 mr-10">
          <div className="h-60 mx-6 py-7 my-5 ">
          <img src={Your} alt="" className=" h-9"/>
          <h1 className="font-poppins font-bold mt-4 pb-3">Extra Layers</h1>
          <p className="whitespace-pre-line font-poppins font-medium text-grau">Making your project more 
            secure avoiding DDoS</p>
            <h1 className="font-poppins font-semibold text-ungutua pt-9">Learn More</h1>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3 md:col-span-3 bg-white sm:col-span-12 mx-auto rounded-2xl mb-10 mr-10">
        <div className="h-60 mx-6 py-7  my-5">
        <img src={Your} alt="" className=" h-9"/>
        <h1 className="font-poppins font-bold mt-4 pb-3">Extra Layers</h1>
        <p className="whitespace-pre-line font-poppins font-medium text-grau">Making your project more 
          secure avoiding DDoS</p>
          <h1 className="font-poppins font-semibold text-ungutua pt-9">Learn More</h1>
      </div>
    </div>

        <div className="col-span-12 lg:col-span-3 md:col-span-3 bg-hitamtua sm:col-span-12 mx-auto rounded-2xl mb-10 mr-10">
          <div className="h-60 mx-6 py-7  my-5">
          <img src={Your} alt="" className=" h-9"/>
          <h1 className="font-poppins font-bold mt-4 pb-3 text-white">Extra Layers</h1>
          <p className="whitespace-pre-line font-poppins font-medium text-grau">Making your project more 
            secure avoiding DDoS</p>
            <h1 className="font-poppins font-semibold text-white pt-9">Learn More</h1>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3 md:col-span-3 bg-white sm:col-span-12 mx-auto rounded-2xl mb-10 mr-10">
        <div className="h-60 mx-6 py-7  my-5">
        <img src={Your} alt="" className=" h-9"/>
        <h1 className="font-poppins font-bold mt-4 pb-3">Extra Layers</h1>
        <p className="whitespace-pre-line font-poppins font-medium text-grau">Making your project more 
          secure avoiding DDoS</p>
          <h1 className="font-poppins font-semibold text-ungutua pt-9">Learn More</h1>
      </div>
    </div>
     </div>
   </div>
 </section>
    </>
  )
}

export default Section3
