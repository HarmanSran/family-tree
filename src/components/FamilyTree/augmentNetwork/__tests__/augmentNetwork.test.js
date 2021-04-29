import augmentNetwork from '../augmentNetwork';
import network from './network';

describe('augmentNetwork', () => {
  it('augments nodes and edges as expected', () => {
    expect(augmentNetwork(network)).toMatchSnapshot();
  });
});
