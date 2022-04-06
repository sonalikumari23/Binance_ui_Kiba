import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    //height: "60%",
    // backgroundSize: "cover",
  },
  myStyle: {
    // backgroundImage: "url(employer2.png)",
    backgroundColor: "wheat",
    height: "auto",
    //marginTop: "-70px",
    //fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //zIndex: "-1",
  },
  // gradient: {
  //   backgroundColor: linear - gradient("135deg", "#9796f0 10%", "#FBC7D4 100%"),
  // },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "40px",
    background: "#fff",
  },

  // split: {
  //   height: "100%",
  //   width: "50%",
  //   position: "fixed",
  //   zIndex: "1",
  //   top: "0",
  //   overflowX: "hidden",
  //   paddingTop: "20px",
  // },

  // /* Control the left side */
  // left: {
  //   left: "10px",
  //   //backgroundColor: #111;
  // },

  // /* Control the right side */
  // right: {
  //   right: "0",
  //   // background-color: red;
  // },

  // /* If you want the content centered horizontally and vertically */
  // centered: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   //transform: translate("-50%", "-50%"),
  //   transform: "translate(-50%, -50%)",
  //   textAlign: "center",
  // },

  // /* Style the image inside the centered container, if needed */
  centered: {
    borderRadius: "50%",
    marginTop: "200px",
    marginLeft: "30px",
  },
  img: {
    width: "150px",
  },
}));
