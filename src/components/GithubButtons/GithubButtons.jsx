import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/deepcs/portfolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/deepcs/portfolio/"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star deepcs/portfolio/ on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
