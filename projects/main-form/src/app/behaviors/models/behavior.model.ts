import { BehaviorSubject } from "rxjs";

export interface Ibehavior {
    [key: string] : Array<BehaviorSubject<any>> 
}
