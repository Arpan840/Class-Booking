import React, { useEffect, useState } from "react";

const FreeSeatsLeft: React.FC = () => {
  const [freeSeatsLeft, setFreeSeatsLeft] = useState<number>(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    setFreeSeatsLeft(randomNumber);
  }, []);

  return (
    <div>
      <h4>Free Seats Left: <span style={{color:'red'}}>{freeSeatsLeft}</span></h4>
    </div>
  );
};

export default FreeSeatsLeft;
