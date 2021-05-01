const options = {
  layout: {
    hierarchical: {
      direction: 'DU',
    },
  },
  edges: {
    smooth: {
      type: 'cubicBezier',
      forceDirection: 'vertical',
      roundness: 1,
    },
    width: 2,
  },
  nodes: {
    widthConstraint: 100,
    heightConstraint: 50,
    shape: 'box',
    labelHighlightBold: false,
  },
  interaction: {
    dragNodes: false,
    hover: true,
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

export default options;
