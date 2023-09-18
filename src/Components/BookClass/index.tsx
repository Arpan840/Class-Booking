import React, { useState } from "react";
import CountdownTimer from "../Countdown";
import FreeSeatsLeft from "../FreeSeatsLeft";
import BooKClassTable from "../BookClassTable";
import Cart from "../Cart";
import Link from "next/link";

const BookClass = () => {
  const [item, setItems] = useState(0);
  
  return (
    <div className="mx-auto" style={{ width: "80vw" }}>
      <CountdownTimer></CountdownTimer>
      <div className="d-flex justify-content-between align-items-start">
        <h1 style={{color:'red'}}>Claim Your Free Trial Class</h1>
        <Link href="/userCart">
          <Cart item={item}></Cart>
        </Link>
      </div>

      <div
        className="d-flex justify-content-between align-items-start"
        style={{ width: "80vw" }}
      >
        <h2 style={{color:'blue'}}>Class Schedule</h2>
        <FreeSeatsLeft></FreeSeatsLeft>
      </div>
      <BooKClassTable items={item} setItems={setItems}></BooKClassTable>
    </div>
  );
};

export default BookClass;
