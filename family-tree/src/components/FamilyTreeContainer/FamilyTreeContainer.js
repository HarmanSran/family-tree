import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import FamilyTree from '../FamilyTree/FamilyTree';
import Toolbar from '../Toolbar/Toolbar';
import jsonToNetworkData from './jsonToNetworkData';

const FamilyTreeContainer = ({ json }) => (
  <Container style={{ height: 'calc(100vh - 64px' }}>
    <Toolbar />
    <FamilyTree
      data={jsonToNetworkData(json)}
    />
  </Container>
);

FamilyTreeContainer.propTypes = {
  json: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    father: PropTypes.number,
    mother: PropTypes.number,
    husband: PropTypes.number,
    wife: PropTypes.number,
    // siblings: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
};

export default FamilyTreeContainer;
