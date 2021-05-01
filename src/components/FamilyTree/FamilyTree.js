import { useState } from 'react';
import PropTypes from 'prop-types';
import VisNetworkReactComponent from 'vis-network-react';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import GitHubIcon from '@material-ui/icons/GitHub';
import augmentNetwork from './augmentNetwork/augmentNetwork';
import options from './options/options';

const useStyles = makeStyles({
  canvasWrapper: {
    height: '100%',
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    left: 'auto',
    position: 'fixed',
  },
  recenterFab: {
    bottom: 20,
  },
  githubFab: {
    bottom: 20 + 56 + 20,
  },
});

const FamilyTree = ({ network }) => {
  const classes = useStyles();
  const [visNetwork, setVisNetwork] = useState(null);
  const handleRecenterClick = () => {
    if (visNetwork) {
      visNetwork.fit();
    }
  };
  return (
    <div className={classes.canvasWrapper}>
      <VisNetworkReactComponent
        data={augmentNetwork(network)}
        options={options}
        getNetwork={(n) => setVisNetwork(n)}
      />
      <Tooltip title="Recenter Family Tree" aria-label="recenter" placement="left">
        <Fab
          className={`${classes.fab} ${classes.recenterFab}`}
          color="primary"
          onClick={handleRecenterClick}
        >
          <CenterFocusStrongIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Github" aria-label="info" placement="left">
        <Fab
          className={`${classes.fab} ${classes.githubFab}`}
          color="default"
          onClick={() => console.log('Github clicked')}
        >
          <GitHubIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

FamilyTree.propTypes = {
  network: PropTypes.exact({
    nodes: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.number.isRequired,
      level: PropTypes.number.isRequired,
      details: PropTypes.exact({
        name: PropTypes.string.isRequired,
        relations: PropTypes.shape({
          father: PropTypes.number,
          mother: PropTypes.number,
        }).isRequired,
        metadata: PropTypes.shape({
          gender: PropTypes.oneOf(['M', 'F']).isRequired,
          birth: PropTypes.string,
          death: PropTypes.string,
        }).isRequired,
      }).isRequired,
    })).isRequired,
    edges: PropTypes.arrayOf(PropTypes.exact({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      label: PropTypes.oneOf(['father', 'mother', 'husband', 'wife']).isRequired,
    })).isRequired,
  }).isRequired,
};

export default FamilyTree;
