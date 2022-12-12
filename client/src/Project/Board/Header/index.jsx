import React from "react";
import PropTypes from "prop-types";

import { Button } from "shared/components";
import { Breadcrumbs, Divider, Header, BoardName } from "./Styles";

const propTypes = {
  projectName: PropTypes.string.isRequired
};

const ProjectBoardHeader = ({ projectName }) => {
  return (
    <>
      <Breadcrumbs>
        Projects
        <Divider>/</Divider>
        {projectName}
        <Divider>/</Divider>
        Kanban Board
      </Breadcrumbs>
      <Header>
        <BoardName>Kanban board</BoardName>
        <a
          href="https://github.com/shihabdider/react-issue-tracker"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button icon="github">Github Repo</Button>
        </a>
      </Header>
    </>
  );
};

ProjectBoardHeader.propTypes = propTypes;

export default ProjectBoardHeader;
