import React from "react";

import { Button, Tooltip } from "shared/components";
import feedbackImage from "./assets/feedback.png";
import {
  FeedbackDropdown,
  FeedbackImageCont,
  FeedbackImage,
  FeedbackParagraph
} from "./Styles";

const ProjectBoardIssueDetailsFeedback = () => (
  <Tooltip
    width={300}
    offset={{ top: -15 }}
    renderLink={linkProps => (
      <Button icon="feedback" color="empty" {...linkProps}>
        Give feedback
      </Button>
    )}
    renderContent={() => (
      <FeedbackDropdown>
        <FeedbackImageCont>
          <FeedbackImage src={feedbackImage} alt="Give feedback" />
        </FeedbackImageCont>
        <FeedbackParagraph>
          This simplified bug tracker is built with React on the front-end and
          Node/TypeScript on the back-end.
        </FeedbackParagraph>
        <FeedbackParagraph>
          {"Contact me: "}
          <a href="mailto:shihabdider@gmail.com">
            <strong>shihabdider@gmail.com</strong>
          </a>
        </FeedbackParagraph>
        <a
          href="https://github.com/shihabdider/react-bug-tracker"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button style={{ marginLeft: 10 }} icon="github">
            Github Repo
          </Button>
        </a>
      </FeedbackDropdown>
    )}
  />
);

export default ProjectBoardIssueDetailsFeedback;
