import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from "../models/user.interface";
import { UserModule } from "../actions/user.action";

export interface UserStateEntity extends EntityState<User> {
  loading: boolean;
  loaded: boolean;
  user: User;
  logs: {
    type: string;
    message: string;
  };
}

export const UserAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: false
});

export const initialState: UserStateEntity = UserAdapter.getInitialState({
  loading: false,
  loaded: false,
  user: undefined,
  logs: undefined
});

export const {
  selectIds: selectMatieresIds,
  selectEntities: selectMatieresEntities,
  selectAll: selectMatieres,
  selectTotal: selectTotalMatieres
} = MatiereListAdapter.getSelectors();

export function matieresReducer(
  state = initialState,
  action: MatiereListModule.Actions
): MatiereListStateEntity {

  switch (action.type) {

    case MatiereListModule.ActionTypes.LOAD_INIT_MATIERES:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case MatiereListModule.ActionTypes.SUCCESS_INIT_MATIERES:
      return {
        ...MatiereListAdapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case MatiereListModule.ActionTypes.LOAD_DELETE_MATIERE:
      return {
        ...state,
        loading: true
      };

    case MatiereListModule.ActionTypes.SUCCESS_DELETE_MATIERE:
      return {
        ...MatiereListAdapter.removeOne(action.payload, state),
        logs: { type: 'SUCCESS', message: 'La matiere a été supprimée avec succès' }
      };

    case MatiereListModule.ActionTypes.LOAD_CREATE_MATIERE:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case MatiereListModule.ActionTypes.SUCCESS_CREATE_MATIERE:
      // Passe le loading a false et ajoute une matiere
      return {
        ...MatiereListAdapter.addOne(action.payload, state),
        loading: false,
        logs: { type: 'SUCCESS', message: 'La matiere a été créée avec succès' },
      };

    case MatiereListModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

    default:
      return state;
  }
}