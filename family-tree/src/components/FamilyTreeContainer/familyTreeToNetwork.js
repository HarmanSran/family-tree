const parseId = (id) => parseInt(id, 10);

/**
 * Returns object that maps id to 'level'
 *
 * Level is an integer that determine position (i.e. row) in family tree
 *
 * Level = 1 means bottom of tree (the newest children)
 *
 * Highest level is the oldest ancestor
 *
 * @param {object} json From `tree.json`
 * @returns {object} levels
 */
const getNodeLevels = (json) => {
  const levels = {};

  Object.keys(json).forEach((id) => {
    // If this person is not a parent, they will stay at bottom of tree
    if (levels[id] === undefined) {
      levels[id] = 1;
    }

    // Ensure parents are always one level above children
    levels[json[id].relations.father] = levels[id] + 1;
    levels[json[id].relations.mother] = levels[id] + 1;
  });

  return levels;
};

/**
 * Returns array containing nodes of the family tree
 *
 * Node shape:
 * `id` is a unique key (integer)
 * `level` is required (integer)
 * `details` contains everything about this person from `tree.json` (object)
 *
 * @param {object} json From `tree.json`
 * @returns {array} nodes
 */
const getNodes = (json) => {
  const levels = getNodeLevels(json);
  return Object.keys(json).map((id) => ({ id: parseId(id), level: levels[id], details: json[id] }));
};

/**
 * Returns array containing edges of the family tree
 *
 * Edge shape:
 * `from` is required (integer)
 * `to` is required (integer)
 * `label` is required (string)
 *
 * @param {object} json From `tree.json`
 * @returns {array} edges
 */
const getEdges = (json) => {
  const edges = [];
  // For each person
  Object.keys(json).forEach((id) => {
    // For each of that person's relations
    Object.entries(json[id].relations).map(([relation, relationId]) => {
      // Connect that person to that relation
      edges.push({ from: relationId, to: parseId(id), label: relation });
      return null;
    });
  });
  return edges;
};

/**
 * Maps tree.json shape to Visjs network shape
 */
const familyTreeToNetwork = (json) => ({ nodes: getNodes(json), edges: getEdges(json) });

export default familyTreeToNetwork;
