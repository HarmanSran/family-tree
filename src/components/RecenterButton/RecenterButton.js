import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    left: 'auto',
    position: 'fixed',
    bottom: 20,
  },
});

/**
 * Renders floating action button that recenters the network (if user has moved/zoomed it)
 */
const RecenterButton = ({ network }) => {
  const classes = useStyles();
  return (
    <Tooltip title="Recenter Family Tree" aria-label="recenter" placement="left">
      <Fab
        className={classes.fab}
        color="primary"
        onClick={() => (typeof (network) === 'object' ? network.fit() : {})}
      >
        <CenterFocusStrongIcon />
      </Fab>
    </Tooltip>
  );
};

RecenterButton.propTypes = {
  network: PropTypes.shape({
    fit: PropTypes.func.isRequired,
  }),
};

RecenterButton.defaultProps = {
  network: null,
};

export default RecenterButton;
