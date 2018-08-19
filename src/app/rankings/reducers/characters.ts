import {Character} from '../models/character';
import {CharactersParams} from '../models/characters-params';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';
export const FILTER_CHARACTERS = 'FILTER_CHARACTERS';
export const SET_CHARACTERS = 'SET_CHARACTERS';

export interface State {
  characters: Character[],
  params: CharactersParams
}
