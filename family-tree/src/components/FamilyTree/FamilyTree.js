import PropTypes from 'prop-types';
// Example; https://github.com/visjs/vis-network-react/blob/master/example/src/App.js
import VisNetworkReactComponent from 'vis-network-react';

import './FamilyTree.css';

const FamilyTree = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <div className="family-tree-container">
      <VisNetworkReactComponent
        data={data}
      />
    </div>
  );
};

FamilyTree.propTypes = {
  data: PropTypes.exact({
    nodes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
    edges: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default FamilyTree;
