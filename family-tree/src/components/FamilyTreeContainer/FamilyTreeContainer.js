import PropTypes from 'prop-types';
import FamilyTree from '../FamilyTree/FamilyTree';
import jsonToNetworkData from './jsonToNetworkData';

const FamilyTreeContainer = ({ json }) => {
  const data = jsonToNetworkData(json);
  return (
    <FamilyTree
      data={data}
    />
  );
};

FamilyTreeContainer.propTypes = {
  json: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    father: PropTypes.number,
    mother: PropTypes.number,
    husband: PropTypes.number,
    wife: PropTypes.number,
    siblings: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default FamilyTreeContainer;
