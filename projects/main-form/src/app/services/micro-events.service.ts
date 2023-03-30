import { Injectable } from "@angular/core";
import { fromEvent, map, Observable, Subscription } from "rxjs";
import { MicroEvents } from "shared/micro-events/src/micro-events";
import { Broker } from "./broker-service";

interface event {
    listener: Subscription,
    data: any, 
    id: string
}

@Injectable({
    providedIn: 'root'
})
export class MicroEventService {
    private listEvents: event[] = [];
    private microfrontendList: string[] = [];
    
    public setEvents(listenerList: string[]) {
        for (let i= 0; i < listenerList.length; i++) {
            const listenerRegister = fromEvent(window, listenerList[i])
            .pipe(
                map((data: any) => {
                    this.setData(data, i)
                })
            )
            .subscribe()
            this.listEvents.push({ listener: listenerRegister, data: null, id: listenerList[i]})
        }
    }
    public flushEvents(route: string) {
        if (this.microfrontendList.includes(route)) {
            this.listEvents.forEach(event => {
                const customEvent = new CustomEvent(event.id, event.data);
                dispatchEvent(customEvent);
            })
        }
    }
    public setMicrofrontends(list: string[]) {
        this.microfrontendList = [...list];
    }
    private setData(data: any, index: number) {
        if (data) {
            this.listEvents[index].data = data; 
        }
        
    }
}