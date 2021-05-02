import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const GITHUB_REPO_URL = 'https://github.com/HarmanSran/family-tree';

const useStyles = makeStyles({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    left: 'auto',
    position: 'fixed',
    bottom: 20 + 56 + 20,
  },
});

/**
 * Renders floating action button that links to Github Repo
 */
const GithubButton = () => {
  const classes = useStyles();
  return (
    <Tooltip title="Github Repo" aria-label="github" placement="left">
      <Fab
        className={`${classes.fab} ${classes.githubFab}`}
        color="default"
        onClick={() => window.open(GITHUB_REPO_URL)}
      >
        <GitHubIcon />
      </Fab>
    </Tooltip>
  );
};

export default GithubButton;
