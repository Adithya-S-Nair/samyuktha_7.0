import React, { useState } from 'react'
import { NavBar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useMediaQuery } from '@mui/material';
import MobileNav from '../Components/Mobilenav/MobileNav'
import '../App.css'
import { FiPhoneCall } from "react-icons/fi";
import img1 from '../Components/Event/Code Crypt.jpg'

export default function Details() {
    const isSmallScreen = useMediaQuery('(max-width: 784px)');
    const [drawer, setDrawer] = useState(false);
  
    const openDrawer = () => {
      setDrawer(true);
    };
  return (
    <div>
        <section>
     <>
      {isSmallScreen ?
        <div onClick={openDrawer} style={{cursor:'pointer'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '2.0em' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        :
        <NavBar />}
      {drawer && <MobileNav open={drawer} anchor='left' setDrawer={setDrawer} />}
    </>
     </section>
        <section className="container p-5 d-sm-flex justify-space-around">
            <img src={img1} className='img-thumbnail thum_image m-3'/>
            <div className="container p-2 pt-4">
                <h1 className='text-warning details_head'>Code <span className='text-light'>Crypt</span></h1>
                <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, id ipsum quasi repellendus delectus aperiam recusandae optio alias totam. Molestias inventore, ullam eligendi necessitatibus minima soluta dolorem ad quaerat fugit!,  ullam eligendi necessitatibus minima soluta dolorem ad quaerat fugit!</p>
                <h3 className='m-2'></h3>

                <section>
        <div className='text-light'>
            <span className='text-warning'>Rules</span><br />
  - Participants can register for one event only. <br />
  - Participants are expected to be at the venue at least 10 minutes before the commencement of the event. <br />
  - Participants should bring their own art materials in case of painting. <br />
  - All events are of a duration of 1 hour except for painting, which is 2 hours. <br />
  - Participants can use their choice of medium (e.g., watercolor, oil, acrylic). <br />
  - A pool of topics would be given for Technical writing (essay) to registered candidates, and one topic would be  chosen randomly at the venue. <br />
  - For all other events, topics will be given on the spot. <br />

        </div>
        <br />
        <button className='btn btn-warning mr-3'>REGISTER</button><span> </span>
        <button className='btn btn-outline-warning rounded'><FiPhoneCall/></button>
        </section>
            </div>
            <br />
        </section>
        

        <Footer/>
    </div>
  )
}
