declare module 'navbar/navbarComponents';
declare module 'navbar/navbarBehavior' {
    import { BehaviorSubject } from "rxjs";

    const behavior: BehaviorSubject<string>

    export default behavior;
}