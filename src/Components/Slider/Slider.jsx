import React, { useState } from 'react';
import './Slider.css'

const Slider = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      backgroundImage: 'url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)',
      title: 'Dota 2',
      description:
        'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
    },
    {
        backgroundImage: 'url(https://ucarecdn.com/2a5f69bc-befa-49f4-acc6-ab1dcae514c7/winter3.jpg)',
        title: 'Dota 2',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://ucarecdn.com/ec1918b1-2674-452c-bf61-8f73d8cc40c6/rdr2.jpg)',
        title: 'Dota 2',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)',
        title: 'Dota 2',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
      {
        backgroundImage: 'url(https://ucarecdn.com/75d7700d-c102-40ff-9ba1-f0641444c616/dota2.jpg)',
        title: 'Dota 2',
        description:
          'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      },
    
  ];

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <section className="game-section">
        <center><h2 className='text-light about_head h2'>About <span className='text-warning'>Us</span></h2></center>
      <div className="owl-carousel d-sm-flex justify-space-between custom-carousel owl-theme ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === activeItem ? 'active' : ''}`}
            style={{ backgroundImage: item.backgroundImage }}
            onClick={() => handleItemClick(index)}
          >
            <div className="item-desc">
              <h3>{item.title}</h3> 
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
