import { createFeatureSelector, createSelector } from "@ngrx/store";
import { navbarFeaturekey, NavbarState } from "./navbar.reducer";

export const selectFeature = createFeatureSelector<NavbarState>(navbarFeaturekey);

export const selectName = createSelector(
    selectFeature,
    (state) => {
        return {
            name: state.name
        }
    }
)