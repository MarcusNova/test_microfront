
type OnSubscribe = (payload: any) => void 
type persistentEvent = { eventName: string, detail: any }

export class MicroEvents {
    private persistentEvents: persistentEvent[] = [];

    constructor() {}

    public publish(name: string, detail: any) {        
        if (!name) throw new Error('Event name cannot be empty')
        if (this.isEmpty(detail)) throw new Error('Detail cannot be empty')
        this.checkPersistentEvents(name, detail);
        const customEvent = new CustomEvent(name, { detail });
        console.log(this.persistentEvents);
        
        window.dispatchEvent(customEvent);        
    }
    public subscribe(name: string, callback: OnSubscribe) {
        if (!name) throw new Error('Event subscription name cannot be empty')
        window.addEventListener(name, callback);
    }
    public setPersistentEvents(eventList: string[]): void {
        if (eventList.length == 0) throw new Error('Persistent event list must has at least one event')
        this.persistentEvents = eventList.map( event => { return { eventName: event, detail: '' } });
    }
    public flushPersistentEvents() {
        if (this.persistentEvents.length == 0) return
        this.persistentEvents.forEach(event => this.flushPublish(event))
    }
    private flushPublish(event: persistentEvent) {
        const customEvent = new CustomEvent(event.eventName, event.detail);
        window.dispatchEvent(customEvent);
    }
    private isEmpty<T extends Object>(object: T) {
        return Object.keys(object).length > 0 ? false : true;
    }
    private checkPersistentEvents(name: string, detail: any) {
        const flagEvent = { eventName: name, detail: '' };
        const eventChecked = this.checkDetail(flagEvent);
        // if (eventChecked) {
        //     const index = this.persistentEvents.findIndex(e => e.eventName == name);
        //     this.persistentEvents[index] = { eventName: this.persistentEvents[index].eventName, detail }
        // }
    }
    private checkDetail(event: persistentEvent) {

    }
    // private checkInclude(event: persistentEvent) {
    //     const include = this.persistentEvents.some(e => {
    //         return JSON.stringify(e) == JSON.stringify(event)
    //     });
    //     return include;
    // }
}