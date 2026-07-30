import {create} from "zustand";

export const useAppStore=create((set)=>({

sidebar:true,

theme:"dark",

activeModule:"dashboard",

toggleSidebar:()=>set(state=>({sidebar:!state.sidebar})),

setModule:(module)=>set({activeModule:module})

}));
