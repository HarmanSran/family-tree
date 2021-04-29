import familyTreeToNetwork from '../familyTreeToNetwork';
import familyTree from './tree.json';

describe('familyTreeToNetwork', () => {
  it('maps from json data to visjs network shape', () => {
    const { nodes, edges } = familyTreeToNetwork(familyTree);
    expect(nodes).toEqual([
      { id: 0, level: 1, details: familyTree[0] },
      { id: 1, level: 2, details: familyTree[1] },
      { id: 2, level: 2, details: familyTree[2] },
      { id: 3, level: 3, details: familyTree[3] },
      { id: 4, level: 3, details: familyTree[4] },
      { id: 5, level: 3, details: familyTree[5] },
      { id: 6, level: 3, details: familyTree[6] },
      { id: 7, level: 1, details: familyTree[7] },
    ]);
    expect(edges).toEqual([
      { from: 1, to: 0, label: 'father' },
      { from: 2, to: 0, label: 'mother' },
      { from: 3, to: 1, label: 'father' },
      { from: 4, to: 1, label: 'mother' },
      { from: 2, to: 1, label: 'wife' },
      { from: 5, to: 2, label: 'father' },
      { from: 6, to: 2, label: 'mother' },
      { from: 1, to: 2, label: 'husband' },
      { from: 4, to: 3, label: 'wife' },
      { from: 3, to: 4, label: 'husband' },
      { from: 6, to: 5, label: 'wife' },
      { from: 5, to: 6, label: 'husband' },
      { from: 1, to: 7, label: 'father' },
      { from: 2, to: 7, label: 'mother' },
    ]);
  });
});
