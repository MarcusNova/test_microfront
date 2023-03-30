import { Injectable } from "@angular/core";
import { MicroEvents } from "shared/micro-events/src/micro-events";
@Injectable({
    providedIn: 'root'
})
export class MicroEventService {
    public on: MicroEvents | undefined;

    constructor() {
        this.on = new MicroEvents();
    }
}