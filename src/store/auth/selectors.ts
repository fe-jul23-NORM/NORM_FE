import { RootState } from '../index';
import { User } from '../../types/user.types';

export const selectUser = (state: RootState): User | null => state.auth.user;

export const selectAuthLoading = (state: RootState): boolean => state.auth.isLoading;
