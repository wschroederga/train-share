import React from "react"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

import sample from './SampleUsers.json'
import TrainCard from './TrainCard'

class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <Grid className={classes.grid} container spacing={2} justify="space-evenly" alignItems="baseline">
            {sample.map((user, _) => (
                <TrainCard user={user}/>
            )
            )}
            </Grid>
        )
    }
}

const styles = theme => ({
    grid: {
        minHeight: window.innerHeight + 'px',
        backgroundColor: grey[900],
      }    
  });
  
  Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Dashboard);