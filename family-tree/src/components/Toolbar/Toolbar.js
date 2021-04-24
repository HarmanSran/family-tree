import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Toolbar = () => (
  <Row className="justify-content-md-center">
    <Button variant="info">Download Template JSON</Button>
    <Button variant="secondary">Upload Family Tree JSON</Button>
    <Button variant="dark">Download Family Tree Image</Button>
  </Row>
);

export default Toolbar;
