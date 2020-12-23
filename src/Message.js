import React from "react";
import { GiToaster } from "react-icons/gi";
import { GiBurn } from "react-icons/gi";

function Message() {
  const randomNum = Math.floor(Math.random() * 2);
  return (
    <section>
      {randomNum === 0 && <GiToaster color="burlywood" size={"100px"} />}
      {randomNum === 1 && <GiBurn size={"100px"} />}
      {randomNum === 0 ? (
        <h3 className="ready">Here is your toast!</h3>
      ) : (
        <h3 className="burnt">Oops, your toast burnt..</h3>
      )}
    </section>
  );
}

export default Message;
