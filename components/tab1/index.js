import React, { Component } from "react";
import Tab1Form from "../tab1Form";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { amber, green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      style={{ marginTop: 20 }}
      message={
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
      }
      {...other}
    />
  );
}

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: { error: "", send: false, success: false }
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({ status: { error: "", send: true, success: false } });
    fetch("https://ptsv2.com/t/87quh-1571084409/post", {
      method: "POST",
      body: JSON.stringify(values),
      mode: "cors"
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw new Error("Форма не была сохранена. Проблемы с сетью.");
        }
      })
      .then(data => {
        this.setState({ status: { success: data, send: false } });
      })
      .catch(e => {
        this.setState({ status: { error: e.message, send: false } });
      });
  }

  render() {
    const { success, error, send } = this.state.status;
    return (
      <div>
        <Typography variant="h5" component="h1">
          Персональные данные
        </Typography>
        <div>
          {send ? (
            <MySnackbarContentWrapper
              variant="warning"
              message="Отправка формы"
            />
          ) : error ? (
            <MySnackbarContentWrapper variant="error" message={error} />
          ) : success ? (
            <MySnackbarContentWrapper
              variant="success"
              message="Форма успешно отправлена!"
            />
          ) : (
            <Tab1Form onSubmit={this.submitForm} />
          )}
        </div>
      </div>
    );
  }
}

export default Tab1;

