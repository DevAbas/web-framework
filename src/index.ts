import { User } from './models/User';

const user = new User({ id: 2, name: 'Newer name', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
