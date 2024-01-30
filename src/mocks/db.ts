import { factory, manyOf, oneOf, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

// Ensures consistent fake data generated
faker.seed(123);

export const mockLoggedInUser = {
  id: "1",
  firstName: "Shaun",
  lastName: "Sweet",
  email: "shaun@shaunsweet.com",
};

// Create a "db" with a user model and some defaults
export const db = factory({
  user: {
    id: primaryKey(faker.string.uuid),
    firstName: String,
    lastName: String,
    email: String,
    friends: manyOf("user"),
  },
  post: {
    id: primaryKey(String),
    content: String,
    author: oneOf("user"),
  },
});

export const createMockUser = () => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    friends: [],
    posts: [],
  };
};

export const createMockPost = () => {
  return {
    id: faker.string.uuid(),
    content: faker.lorem.sentences(4),
  };
};

const seedMockUsers = () => {
  // the logged in user
  db.user.create(mockLoggedInUser);
  // create 10 users
  for (let i = 0; i < 10; i++) {
    const user = createMockUser();

    db.user.create(user);
  }
};

const seedFriends = () => {
  const users = db.user.findMany({
    where: { id: { notEquals: "1" } },
  });
  db.user.update({ where: { id: { equals: "1" } }, data: { friends: users } });
};

const seedPosts = () => {
  const users = db.user.findMany({
    where: { id: { notEquals: "1" } },
  });

  users.forEach((user) => {
    for (let i = 0; i < 3; i++) {
      const post = { ...createMockPost(), author: user };
      db.post.create(post);
    }
  });
};

const seedData = () => {
  seedMockUsers();
  seedFriends();
  seedPosts();
};

seedData();
