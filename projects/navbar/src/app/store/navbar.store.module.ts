import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { navbarFeaturekey, navbarReducer } from "./navbar.reducer";


@NgModule({
    imports: [
        StoreModule.forFeature(navbarFeaturekey, navbarReducer)
    ]
})
export class NavbarStoreModule {}