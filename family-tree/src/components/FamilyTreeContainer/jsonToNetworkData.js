const getNodes = (data) => Object.keys(data).map((name) => ({ label: name, id: data[name].id }));

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
 */
const jsonToNetworkData = (data) => ({ nodes: getNodes(data), edges: getEdges(data) });

export default jsonToNetworkData;
