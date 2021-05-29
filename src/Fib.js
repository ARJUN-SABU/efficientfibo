import React, { useRef, useState, useEffect } from "react";
import "./Fib.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { fibonacci, translateToString } from "./FibCalculator";

function Fib() {
  const nValue = useRef();
  const [fibValue, setFibValue] = useState("Please Wait...");

  useEffect(() => {
    document.querySelector(".fib").classList.remove("hide");
    document.querySelector(".card_content").style.opacity = "1";
    document.querySelector(".card_front").style.opacity = "1";
    document.querySelector(".card_back").style.opacity = "1";
  }, []);

  function findFib() {
    document.querySelector(".card_content").style.transform = "rotateY(180deg)";

    var x = fibonacci(Number(nValue.current.value));
    setFibValue(translateToString(x));
  }

  function enterNValue() {
    document.querySelector(".card_content").style.transform = "rotateY(0deg)";
  }

  return (
    <div className="fib hide">
      <div class="card_content">
        <div class="card_front">
          <h1>Nth Fibonacci Term</h1>
          <h3>F(n) = F(n-1) + F(n-2)</h3>
          <input ref={nValue} type="text" placeholder="n"></input>
          <button onClick={findFib}>
            Find <ChevronRightIcon />
          </button>
        </div>

        <div class="card_back">
          <h1>
            <span>{nValue.current?.value ? nValue.current?.value : 0}th</span>{" "}
            Fibonacci Term is:{" "}
          </h1>
          <p>{fibValue}</p>
          <button onClick={enterNValue}>
            <ArrowBackIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fib;
