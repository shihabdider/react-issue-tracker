import styled, { css } from "styled-components";

import { Avatar, Icon } from "shared/components";
import {
  color,
  issueTypeColors,
  issuePriorityColors,
  font,
  mixin
} from "shared/utils/styles";

export const IssueWrapper = styled.div`
  margin-bottom: 5px;
`;

export const Issue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLight};
  }
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TypeIcon = styled(Icon)`
  font-size: 19px;
  color: ${props => issueTypeColors[props.color]};
`;

export const PriorityIcon = styled(Icon)`
  position: relative;
  top: -1px;
  margin-left: 4px;
  font-size: 18px;
  color: ${props => issuePriorityColors[props.color]};
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
`;
