import jsonToNetworkData from './jsonToNetworkData';

describe('jsonToNetworkData', () => {
  it('maps from json data to visjs network shape', () => {
    const data = {
      'Harry Potter': { id: 0, father: 1, mother: 2 },
      'James Potter': { id: 1, wife: 2 },
      'Lily Potter': { id: 2, husband: 1 },
    };
    const { nodes, edges } = jsonToNetworkData(data);
    expect(nodes).toEqual([
      { label: 'Harry Potter', id: 0, level: 1 },
      { label: 'James Potter', id: 1, level: 2 },
      { label: 'Lily Potter', id: 2, level: 2 },
    ]);
    expect(edges).toEqual([
      { from: 1, to: 0, label: 'father' },
      { from: 2, to: 0, label: 'mother' },
      { from: 2, to: 1, label: 'wife' },
      { from: 1, to: 2, label: 'husband' },
    ]);
  });
});
