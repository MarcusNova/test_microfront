import { createReducer, on, Action, ActionReducer } from "@ngrx/store/src"
import { setName } from "./navbar.actions"


export interface NavbarState {
    name: string
}

export const initialStateNaBar: NavbarState = {
    name: 'juan'
}

export const navBar: ActionReducer<NavbarState, Action> = createReducer(
    initialStateNaBar,
    on(setName, (state, action) => {
        return {
            ...state,
            name: action.payload
        }
    })
)
export function navbarReducer(state: NavbarState | undefined, action: Action) {
    return navBar(state, action)
}

export const navbarFeaturekey = 'navbarFeatureState'