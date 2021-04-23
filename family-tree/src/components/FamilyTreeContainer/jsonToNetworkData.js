const getNodes = (data) => {
  const levels = {};

  Object.values(data).forEach(({ id, father, mother }) => {
    if (levels[id] === undefined) {
      levels[id] = 1;
    }
    levels[father] = levels[id] + 1;
    levels[mother] = levels[id] + 1;
  });

  return Object.keys(data).map((name) => ({ label: name, id: data[name].id, level: levels[data[name].id] }));
};

const getEdges = (data) => {
  const edges = [];
  Object.values(data).forEach(({ id: to, ...relations }) => {
    Object.entries(relations).map(([label, from]) => {
      edges.push({ from, to, label });
      return null;
    });
  });
  return edges;
};

/**
 * Maps tree.json shape to Visjs network shape
 *
 * Hierarchy levels are based on the first entry
 *
 * Children must be defined BEFORE parents
 */
const jsonToNetworkData = (data) => ({ nodes: getNodes(data), edges: getEdges(data) });

export default jsonToNetworkData;
