const augmentEdges = (network) => {
  const { edges } = network;
  return edges.map((edge) => ({
    ...edge,
    label: undefined,
    color: ['husband', 'wife'].includes(edge.label) ? 'rgba(255, 117, 61)' : undefined,
  }));
};

const getNodeLabel = ({ name, metadata: { birth, death } }) => {
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

const getNodeColor = ({ metadata: { gender } }) => (gender === 'F' ? 'rgba(255, 189, 248)' : 'rgba(133, 222, 255)');

const augmentNodes = (network) => {
  const { nodes } = network;
  return nodes.map(({ id, level, details }) => ({
    id,
    level,
    label: getNodeLabel(details),
    color: getNodeColor(details),
  }));
};

const augmentNetwork = (network) => ({
  nodes: augmentNodes(network),
  edges: augmentEdges(network),
});

export default augmentNetwork;
