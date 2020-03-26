import {User} from './models/User'

const user = new User({})

user.on('click', () => {console.log('click #1')})
user.on('click', () => {console.log('click #2')})

user.trigger('click')

console.log(user)