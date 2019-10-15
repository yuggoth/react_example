import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { progress } from "../../actions";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import TabProgressBar from "../tabProgressBar";

const theme = createMuiTheme();

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1)
  }
});

const renderTextField = ({
  input,
  label,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    placeholder={label}
    helperText={touched && error}
    label={label}
    error={touched && invalid}
    {...input}
    {...custom}
  />
);

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Женский" />
      <FormControlLabel value="male" control={<Radio />} label="Мужской" />
    </RadioGroup>
  </FormControl>
);

const validate = (values, state) => {
  const errors = {};
  const requiredFields = [
    "firstName",
    "lastName",
    "secondName",
    "sex",
    "email"
  ];
  let complete = 0;
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    } else {
      complete++;
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  state.progress(parseInt((100 / requiredFields.length) * complete));

  return errors;
};

class Tab1Form extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <TabProgressBar />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Field
                name="lastName"
                component={renderTextField}
                label="Фамилия"
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="firstName"
                component={renderTextField}
                label="Имя"
                style={{ paddingBottom: 50 }}
              />
              <FormLabel component="legend">Пол</FormLabel>
              <Field name="sex" component={radioButton} />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="secondName"
                component={renderTextField}
                label="Отчество"
                style={{ paddingBottom: 80 }}
              />
              <Field
                name="email"
                component={renderTextField}
                label="Email"
                style={{ paddingBottom: 50 }}
              />
              <div>
                <Button
                  color="primary"
                  type="submit"
                  disabled={pristine || submitting}
                >
                  Submit
                </Button>
                <Button
                  color="primary"
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  Clear Values
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  tabProgressBar: state.tabProgressBar,
  response: state.response
});

export default connect(
  mapStateToProps,
  { progress }
)(
  reduxForm({
    form: "Tab1Form",
    enableReinitialize: true,
    validate
  })(withStyles(styles)(Tab1Form))
);

