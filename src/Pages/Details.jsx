import React, { useEffect, useState } from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useMediaQuery } from "@mui/material";
import MobileNav from "../Components/Mobilenav/MobileNav";
import "../App.css";
import { FiPhoneCall } from "react-icons/fi";
import { useParams } from "react-router-dom";
import img1 from "../Components/Event/Code Crypt.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useFirebase } from "../Context/firebaseContext";

export default function Details() {
  const { name } = useParams();
  const isSmallScreen = useMediaQuery("(max-width: 784px)");
  const [drawer, setDrawer] = useState(false);
  console.log(name);

  const { db } = useFirebase();
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollectionRef = collection(db, "events");
        const q = query(eventsCollectionRef, where("eventName", "==", name)); // Filter by eventName
        const eventsData = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          eventsData.push(data);
        });
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, [db]);


  const openDrawer = () => {
    setDrawer(true);
  };
  return (
    <div>
      <section>
        <>
          {isSmallScreen ? (
            <div onClick={openDrawer} style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "2.0em" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          ) : (
            <NavBar />
          )}
          {drawer && (
            <MobileNav open={drawer} anchor="left" setDrawer={setDrawer} />
          )}
        </>
      </section>
      {events.map((event, index) => (
        <section
          key={index}
          className="container p-5 d-sm-flex justify-space-around"
        >
          <img src={event.cover} className="img-thumbnail thum_image m-3" />
          <div className="container p-2 pt-4">
            <h1 className="text-warning details_head">{event.eventName}</h1>
            <button className="btn btn-outline-warning btn-sm btn-rounded text-warning m-2">
              {event.eventCategory}
            </button>
            <button className="btn btn-outline-warning btn-sm btn-rounded text-warning m-2">
              {event.eventType}
            </button>
            <br />
            <br />
            
            <div className="rule_card pt-3 pb-3 rounded-9">
            <center><h4 className="text-warning">Rules</h4></center>
<ul>
{event.ruleList &&
    event.ruleList.map((rule, index) => (
      <li className="" key={index}>- {rule}</li>
    ))}
    </ul>

</div>





            <p className="text-light"></p>
            <h3 className="m-2"></h3>

            <section>
              <div className="text-light">
                <span className="text-warning">Rules</span>
                <br />
                
              </div>
              <br />
              <button className="btn btn-warning mr-3">REGISTER</button>
              <span> </span>
          
            </section>
          </div>
          <br />
        </section>
      ))}

      <Footer />
    </div>
  );
}
