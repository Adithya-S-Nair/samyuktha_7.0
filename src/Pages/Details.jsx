import React, { useEffect, useState } from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useMediaQuery } from "@mui/material";
import MobileNav from "../Components/Mobilenav/MobileNav";
import "../App.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useFirebase } from "../Context/firebaseContext";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CallIcon from "@mui/icons-material/Call";
import { signInWithPopup, GoogleAuthProvider ,getAuth} from "firebase/auth";


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

  const handleRegister = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        localStorage.setItem("user",user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
        <div>
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
              <p className="text-light">{event.eventDesc}</p>
              <br />

              <p className="text-light"></p>
              <h3 className="m-2"></h3>

              <section>
                <button
                  className="btn btn-warning mr-3"
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  REGISTER
                </button>

                {localStorage.getItem("user") && <p>Logged in</p>}
                <span> </span>
              </section>
            </div>
            <br />
          </section>
          <div className="d-sm-flex justify-space-around">
            <div className="rule_card rounded-9 m-3 p-3">
              <center>
                <h4 className="text-warning">Rules</h4>
              </center>
              <ul>
                {event.ruleList &&
                  event.ruleList.map((rule, index) => (
                    <li className="" key={index}>
                      - {rule}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rounded-7 m-3 p-3 contact_card ">
              <center>
                <CallIcon fontSize="1px" className="icon_detail" />
              </center>
              <div className="d-flex justify-content-around align-items-center p-3">
                <div>
                  <span className="text-light prize_text m-1">
                    {event.studentIncharge1} :{" "}
                  </span>
                </div>
                <span className="text-light prize_text">
                  {event.studentIncharge1Mobile}
                </span>{" "}
                <br />
              </div>
              <div className="d-flex justify-content-around align-items-center p-3">
                <div>
                  <span className="text-light prize_text">
                    {event.studentIncharge1} :{" "}
                  </span>
                </div>
                <span className="text-light prize_text">
                  {event.studentIncharge1Mobile}
                </span>{" "}
                <br />
              </div>
              {/* <span  className="text-light m-5">{event.studentIncharge2} : </span><span>{event.studentIncharge2Mobile}</span> */}
            </div>
            <div className="rounded-7 m-3 p-3 contact_card">
              <center>
                <EmojiEventsIcon fontSize="3px" className="icon_detail" />
              </center>
              <div className="d-flex justify-content-around align-items-center p-2">
                <div>
                  <span className="text-light prize_text m-1">1st :</span>
                </div>
                <span className="text-light prize_text">3000/-</span> <br />
              </div>
              <div className="d-flex justify-content-around p-2">
                <div>
                  <span className="text-light prize_text m-1">2st :</span>
                </div>
                <span className="text-light prize_text">1000/-</span> <br />
              </div>
              {/* <span  className="text-light m-5">{event.studentIncharge2} : </span><span>{event.studentIncharge2Mobile}</span> */}
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
