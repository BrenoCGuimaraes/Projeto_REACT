import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, interval }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval]);

  useEffect(() => {
    setDisplayText(text.substring(0, currentIndex + 1));
  }, [text, currentIndex]);

  return <>{displayText}</>;
};

const Letreiro = () => {
  const phrase = "Conheça a Fatec";
  const interval = 100; // intervalo em milissegundos entre cada letra

  return (
    <div>
      <h1>Letreiro</h1>
      <TypingEffect text={phrase} interval={interval} />
    </div>
  );
};

export default Letreiro;