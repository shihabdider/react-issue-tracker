export enum IssueType {
  TASK = 'task',
  BUG = 'bug',
  STORY = 'story',
}

export const IssueTypeCopy = {
  [IssueType.TASK]: 'Task',
  [IssueType.BUG]: 'Bug',
  [IssueType.STORY]: 'Story',
};

export enum IssueStatus {
  BACKLOG = 'backlog',
  SELECTED = 'selected',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

export enum IssuePriority {
  HIGHEST = '5',
  HIGH = '4',
  MEDIUM = '3',
  LOW = '2',
  LOWEST = '1',
}

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'Highest',
  [IssuePriority.HIGH]: 'High',
  [IssuePriority.MEDIUM]: 'Medium',
  [IssuePriority.LOW]: 'Low',
  [IssuePriority.LOWEST]: 'Lowest',
};
