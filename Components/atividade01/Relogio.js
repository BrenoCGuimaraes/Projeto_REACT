import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR');
  };

  const formatSeconds = (date) => {
    return date.getSeconds().toString().padStart(2, '0');
  };

  return (
    <>
      <h3>{currentDateTime.getHours()}:{currentDateTime.getMinutes()}:{formatSeconds(currentDateTime)},{formatDate(currentDateTime)}</h3>
    </>
  );
};

const Relogio = () => {
  return (
    <>
      <h1>Relógio</h1>
      <DateTime />
    </>
  );
};

export default Relogio;