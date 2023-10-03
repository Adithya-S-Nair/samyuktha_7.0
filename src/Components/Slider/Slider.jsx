import React, { useState } from 'react';
import './Slider.css'
import { Link, useNavigate } from 'react-router-dom';

const Slider = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate()

  const handleView = async() =>{
    navigate('/details')
  }

  const items = [
    {
      backgroundImage: 'url(https://marketplace.canva.com/EAFG0uPwdsI/1/0/1131w/canva-orange-ilustrated-halloween-party-poster-Ds8XT83rKm0.jpg)',
      title: 'Tresure Hunt',
      description:
        'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    },
    {
        backgroundImage: 'url(https://marketplace.canva.com/EAFrVizLQjc/1/0/1131w/canva-black-grunge-illustrated-halloween-party-poster-5J1jKO7UW0o.jpg)',
        title: 'Coding',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://img.freepik.com/free-vector/realistic-halloween-party-poster-template_52683-44849.jpg)',
        title: 'Football',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/822/430/original/flat-design-halloween-party-poster-template-free-vector.jpg)',
        title: 'Hackathon',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
    
  ];

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <section className="game-section">
        <center><h2 className='text-light about_head h2'>Featured <span className='text-warning'>Events</span></h2></center>
      <div className="owl-carousel d-sm-flex justify-space-between custom-carousel owl-theme ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === activeItem ? 'active' : ''}`}
            style={{ backgroundImage: item.backgroundImage }}
            onClick={() => handleItemClick(index)}
          >
            <div className="item-desc">
              <h4>{item.title}</h4> 
              <p>{item.description}</p>
              <button onClick={handleView} className='btn btn-sm btn-outline-warning'>View</button>
            </div>
          </div>
        ))}
      </div>
      <center><Link to='/events' className="btn btn-warning">Explore more</Link></center>
    </section>
  );
};

export default Slider;
