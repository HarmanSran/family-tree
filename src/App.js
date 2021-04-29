import { useEffect, useState } from 'react';
import FamilyTreeContainer from './components/FamilyTreeContainer/FamilyTreeContainer';

const FAMILY_TREE_FILE_PATH = 'data/tree.json';

/**
 * Ensures `tree.json` is readable and parses it as JSON
 */
const App = () => {
  const [familyTree, setFamilyTree] = useState(null);
  const [isFetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    const fetchFamilyTree = async () => {
      try {
        const response = await fetch(FAMILY_TREE_FILE_PATH);
        const data = await response.json();
        setFamilyTree(data);
      } catch {
        setIsFetchError(true);
      }
    };
    fetchFamilyTree();
  }, []);

  if (familyTree !== null) {
    return <FamilyTreeContainer familyTree={familyTree} />;
  }
  if (isFetchError) {
    return `Encountered error while fetching ${FAMILY_TREE_FILE_PATH}`;
  }
  return 'Loading...';
};

export default App;
