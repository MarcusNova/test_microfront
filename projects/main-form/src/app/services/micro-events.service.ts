import { Injectable } from "@angular/core";
import { fromEvent, map, Observable, Subscription } from "rxjs";

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

    public setUp(listEvent: string[], microfrontendList: string[]) {
        if (listEvent.length == 0) throw new Error("There must be at least one event to listen")
        if (microfrontendList.length == 0) throw new Error("Threre must be at least one microfrontend")
        this.setEvents(listEvent);
        this.setMicrofrontends(microfrontendList);
    }

    public flushEvents(route: string) {
        if (this.microfrontendList.includes(route)) {
            this.listEvents.forEach(event => {
                // const customEvent = new CustomEvent(event.id, event.data);
                // dispatchEvent(customEvent);
            })
        }
    }
   
    private setEvents(listenerList: string[]) {
        for (let i= 0; i < listenerList.length; i++) {
            const listenerRegister = fromEvent(window, listenerList[i])
            .pipe(
                map((data: any) => {
                    this.setData(data, i)
                    console.log(data);
                    
                })
            )
            .subscribe()
            this.listEvents.push({ listener: listenerRegister, data: null, id: listenerList[i]})
        }
    }
    private setMicrofrontends(list: string[]) {
        this.microfrontendList = [...list];
    }
    private setData(data: any, index: number) {
        if (data) {
            this.listEvents[index].data = data; 
        }
        
    }
}