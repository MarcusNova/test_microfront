declare module 'toDoList/Behavior' {
    import { BehaviorSubject } from "rxjs";

    const toDoBehavior: BehaviorSubject<string>

    export default toDoBehavior;
}