import React, { useEffect, useState } from "react";
import bookClass from "../../jsonFiles/bookClass.json";

interface BooxClassTableProps {
  setItems: React.Dispatch<React.SetStateAction<number>>;
  items: number;
}

const BooxClassTable: React.FC<BooxClassTableProps> = ({ setItems, items }) => {
  const [availability, setAvailability] = useState<number[]>(
    bookClass.map((i) => i.seats)
  );
  const [buttonData, setButtonData] = useState<string[]>(
    bookClass.map((i) => i.button)
  );

  const [disabledButtons, setDisabledButtons] = useState<boolean[]>(
    bookClass.map(() => false)
  );
  const countItemsInLocalStorage = () => {
    const storedData = localStorage.getItem("bookedClass");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.length > 3) {
        alert("You can only book maximum 3 classes per week");
      }
      setItems(parsedData.length);
    }
  };

  const handleBookNowClick = (index: number): void => {
    if (availability[index] > 0 && !disabledButtons[index]) {
      const updatedAvailability = [...availability];
      updatedAvailability[index] -= 1;
      setAvailability(updatedAvailability);

      const selectedClass = bookClass[index];
      const bookedClasses = JSON.parse(
        localStorage.getItem("bookedClass") || "[]"
      );
      bookedClasses.push(selectedClass);
      localStorage.setItem("bookedClass", JSON.stringify(bookedClasses));

      setDisabledButtons((prevState) =>
        prevState.map((val, i) => (i === index ? true : val))
      );

      setButtonData(buttonData);
      countItemsInLocalStorage();
    }
  };
  useEffect(() => {
    countItemsInLocalStorage();
  }, []);

  return (
    <div>
      <table className="table">
        <thead style={{ backgroundColor: "blue" }}>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Availability</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {bookClass.map((i, index) => (
            <tr key={index}>
              <th scope="row">{i.date}</th>
              <td>{i.time}</td>
              <td>{availability[index]} seats available</td>
              <td>
                <button
                  className="btn"
                  disabled={disabledButtons[index]}
                  style={{
                    background: availability[index] === 0 ? "red" : "orange",
                  }}
                  onClick={() => handleBookNowClick(index)}
                >
                  {availability[index] === 0 ? "Full" : i.button}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooxClassTable;
