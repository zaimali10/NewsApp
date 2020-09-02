import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles.js";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        classNames={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          //The xs, s, md, and lg refer to the screen size, smaller screens you only want one card,
          //the default is 12 so on xs you set it to 12 for each card to take up the max space, leaving only one card visible
          <Grid item xs={12} s={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
