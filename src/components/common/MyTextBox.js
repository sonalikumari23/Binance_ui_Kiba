import React from "react";
import { useStyles } from "./style";
import { Box, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export default function MyTextBox() {
  const classes = useStyles();

  return (
    <Box
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: "20px",
        width: "100%",
        height: "50px",
        background: "#F8F9F9",
        border: "1px solid lightgrey",
        borderRadius: 10,
      }}
    >
      <Button
        disabled="true"
        style={{
          opacity: 1,
          color: "black",
          disabled: true,
          height: "50px",
          background: "none",
          fontSize: 12,
          width: "20%",
          fontWeight: "bold",
        }}
      >
        Buy Price
      </Button>
      <TextField
        id="outlined-basic"
        InputProps={{ disableUnderline: true, fontSize: 8 }}
        style={{
          height: "50px",
          paddingLeft: "10px",
          paddingTop: "7px",
          fontSize: "8 !important",
          borderLeft: "1px solid lightgrey",
          width: "80%",
        }}
      />
    </Box>
  );
}
