import PropTypes from 'prop-types';
import FamilyTree from '../FamilyTree/FamilyTree';
import jsonToNetworkData from './jsonToNetworkData';

const FamilyTreeContainer = ({ familyTree }) => (
  <FamilyTree network={jsonToNetworkData(familyTree)} />
);

FamilyTreeContainer.propTypes = {
  familyTree: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    father: PropTypes.number,
    mother: PropTypes.number,
    husband: PropTypes.number,
    wife: PropTypes.number,
  })).isRequired,
};

export default FamilyTreeContainer;
