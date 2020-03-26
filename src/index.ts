import {User} from './models/User'

const user = new User({name: 'Abas', age: 25})
console.log(user.get('age'))