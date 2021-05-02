import PropTypes from 'prop-types';
import VisNetworkReactComponent from 'vis-network-react';
import { makeStyles } from '@material-ui/core';
import augmentNetwork from './augmentNetwork/augmentNetwork';
import options from './options/options';

const useStyles = makeStyles({
  canvasWrapper: {
    height: '100%',
  },
});

/**
 * Renders visjs network.
 * - Applies customized visjs options to network
 * - Augments network prop with visjs properties to make prettifed tree
 */
const FamilyTree = ({ network, getNetwork }) => {
  const classes = useStyles();
  return (
    <div className={classes.canvasWrapper}>
      <VisNetworkReactComponent
        data={augmentNetwork(network)}
        options={options}
        getNetwork={getNetwork}
      />
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
  getNetwork: PropTypes.func.isRequired,
};

export default FamilyTree;
