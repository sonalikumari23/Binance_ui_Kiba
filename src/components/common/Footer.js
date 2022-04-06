import React from "react";
import { useStyles } from "./style";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { IconButton } from "@material-ui/core";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const FooterDiv = () => {
  return (
    <Box>
      <h6 style={{ color: "#324d88", textAlign: "center", marginTop: "-50px" }}>
        KIBA crypto is known for safe and secure crypto purchase.
      </h6>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
          </Column>
          <Column>
            <Heading>Services</Heading>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div
        elevation={10}
        className={classes.footer}
        style={{
          marginTop: "10px",
          marginBottom: "0px",
        }}
      >
        <FooterDiv></FooterDiv>
        <div
          style={{
            textAlign: "center",
            marginTop: "3px",
          }}
        >
          <IconButton>
            <FacebookIcon className={"facebook"} />
          </IconButton>

          <IconButton>
            <InstagramIcon className={"instagram"} />
          </IconButton>

          <IconButton>
            <WhatsAppIcon className={"whatsapp"} />
          </IconButton>

          <IconButton>
            <TwitterIcon className={"twitter"} />
          </IconButton>

          <IconButton>
            <YouTubeIcon className={"youtube"} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
