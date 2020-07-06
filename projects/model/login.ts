import {Role, Status} from './store-enum';

export interface Login {
  email: string;
  password: string;
  status: Status;
  role: Role;
}
