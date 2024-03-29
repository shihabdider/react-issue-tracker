import Color from "color";
import { IssueType, IssueStatus, IssuePriority } from "shared/constants/issues";

export const color = {
  primary: "#0052cc", // green
  success: "#0052cc", // blue
  danger: "#E13C3C", // red
  warning: "#F89C1C", // orange
  secondary: "#F4F5F7", // light grey

  textDarkest: "#172b4d",
  textDark: "#42526E",
  textMedium: "#5E6C84",
  textLight: "#8993a4",
  textLink: "#0052cc",

  backgroundDarkPrimary: "#0B875B",
  backgroundMedium: "#dfe1e6",
  backgroundLight: "#e6effc",
  backgroundLightest: "#F4F5F7",
  backgroundLightPrimary: "#D2E5FE",
  backgroundLightSuccess: "#E4FCEF",

  borderLightest: "#dfe1e6",
  borderLight: "#C1C7D0",
  borderInputFocus: "#4c9aff"
};

export const issueTypeColors = {
  [IssueType.TASK]: "#4FADE6", // blue
  [IssueType.BUG]: "#E44D42", // red
  [IssueType.STORY]: "#65BA43" // green
};

export const issuePriorityColors = {
  [IssuePriority.HIGHEST]: "#CD1317", // red
  [IssuePriority.HIGH]: "#E9494A", // orange
  [IssuePriority.MEDIUM]: "#E97F33", // orange
  [IssuePriority.LOW]: "#2D8738", // green
  [IssuePriority.LOWEST]: "#57A55A" // green
};

export const issueStatusColors = {
  [IssueStatus.BACKLOG]: color.textDark,
  [IssueStatus.INPROGRESS]: "#fff",
  [IssueStatus.SELECTED]: color.textDark,
  [IssueStatus.DONE]: "#fff"
};

export const issueStatusBackgroundColors = {
  [IssueStatus.BACKLOG]: color.backgroundMedium,
  [IssueStatus.INPROGRESS]: color.primary,
  [IssueStatus.SELECTED]: color.backgroundMedium,
  [IssueStatus.DONE]: color.success
};

export const sizes = {
  appNavBarLeftWidth: 64,
  secondarySideBarWidth: 240,
  minViewportWidth: 1000
};

export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  navLeft: 100
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: size => `font-size: ${size}px;`
};

export const mixin = {
  darken: (colorValue, amount) =>
    Color(colorValue)
      .darken(amount)
      .string(),
  lighten: (colorValue, amount) =>
    Color(colorValue)
      .lighten(amount)
      .string(),
  rgba: (colorValue, opacity) =>
    Color(colorValue)
      .alpha(opacity)
      .string(),
  boxShadowMedium: `
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1);
  `,
  boxShadowDropdown: `
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: `
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: `
    transform: translateZ(0);
  `,
  clearfix: `
    *zoom: 1;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
  `,
  cover: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: colorValue => `
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: `
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({
    width = 8,
    background = mixin.darken(color.backgroundMedium, 0.2)
  } = {}) => `
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
  backgroundImage: imageURL => `
    background-image: url("${imageURL}");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  link: (colorValue = color.textLink) => `
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
  tag: (
    background = color.backgroundMedium,
    colorValue = color.textDarkest
  ) => `
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    color: ${colorValue};
    background: ${background};
    ${font.bold}
    ${font.size(12)}
    i {
      margin-left: 4px;
    }
  `
};
