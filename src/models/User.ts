import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: 1;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
