import { Injectable } from "@angular/core";
import { Ibehavior } from "./models/behavior.model";

@Injectable({
    providedIn: 'root'
})
export class BehaviorService {
    private behaviorsList: Ibehavior  = {};

    public setBehaviors(list: Ibehavior) {
        this.behaviorsList = {...list};
    }
    public dispatch(key: string, value: any) {
        this.behaviorsList[key].forEach(behavior => {
            behavior.next(value);
        })
    }
}
