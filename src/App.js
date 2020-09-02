import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "a537c0c122f11b4c419768c38fef10e52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  //if you leave the array at the end of of useEffect empty, then useEffect will only run once and itll run when the page is first loaded
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("this code works");
        }
      },
    });
  }, []);

  return (
    <div>
      <h1> Alan AI News Application </h1>
    </div>
  );
};

export default App;
