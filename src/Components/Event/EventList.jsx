import React, { useEffect, useState } from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import { useFirebase } from "../../Context/firebaseContext";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CardList = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (eventName, eventId) => {
    navigate(`/details/${eventName}/${eventId}`);
  };

  const { db } = useFirebase();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollectionRef = collection(db, "events");
        const querySnapshot = await getDocs(eventsCollectionRef);
        const eventsData = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Include the document ID in the data
          eventsData.push({
            id: doc.id,
            ...data,
          });
        });
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
    console.log(events);
  }, [db]);
  return (
    <div className="container">
      <center>
        <h1 className="event_head text-warning p-3">Events</h1>
      </center>
      <div className="container_flex">
        {events.map((event, index) => (
          <div key={index} className="card m-3">
            <div className="card-image">
              <img src={event.cover} alt={event.eventName} />
            </div>

            <div className="card-details">
              <h5 className="card-title text-warning">{event.eventName}</h5>
              <button
                className="btn btn-warning"
                onClick={() => {
                  handleRegisterClick(event.eventName, event.id);
                }}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
