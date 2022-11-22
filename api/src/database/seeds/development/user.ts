import {faker} from '@faker-js/faker';

import User from 'entities/User';

const generateUser = (data: Partial<User> = {}): Partial<User> => ({
  name: faker.company.name(),
  avatarUrl: faker.image.avatar(),
  email: faker.internet.email(),
  ...data,
});

export default generateUser;
