import LinearProgress from "@material-ui/core/LinearProgress";
import React, { Component } from "react";
import { connect } from "react-redux";
import { progress } from "../../actions";
import Grid from "@material-ui/core/Grid";

class TabProgressBar extends Component {
  render() {
    return (
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={11}>
          <LinearProgress
            variant="determinate"
            value={this.props.tabProgressBar}
          />
        </Grid>
        <Grid item xs={1}>
          {this.props.tabProgressBar}%
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  tabProgressBar: state.tabProgressBar
});

export default connect(
  mapStateToProps,
  { progress }
)(TabProgressBar);
