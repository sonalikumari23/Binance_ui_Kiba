import React from "react";
import { Link } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import "../../../App.css";
import Lottie from "react-lottie";
import animationData from "../../../lotties/bitcoin";
import cryptoData from "../../../lotties/crypto";
import { useEffect } from "react";
//import TradeModel from "../../../model/TradeModel";
import { Button, Grid, Typography } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import TableRowData from "./TableRow";
import "./LandingPage.css";
import axios from "axios";
import {
  TableCell,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none",
  },
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
      marginLeft: theme.spacing(3),
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
    // vertical padding + font size from searchIcon
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LandingPage() {
  const classes = useStyles();
  const initialList = [];
  const [tableDatas, setList] = React.useState(initialList);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const cryptoOptions = {
    loop: true,
    autoplay: true,
    animationData: cryptoData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const fetchHistory = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=10&page=1&sparkline=false`
    );

    console.log(data);
    setList(data);
  };
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div
      className={classes.grow}
      style={{
        marginTop: "60px",
        marginBottom: "200px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0} style={{ backgroundColor: "#324D88" }}>
        <Grid
          classes={{
            root: classes.paper,
          }}
          item
          xs={6}
          style={{
            backgroundColor: "#324D88",
            padding: "10px",
            alignSelf: "center",
            boxShadow: "none",
          }}
        >
          <Item style={{ backgroundColor: "#324D88", padding: "10px" }}>
            <Typography
              style={{
                padding: "20px",
                fontWeight: "bold",
                color: "#01B0BD",
                fontSize: "32px",
                textAlign: "center",
              }}
            >
              Buy, trade, and hold 600+ cryptocurrencies on KIBA Crypto
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Download Now
            </Typography>
            <AppleIcon
              className={"download"}
              style={{
                fontSize: "48px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            ></AppleIcon>
            <AndroidIcon
              className={"download"}
              style={{
                fontSize: "48px",
                marginLeft: "40px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            ></AndroidIcon>
          </Item>
        </Grid>
        <Grid
          item
          xs={6}
          elevation={0}
          className={"paper"}
          style={{ backgroundColor: "#324D88", padding: "10px" }}
        >
          <Item style={{ backgroundColor: "#324D88", padding: "10px" }}>
            <Lottie options={defaultOptions} height={300} width={300} />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ backgroundColor: "#01B0BD" }}>
            <Link to="/signin">
              <Button
                style={{
                  margin: "20px",
                  background: "#324d88",
                  color: "white",
                  borderRadius: 25,
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                Register Now
              </Button>
            </Link>
            <Link to="/dialog">
              <Button
                style={{
                  margin: "20px",
                  background: "#324d88",
                  color: "white",
                  borderRadius: 25,
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                Help
              </Button>
            </Link>
            <Link to="/signin">
              <Button
                style={{
                  margin: "20px",
                  background: "#324d88",
                  color: "white",
                  borderRadius: 25,
                  paddingLeft: "25px",
                  paddingRight: "25px",
                }}
              >
                Start your free Trial
              </Button>
            </Link>
          </Item>
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "white" }}>
        <Grid item xs={2}>
          <Item>
            <Lottie options={cryptoOptions} height={120} width={120} />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Typography
              style={{
                display: "inline",
                height: "70px",
                paddingTop: "20px",
                fontWeight: "bold",
                color: "#01B0BD",
                fontSize: "32px",
                textAlign: "center",
              }}
            >
              Buy, trade, and hold 600+ cryptocurrencies on KIBA Crypto
            </Typography>
            <Typography
              style={{
                marginLeft: "10px",
                display: "inline",
                cursor: "pointer",
                height: "50px",
                fontWeight: "bold",
                color: "#01B0BD",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              Read More
            </Typography>
            <Button
              style={{
                background: "#F5921D",
                color: "white",
                borderRadius: 25,
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              View Market Pair
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "white", margin: "20px" }}>
        <Grid item xs={12}>
          <Item>
            <Typography
              style={{
                alignItems: "center",
                marginLeft: "10px",
                display: "inline",
                cursor: "pointer",
                height: "50px",
                fontWeight: "bold",
                color: "#324d88",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Market Trends
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item style={{ marginLeft: "180px", marginRight: "180px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "650" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        color: "gray",
                        borderBottom: "none",
                        display: "flex",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: "gray",
                        borderBottom: "none",
                      }}
                    >
                      Last Price
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      24h Change
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "gray", borderBottom: "none" }}
                    >
                      Markets
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableDatas.map((viewTable) => {
                    return (
                      <TableRowData
                        key={viewTable.alt}
                        data={viewTable}
                      ></TableRowData>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
