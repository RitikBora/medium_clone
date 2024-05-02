import { atom } from "recoil";

export interface UserState{
  isLoading : boolean  
  name : string | null
}


const userAtom = atom<UserState>({
    key : "userAtomKey",
    default : {
        isLoading : true,
        name : null,
    }
})

export {userAtom};