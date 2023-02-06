import styled from "styled-components";

import { color, font, mixin, zIndexValues } from "shared/utils/styles";

export const Sidebar = styled.div`
  position: absolute;
  z-index: ${zIndexValues.navLeft - 1};
  top: 0;
  left: 0px;
  height: 100vh;
  width: 240px;
  padding: 0 16px;
  background: ${color.backgroundLightest};
  border-right: 1px solid ${color.borderLightest};
`;

export const ProjectInfo = styled.div`
  display: flex;
  padding: 24px 4px;
`;

export const ProjectTexts = styled.div`
  padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
  color: ${color.textDark};
  ${font.size(14)};
  ${font.medium};
`;

export const ProjectCategory = styled.div`
  color: ${color.textMedium};
  ${font.size(12)};
`;

export const Divider = styled.div`
  margin-top: 17px;
  padding-top: 18px;
  border-top: 1px solid ${color.borderLight};
`;

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  padding: 8px 10px 8px 17px;
  border-radius: 3px;
  ${mixin.clickable}
  ${props =>
    !props.to
      ? `cursor: not-allowed;`
      : `&:hover { background: ${color.backgroundLight}; }`}
  i {
    margin-right: 15px;
    font-size: 20px;
  }
  &.active {
    border-left: 4px solid blue;
    border-radius: 4px;
    color: ${color.primary};
    background: ${color.backgroundLight};
    i {
      color: ${color.primary};
    }
  }
`;

export const LinkText = styled.div`
  padding-top: 2px;
  ${font.size(14)};
`;

export const NotImplemented = styled.div`
  display: none;
  position: absolute;
  top: 9px;
  left: 101%;
  width: 120px;
  padding: 3px 0 3px 8px;
  border-radius: 3px;
  color: #fff;
  background: #000;
  ${font.size(12.5)};
  ${font.medium}
  ${LinkItem}:hover & {
    display: inline-block;
  }
`;
