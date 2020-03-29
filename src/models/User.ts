import { Model } from './Model';
import { ApiSync } from './Sync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';
const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      (json: UserProps) => User.buildUser(json)
    );
  }
}
