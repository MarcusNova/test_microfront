import { createAction, props } from "@ngrx/store";


export const setName = createAction('[Navbar page] set the name of the user', props<{ payload: string}>()) 