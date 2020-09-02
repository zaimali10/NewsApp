import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "a537c0c122f11b4c419768c38fef10e52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  //if you leave the array at the end of of useEffect empty, then useEffect will only run once and itll run when the page is first loaded
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1> Alan AI News Application </h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
