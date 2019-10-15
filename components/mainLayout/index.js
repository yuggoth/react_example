import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
});

class MainLayout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Link to="/tab-1">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Персональные данные
            </Typography>
          </Paper>
        </Link>
        <Link to="/tab-2">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Данные адреса
            </Typography>
          </Paper>
        </Link>
        <Link to="/tab-3">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Образование
            </Typography>
          </Paper>
        </Link>
        <Link to="/tab-4">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Смена пароля
            </Typography>
          </Paper>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);

