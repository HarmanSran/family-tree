import PropTypes from 'prop-types';
import VisNetworkReactComponent from 'vis-network-react';
import augmentNetwork from './augmentNetwork/augmentNetwork';
import options from './options/options';

import './FamilyTree.css';

const FamilyTree = ({ network }) => (
  <div className="canvas-wrapper">
    <VisNetworkReactComponent
      data={augmentNetwork(network)}
      options={options}
    />
  </div>
);

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
