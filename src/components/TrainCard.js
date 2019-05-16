import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import grey from '@material-ui/core/colors/grey';

import Typography from '@material-ui/core/Typography';

import './TrainCard.css'

class TrainCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs>
        <Card className={classes.card}>
          <CardActionArea>
            <CardHeader className="cardHeader" title={this.props.user.name}>
            </CardHeader>
            <CardContent className={this.getColor(this.props.user.percentage)}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {<CircularProgress size={65} className={classes.circularProgress}/>}
                <Typography variant="h5" className={classes.textProgress}>
                  {this.props.user.percentage}%
                </Typography>

                <div>
                  <Typography variant="h4" className={classes.whiteText}>
                    {this.props.user.heart}  RPM
              </Typography>
                  <Typography component="p" className={classes.whiteText}>
                    Distance: {this.props.user.distance} Km.
                  </Typography>
                  <Typography component="p" className={classes.whiteText}>
                    Calories: {this.props.user.calories}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  getColor(percentage) {
    switch (true) {
      case (percentage > 90): return "red"
      case (percentage > 70): return "orange"
      case (percentage > 50): return "green"
      default: return "blue"
    }
  }
}

const styles = theme => ({
  circularProgress:{
    color: grey[50],
    animationDuration: '950ms',
  },  
  whiteText:{
    color: grey[50],
  },
  textProgress:{
    position: 'absolute',
    top: 95,
    left: 25,
    color: grey[50],
  },
  card: {
    backgroundColor: grey[200],
    width: 300,
    height: 170,
    margin: 20,
  }
});

TrainCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrainCard);