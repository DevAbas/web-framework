import { User } from './models/User';

const user = new User({ name: 'ALSO NEW NAME', age: 8989 });

user.save();
