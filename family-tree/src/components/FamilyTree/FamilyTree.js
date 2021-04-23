import PropTypes from 'prop-types';
// Example; https://github.com/visjs/vis-network-react/blob/master/example/src/App.js
import VisNetworkReactComponent from 'vis-network-react';

import './FamilyTree.css';

const options = {
  layout: {
    hierarchical: {
      direction: 'DU',
    },
  },
  edges: {
    smooth: true,
  },
  nodes: {
    shape: 'box',
    color: 'rgba(28, 124, 221, 0.9)',
    font: {
      color: '#fff',
    },
  },
  interaction: {
    dragNodes: false,
  },
  physics: {
    enabled: true,
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 250,
      springConstant: 0.01,
      nodeDistance: 200,
      damping: 0.09,
    },
    solver: 'hierarchicalRepulsion',
  },
};

const augmentData = (data) => {
  const edges = data.edges.map((edge) => {
    if (edge.label === 'husband' || edge.label === 'wife') {
      return ({
        ...edge, label: undefined,
      });
    }
    return edge;
  });
  return { nodes: data.nodes, edges };
};

const FamilyTree = ({ data }) => (
  <div className="family-tree-container">
    <VisNetworkReactComponent
      data={augmentData(data)}
      options={options}
    />
  </div>
);

FamilyTree.propTypes = {
  data: PropTypes.exact({
    nodes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })).isRequired,
    edges: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      label: PropTypes.oneOf(['father', 'mother', 'husband', 'wife']).isRequired,
    })).isRequired,
  }).isRequired,
};

export default FamilyTree;
