import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
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

function Navbar(): JSX.Element {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <ArrowBack />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
