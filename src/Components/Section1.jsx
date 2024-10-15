import React from 'react';
import global from "../Assets/img/svg/global.svg";
import message from "../Assets/img/svg/device-message.svg";
import grup from "../Assets/img/png/grup1.png"

function Section1() {
  return (
    <>
<section className=" py-20 px-16 bg-putih">
    <div className="container bg-putih mx-auto py-20 ">
        <div className="grid grid-cols-12 mx-auto">
           <div className="col-span-12 lg:col-span-7 lg:order-1 sm:order-2 "> 
             <div className="pt-20">
              <button className="bg-white border flex py-1 px-2 rounded-full gap-3   ">
                <img src={global} alt="" />
               <p className="font-poppins font-semibold text-ungu"> We host more than 120,000 websites</p>
              </button>
              <h1 className="font-ClashDispaly font-bold text-[70px] md:whitespace-normal sm:whitespace-normal lg:whitespace-pre-line  ">Grow Online
              Business Faster.</h1>
              

              <p className="whitespace-pre-line text-grau font-medium font-poppins ">We provide a variety of servers to grow your users
              acquisition much user-friendly and boosting up sales.</p>
                 
             </div>
             <div className="flex gap-2 py-5 flex-col md:flex-row object-contain">
              <button className="bg-ungutua rounded-full  font-poppins font-semibold text-white 
              py-2 px-3">Try Free Trial</button>
              <button className="bg-white rounded-full py-2
               px-3 font-poppins font-semibold  text-ungutua gap-1 flex justify-center object-contain">
               <img src={message} alt=""/>
               <span className="">Schedule a Demo</span>
               
               
              </button>
             </div>
           </div>
          
           <div className="col-span-12 lg:col-span-5  bg-purple-700 sm:order-1 lg:order-2">
             <img src={grup} alt="" className="w-full"/>
           </div>
        </div>
    </div>
 </section>
    </>
  )
}

export default Section1
