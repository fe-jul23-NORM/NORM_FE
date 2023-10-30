import { User } from "../../types/user.types";

export interface AuthState {
    isLoading: boolean,
    user: User | null;
}
