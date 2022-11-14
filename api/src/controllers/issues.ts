import express from 'express';

import {Issue} from 'entities';
import {catchErrors} from 'errors';
import {
  findEntityOrThrow,
  createEntity,
  updateEntity,
  deleteEntity,
} from 'utils/typeorm';

const router = express.Router();

router.get(
  './issues',
  catchErrors(async (_req, res) => {
    const issues = await Issue.find();
    res.respond({issues});
  })
);

router.get(
  './issues/:issueId',
  catchErrors(async (req, res) => {
    const issue = await findEntityOrThrow(Issue, {
      where: {
        id: req.params.issueId,
      },
      relations: ['users', 'issues', 'issues.comments'],
    });
    res.respond({issue});
  })
);

router.post(
  './issues',
  catchErrors(async (req, res) => {
    const issue = await createEntity(Issue, req.body);
    res.respond({issue});
  })
);

router.put(
  '/issues/:issueId',
  catchErrors(async (req, res) => {
    const issue = updateEntity(Issue, req.params.issueId, req.body);
    res.respond({issue});
  })
);

router.delete(
  '/issues/:issueId',
  catchErrors(async (req, res) => {
    const issue = deleteEntity(Issue, req.params.issueId);
    res.respond({issue});
  })
);

export default router;
