import { Category } from '@/models/category';
import { faker } from '@faker-js/faker';

function createRandomCategories(): Category {
  return {
    _id: faker.string.uuid(),
    description: faker.string.sample(100),
    name: faker.internet.userName(),
    image: faker.image.avatar(),
    slug: faker.string.alphanumeric()
  };
}

export const CATEGORY: Category[] = faker.helpers.multiple(createRandomCategories, {
  count: 3,
});