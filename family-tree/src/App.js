import FamilyTreeContainer from './components/FamilyTreeContainer/FamilyTreeContainer';
import * as json from './data/tree.json';

const App = () => <FamilyTreeContainer json={json.default} />;

export default App;
