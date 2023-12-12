import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  const currentHour = new Date().getHours();
  let greetingMessage: string;

  if (currentHour < 12) {
    greetingMessage = 'Bonjour';
  } else if (currentHour >= 12 && currentHour < 14) {
    greetingMessage = 'Bon appétit';
  } else if (currentHour >= 14 && currentHour < 15) {
    greetingMessage = 'Bon après-midi';
  } else if (currentHour >= 15 && currentHour < 17) {
    greetingMessage = 'Bon goûter';
  } else {
    greetingMessage = 'Bonne soirée';
  }
  const randomConcludingMessage = ["le connard", "le crétin", "l'imbécile"];
  const randomConclusion = randomConcludingMessage[Math.floor(Math.random() * randomConcludingMessage.length)];

  return (
    <div>
      <h1>{greetingMessage}, {name} {randomConclusion} !</h1>
    </div>
  );
};

export default Greeting;