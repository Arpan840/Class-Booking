import React, { useEffect, useState } from "react";

interface ClassData {
  date: string;
  time: string;
  seats: number;
}

const UserCart: React.FC = () => {
  const [cartData, setCartData] = useState<ClassData[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("bookedClass");

    if (storedData) {
      const parsedData = JSON.parse(storedData) as ClassData[];
      setCartData(parsedData);
    }
  }, []);

  const handleCancelClick = (index: number) => {
    
  };

  return (
    <div style={{ width: "80vw", margin: "auto", marginTop: "10vh" }}>
      <h2 style={{color:'blue', fontWeight:"800", fontSize:"55px"}}>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Availability</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.date}</th>
              <td>{item.time}</td>
              <td>{item.seats - 1}</td>
              <td>
                <button
                  className="btn"
                  style={{ background: "orange" }}
                  onClick={() => handleCancelClick(index)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCart;
