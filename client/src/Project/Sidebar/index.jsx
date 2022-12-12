import React from "react";
import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";

import { Icon, ProjectAvatar } from "shared/components";
import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented
} from "./Styles";

import projecticon from "./projecticon.png";

const propTypes = {
  projectName: PropTypes.string.isRequired
};

const ProjectSidebar = ({ projectName }) => {
  const match = useRouteMatch();

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar src={projecticon} />
        <ProjectTexts>
          <ProjectName>{projectName}</ProjectName>
          <ProjectCategory>Software project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem(match, "Kanban Board", "board", "/board")}
      {renderLinkItem(match, "Project Settings", "settings", "/settings")}
      <Divider />
    </Sidebar>
  );
};

const renderLinkItem = (match, text, iconType, path) => {
  const isImplemented = !!path;

  const linkItemProps = isImplemented
    ? { as: NavLink, exact: true, to: `${match.path}${path}` }
    : { as: "div" };

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
    </LinkItem>
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;
