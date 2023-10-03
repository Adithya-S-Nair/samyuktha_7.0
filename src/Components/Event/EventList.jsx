import React from 'react';
import Card from './EventCard';
import './Event.css'
import img1 from './Code Crypt.jpg'

const CardList = () => {
  // Sample data for demonstration
  const cardData = [
    {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: img1
      },
      {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: 'https://marketplace.canva.com/EAFrVizLQjc/1/0/1131w/canva-black-grunge-illustrated-halloween-party-poster-5J1jKO7UW0o.jpg',
      },
      {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/822/430/original/flat-design-halloween-party-poster-template-free-vector.jpg',
      },
      {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: 'https://img.freepik.com/free-vector/realistic-halloween-party-poster-template_52683-44849.jpg',
      },
      {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: 'https://marketplace.canva.com/EAFG0uPwdsI/1/0/1131w/canva-orange-ilustrated-halloween-party-poster-Ds8XT83rKm0.jpg',
      },
      {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageUrl: 'https://img.freepik.com/free-vector/realistic-halloween-party-poster_52683-44848.jpg',
      },
    // Add more card data...
  ];

  return (
    <div className="container">
    <center><h1 className='event_head text-warning p-3'>Events</h1></center>
      <div className="container_flex">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      </div>
    </div>
  );
};

export default CardList;
