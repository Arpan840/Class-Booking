import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  const getRandomTime = (): number => {
    return Math.floor(Math.random() * (60 - 30 + 1) + 30);
  };

  useEffect(() => {
    const initialTime = getRandomTime();
    setSecondsRemaining(initialTime);

    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSecondsRemaining) => {
        if (prevSecondsRemaining > 0) {
          return prevSecondsRemaining - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {secondsRemaining > 0 ? (
        <b>
          <p style={{fontSize:'20px'}}>Time Left: {secondsRemaining} seconds</p>
        </b>
      ) : (
        <p>Countdown finished!</p>
      )}
    </div>
  );
}

export default CountdownTimer;
