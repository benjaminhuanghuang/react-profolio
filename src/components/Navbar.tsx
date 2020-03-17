import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home, 
  Apps,
  ContactMail
} from "@material-ui/icons";

import MobilRightMenuSlider from "@material-ui/core/Drawer"

import { makeStyles } from "@material-ui/core/styles";

import avatar from "../img/avatar.png";

const useStyles = makeStyles({
  menuSliderContainer: {
    with: 250,
    background: "#511",
    height: "30rem"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto"
    // width: theme.spacing(13),
    // height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
});

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
];
function Navbar(): JSX.Element {
  const classes = useStyles();

  const [state, setState] = useState({ right: false });

  const toggleSlider = ((slider:any, open:boolean) => () => {
    setState({ ...state, [slider]: open });
  });

  const sideList = (slider: any) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider("right", false)}>
      <Avatar className={classes.avatar} src={avatar} alt="Ben" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <ArrowBack style={{ color: "tomato" }} />
          </IconButton>
          <Typography variant="h5">Protfolio</Typography>
          <MobilRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
            {sideList("right")}
          </MobilRightMenuSlider>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
 