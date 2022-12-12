import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Icon } from "shared/components";
import { NavLeft, LogoLink, StyledLogo, Item, ItemText } from "./Styles";

const ProjectNavbarLeft = () => {
  const match = useRouteMatch();
  return (
    <NavLeft>
      <LogoLink to="/">
        <StyledLogo src="../favicon.png" />
      </LogoLink>
      <Link to={`${match.path}/board/create-issue`}>
        <Item>
          <Icon type="plus" size={27} />
          <ItemText>Create Issue</ItemText>
        </Item>
      </Link>
    </NavLeft>
  );
};

export default ProjectNavbarLeft;
