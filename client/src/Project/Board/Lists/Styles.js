import styled from "styled-components";

import { color, font } from "shared/utils/styles";

export const Lists = styled.div`
  display: flex;
  margin: 24px -4px 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4px;
  min-height: 100px;
  width: 25%;
  border-radius: 4px;
  background: ${color.backgroundLightest};
`;

export const Title = styled.div`
  padding: 12px 10px 16px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12)};
`;

export const IssuesCount = styled.span`
  text-transform: lowercase;
  ${font.size(12)};
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
`;
