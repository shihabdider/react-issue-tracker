import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Icon } from "shared/components";
import { Item, ItemText } from "./Styles";

const CreateIssueButton = () => {
  const match = useRouteMatch();
  return (
    <Link to={`${match.path}/create-issue`}>
      <Item>
        <Icon type="plus" size={16} />
        <ItemText>Create issue</ItemText>
      </Item>
    </Link>
  );
};

export default CreateIssueButton;
