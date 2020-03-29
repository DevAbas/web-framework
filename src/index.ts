import { User } from './models/User';

const collection = User.buildCollection();

collection.fetch();

console.log(collection);
