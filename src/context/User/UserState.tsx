import { useReducer } from "react";
import { Estado, Usuario } from "../types";
import { UserContext } from "./UserContext";
import { UserReducer } from "./UserReducer";
import axios from "axios";

interface UserStateProps {
  children: JSX.Element | JSX.Element[];
}

export const UserState = ({ children }: UserStateProps) => {
  /*Datos y métodos que queremos que sean comunes a todos los componentes*/

  const initialState: Estado = {
    users: [],
    selectedUser: {} as Usuario,
  };

  //Un Reducer te permite guardar varias funciones que se ejecutarán en función
  //del parámetro que se le pase con dispatch.
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //Obtiene array de usuarios
  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    console.log(res.data.data);
    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
  };

  //Obtiene un usuario
  const getProfile = async (id: number) => {
    const res = await axios.get("https://reqres.in/api/users/" + id);
    console.log(res.data.data);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.data,
    });
  };

  return (
    //Pasar con value a qué se tendrá acceso
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers: getUsers,
        getProfile: getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
