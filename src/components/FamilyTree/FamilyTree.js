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
    hover: true,
    navigationButtons: true,
    keyboard: false,
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

const augmentEdges = (network) => {
  const { edges } = network;
  return edges.map((edge) => ({
    ...edge, label: undefined,
  }));
};

const getNodeLabel = (details) => {
  const { name, metadata: { birth, death } } = details;
  const birthYear = birth ? birth.split('-')[0] : null;
  const deathYear = death ? death.split('-')[0] : null;
  let lifespan = null;
  if (birthYear && deathYear) {
    lifespan = `${birthYear} - ${deathYear}`;
  } else if (birthYear) {
    lifespan = `${birthYear} -`;
  } else if (deathYear) {
    lifespan = `- ${deathYear}`;
  }
  return `${name}${lifespan ? `\n${lifespan}` : ''}`;
};

const augmentNodes = (network) => {
  const { nodes } = network;
  return nodes.map(({ id, level, details }) => ({
    id, level, label: getNodeLabel(details),
  }));
};

const augmentNetwork = (network) => ({
  nodes: augmentNodes(network),
  edges: augmentEdges(network),
});

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
