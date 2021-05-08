import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = (hideButt = true) => {
    if (hideButt) {
      var myButton = document.getElementById("buttonHide");
      // var myImage= document.getElementById('myImage');

      myButton.style.display = "none";
      // myImage.style.display ='inline';

      setTimeout(function () {
        myButton.style.display = "inline";
        //myImage.style.display ='none';
      }, 5000);
    }

    const URL = "https://api.adviceslip.com/advice";
    axios
      .get(URL)
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAdvice(false);
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" id="buttonHide" onClick={getAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
