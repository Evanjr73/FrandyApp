import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import image from "../../../assets/img/foto.png";
import './card.css';

const Card = () => {
  const [cardData, setCardData] = useState({ image: '', text: '' });
  const [like, setLike] = useState("");

  useEffect(() => {
    fetchCardData().then(data => {
      setCardData(data);
    });
  }, []);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
    setLike("none");
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
    setLike("none");
  };

  const onCardReightScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
    setLike("none");
  };

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen('Card')}
      onCardReightScreen={() => onCardReightScreen('Card')}
      preventSwipe={['up', 'down']}
    >
      <div className="card-container" style={{ display: like }}>
        <img src={cardData.image} alt="Swipeable" className="card-image" />
        <div className="card-text">{cardData.text}</div>
      </div>
    </TinderCard>
  );
};

export default Card;

const fetchCardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        image: image, // Caminho da sua imagem
        text: "Texto da promessa"
      });
    }, 100); // Simulando um atraso de 1 segundo
  });
};
