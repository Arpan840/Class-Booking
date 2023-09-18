import React from "react";
import Link from "next/link";

const DefaultScreen = () => {
  return (
    <div className=" mx-auto  " style={{ width: "80vw", marginTop: "20vh" }}>
      <h1 style={{ margin: "30px" }}>Class Schedule</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Aa Name</th>
            <th scope="col">Week Days</th>
            <th scope="col">Time for May 2021</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link href="/classSchedule/Python">
                <p style={{ fontSize: "25px" }}>Python</p>
              </Link>
            </td>
            <td>Every Monday</td>
            <td>4pm</td>
          </tr>

          <tr>
            <td>
              <Link href="/classSchedule/Java">
                <p style={{ fontSize: "25px" }}>Java</p>
              </Link>
            </td>
            <td>Every Wednesday</td>
            <td>5pm</td>
          </tr>
          <tr>
            <td>
              <Link href="/classSchedule/HTML">
                <p style={{ fontSize: "25px" }}>HTML</p>
              </Link>
            </td>
            <td>Every Friday and Saturday</td>
            <td>9am</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DefaultScreen;
