import familyTreeToNetwork from '../familyTreeToNetwork';
import familyTree from './tree.json';

describe('familyTreeToNetwork', () => {
  it('maps from json data to visjs network shape', () => {
    expect(familyTreeToNetwork(familyTree)).toMatchSnapshot();
  });
});
