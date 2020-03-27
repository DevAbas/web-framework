import { User } from './models/User';

const user = new User({ name: 'new name', age: 25 });

console.log(user.get('age'));
