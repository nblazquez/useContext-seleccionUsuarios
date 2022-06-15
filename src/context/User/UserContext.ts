import { createContext } from "react";
import { Usuario } from "../types";

type UserContextProps = {
    users: Usuario[],
    selectedUser: Usuario,
    getUsers: Function,
    getProfile: Function
};

export const UserContext = createContext({} as UserContextProps);