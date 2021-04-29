import familyTreeToNetwork from '../familyTreeToNetwork';
import familyTree from './tree.json';

describe('familyTreeToNetwork', () => {
  it('maps from json data to visjs network shape', () => {
    const network = familyTreeToNetwork(familyTree);
    expect(network).toMatchSnapshot();
  });
});
