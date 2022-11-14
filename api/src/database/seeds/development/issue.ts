import faker from 'faker';
import {sample, random} from 'lodash';

import Issue from 'entities/Issue';
import {IssueType, IssueStatus, IssuePriority} from 'constants/issues';

const generateIssue = (data: Partial<Issue> = {}): Partial<Issue> => ({
  title: faker.company.catchPhrase(),
  status: sample(Object.values(IssueStatus)),
  priority: sample(Object.values(IssuePriority)),
  type: sample(Object.values(IssueType)),
  description: faker.lorem.paragraph(),
  estimate: random(1, 40),
  ...data,
});

export default generateIssue;
