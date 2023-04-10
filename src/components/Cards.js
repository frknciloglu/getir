import React from "react";
import { useState, useEffect } from "react";
import cardsData from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardsData);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-x-4 mt-5 ">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-10 rounded-2xl shadow-md flex items-center flex-col text-center">
            <img src={card.image} className="mb-6" />
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700 ">{card.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
