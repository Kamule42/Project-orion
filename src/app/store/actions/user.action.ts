import { User } from '../models/user.interface';

export namespace UserModule {
  export enum ActionTypes  {
    SIGN_UP           = '[User Component] Sign up',
    SIGN_IN           = '[User Component] Sign in',
    SIGN_OUT          = '[User Component] Sign out',
    USERNAME_DEFINE  = '[User Component] Username define',
  }
   export  class  UserSignedUp {
    readonly  type = ActionTypes.SIGN_UP;
    constructor(public user: User) {}
  }

  export  class  UserSignedIn {
    readonly  type = ActionTypes.SIGN_IN;
    constructor(public user: User) {}
  }

  export class UserSignedOut {
    readonly type = ActionTypes.SIGN_OUT;
  }

  export class UsernameDefined {
    readonly type = ActionTypes.USERNAME_DEFINE;
    constructor(public username: String) {}
  }

  

  export type Actions = UserSignedUp | UserSignedIn |  UserSignedOut
    | UsernameDefined;
}