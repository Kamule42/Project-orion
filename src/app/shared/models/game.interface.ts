import { User } from './user.interface';
import { GameVisibility as Visibility}  from '../enums';
export interface MinimalGame{
  id:string;
  name:string;
  size:number;
  visibility:
}

export interface Game extends MinimalGame{
  members: Array<User>
}