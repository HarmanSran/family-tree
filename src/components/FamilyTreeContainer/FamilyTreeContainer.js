import PropTypes from 'prop-types';
import { useState } from 'react';
import FamilyTree from '../FamilyTree/FamilyTree';
import GithubButton from '../GithubButton/GithubButton';
import RecenterButton from '../RecenterButton/RecenterButton';
import familyTreeToNetwork from './familyTreeToNetwork/familyTreeToNetwork';

/**
 * Maps family tree to a network graph:
 * { 0: {}, 1: {}, 2: {}, ...} -> { nodes, edges }
 */
const FamilyTreeContainer = ({ familyTree }) => {
  const [network, setNetwork] = useState(null);
  return (
    <>
      <FamilyTree network={familyTreeToNetwork(familyTree)} getNetwork={(n) => setNetwork(n)} />
      <GithubButton />
      <RecenterButton network={network} />
    </>
  );
};

FamilyTreeContainer.propTypes = {
  familyTree: PropTypes.objectOf(PropTypes.shape({
    relations: PropTypes.shape({
      father: PropTypes.number,
      mother: PropTypes.number,
    }).isRequired,
  })).isRequired,
};

export default FamilyTreeContainer;
