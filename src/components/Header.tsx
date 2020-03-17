import React from "react";
//
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
import Typed from "react-typed";
//
import avatar from "../img/avatar.png";

const useStyles = makeStyles(theme => ({
  avatar: {
    display: "block",
    margin: "0.5rem auto"
    // width: theme.spacing(13),
    // height: theme.spacing(13)
  },
  title: {
    color: "tomato"
  },
  typeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.typeContainer}>
      <Grid container justify="center">
        <Avatar src={avatar} alt="Ben" className={classes.avatar}></Avatar>
      </Grid>

      <Typography variant="h4" className={classes.title}>
        <Typed
          strings={["React", "TypeScript"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
}
