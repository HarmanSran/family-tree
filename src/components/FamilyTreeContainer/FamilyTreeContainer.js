import PropTypes from 'prop-types';
import FamilyTree from '../FamilyTree/FamilyTree';
import familyTreeToNetwork from './familyTreeToNetwork';

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
