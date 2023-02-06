import styled from "styled-components";
import { font, mixin } from "shared/utils/styles";

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #42526e;
  transition: color 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(9, 30, 66, 0.08);
  }
  i {
    position: absolute;
    left: 18px;
  }
`;

export const ItemText = styled.div`
  position: relative;
  right: 24px;
  font-weight: 500;
  ${font.size(14)}
`;
