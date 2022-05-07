import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: "Enrique Iglesias",
      url: "https://www.dontdiewondering.com/wp-content/uploads/2021/09/Enrique-iglesia-1024x768.jpeg",
    },
    {
      name: "Martin Garrix",
      url: "https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2016/08/MG-Press-Photo-Summer-Days-smaller-e1557874197539.jpg",
    },
    {
      name: "Shawn Mendes",
      url: "https://media1.popsugar-assets.com/files/thumbor/AK19MHoD8cv7k9tglCxOrwbbf_Y/733x204:2802x2273/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/019/n/1922398/7c2241aa5d7048792c0e23.11693945_/i/Shawn-Mendes.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    //   setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
