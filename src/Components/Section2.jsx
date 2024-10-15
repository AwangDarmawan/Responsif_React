import React from 'react'
import Logo from '../Assets/img/svg/logo-52.svg'

function Section2() {
  return (
    <>
      <section className="px-40 md:16px lg:px-16 bg-putih">
        <div className="container mx-auto bg-putih">
        <div className="flex  justify-center gap-5 flex-col md:flex-row  ">
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
        </div>
        </div>
 </section>
    </>
  )
}

export default Section2
