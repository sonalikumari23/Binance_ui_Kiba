import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import { Link } from "react-router-dom";
import MyTextBox from "../common/MyTextBox";
import { Card, CardContent } from "@material-ui/core";
const formInitialSchema = {
  email: "",
  password: "",
};

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

let schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter valid Email"),
  password: yup.string().required("Password is required").min(8),
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      style={{ backgroundColor: "#324D88" }}
      disableTypography
      className={classes.root}
      {...other}
    >
      <Typography variant="h6">{children} </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function BuyModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "250px" }}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Buy
      </Button>
      <Dialog
        PaperProps={{
          style: { borderRadius: 8 },
        }}
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div
            style={{
              width: "40vw",
              backgroundColor: "#324D88",
              color: "#E6EFFD",
              fontWeight: "bold",
              alignSelf: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Buy Crypto
          </div>
        </DialogTitle>
        <DialogContent
          style={{
            margin: "10px",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Card
            variant="outlined"
            style={{
              width: "100px",
              float: "right",
              alignSelf: "self-end",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Limit
              </Typography>
            </CardContent>
          </Card>

          <MyTextBox></MyTextBox>
          <MyTextBox></MyTextBox>
          <MyTextBox></MyTextBox>
          <MyTextBox></MyTextBox>
          <Button
            style={{
              width: "150px",
              float: "right",
              marginTop: "30px",
              background: "#324D88",
              color: "#E6EFFD",
              borderRadius: 30,
              padding: "10px",
            }}
          >
            Buy USDT
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
