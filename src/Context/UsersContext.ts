import React, { createContext } from "react";
import { IUsers } from "../common/InitObject";


export const UsersContext = createContext<MyContextType | undefined>(undefined);

type MyContextType = {
  member: IUsers;
};
