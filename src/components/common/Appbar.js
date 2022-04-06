import React from "react";
import { Link } from "react-router-dom";

import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NavigationTabs from "./NavigationTabs";

import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#324d88",
    fontWeight: "bold",
    cursor: "pointer",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(54),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Appbar() {
  const classes = useStyles();

  <MenuItem>
    <Link to="/login">
      <Button
        style={{
          background: "#324d88",
          color: "white",
        }}
      >
        EMPLOYER
      </Button>
    </Link>
  </MenuItem>;

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{
          background: "#fff",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          &nbsp;&nbsp;&nbsp;
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography className={classes.title} variant="h6" noWrap>
              KIBA LABS
            </Typography>
          </Link>
          <div className={classes.grow} />
          <NavigationTabs></NavigationTabs>
          <Link to="/login">
            <Button
              style={{
                background: "#324d88",
                color: "white",
                borderRadius: 25,
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              LOGIN
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
