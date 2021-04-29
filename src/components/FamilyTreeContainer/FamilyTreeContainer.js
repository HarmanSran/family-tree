import PropTypes from 'prop-types';
import FamilyTree from '../FamilyTree/FamilyTree';
import familyTreeToNetwork from './familyTreeToNetwork';

/**
 * Maps family tree to a network graph:
 * { 0: {}, 1: {}, 2: {}, ...} -> { nodes, edges }
 */
const FamilyTreeContainer = ({ familyTree }) => (
  <FamilyTree network={familyTreeToNetwork(familyTree)} />
);

FamilyTreeContainer.propTypes = {
  familyTree: PropTypes.objectOf(PropTypes.shape({
    relations: PropTypes.shape({
      father: PropTypes.number,
      mother: PropTypes.number,
    }).isRequired,
  })).isRequired,
};

export default FamilyTreeContainer;
