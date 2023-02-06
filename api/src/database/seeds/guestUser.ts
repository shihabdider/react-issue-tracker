import 'module-alias/register';
import createDatabaseConnection from 'database/connection';

import {Project, User} from 'entities';
import {ProjectCategory} from 'constants/projects';
import {createEntity} from 'utils/typeorm';

const seedUsers = (): Promise<User[]> => {
  const users = [
    createEntity(User, {
      email: 'shihabdider@gmail.com',
      name: 'Shihab Dider',
      avatarUrl: 'https://i.ibb.co/0rsFkhF/image.png',
    }),
  ];
  return Promise.all(users);
};

const seedProject = (users: User[]): Promise<Project> =>
  createEntity(Project, {
    name: 'React Issue Tracker',
    url: 'react-issue-tracker.shihabdider.com',
    description: 'A simple issue tracker inspired by Jira built using react.',
    category: ProjectCategory.SOFTWARE,
    users,
  });

const seedGuestUserEntities = async (): Promise<void> => {
  try {
    const Connection = await createDatabaseConnection();
    await Connection.dropDatabase();
    await Connection.synchronize();
    const users = await seedUsers();
    await seedProject(users);
    console.log('Seeding completed!');
  } catch (error) {
    console.log(error);
  }
};

seedGuestUserEntities();
