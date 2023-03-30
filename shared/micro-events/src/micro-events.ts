interface Event {
  event: CustomEvent,
  id: string
}
interface microfrontend {
  name: string,
  loaded: boolean
}

export class MicroEvents {
  private eventList: Event[] = [];
  private microfrontendList: microfrontend[] = [];

  public publish(eventName: string, data: any) {
    if (!this.checkEvents(eventName, data)) {
      const customEvent = { event: new CustomEvent(eventName, data), id: eventName };
      this.eventList.push(customEvent);
      window.dispatchEvent(customEvent.event);
    } else {
      this.flush(eventName);
    }    
    console.log(this.eventList);
  }
  public subscribe(eventName: string, callback: ((payload: any) => void)) {
    const isListenerAdded = window.dispatchEvent(new CustomEvent(eventName));
    if (!isListenerAdded) {
      // Si ya existe, no es necesario agregar el listener de nuevo
      return;
    }
    console.log(this.eventList);
    
    window.addEventListener(eventName, callback); 
  }
  public setMicrofrontends(list: microfrontend[]) {
    this.microfrontendList = [...list];
  }
  public flushEvents(route: string) {
    if (this.checkMicrofrontends(route)) { 
      this.eventList.forEach(eventRegister => {
        window.dispatchEvent(eventRegister.event); 
      })
    }
  }
  private checkMicrofrontends(route: string) {
    let include = false;
    for (let index = 0; index < this.microfrontendList.length; index++) {
      if (this.microfrontendList[index].name == route && !this.microfrontendList[index].loaded) {
        this.microfrontendList[index].loaded = true;
        include = true;
        break;
      }      
    }
    return include;
  }

  private checkEvents(eventName: string, detail: any) {
    let include = false;
    for (let index = 0; index < this.eventList.length; index++) {
      const eventRegister = this.eventList[index];
      if (eventRegister.id == eventName && eventRegister.event.detail != detail) {
        this.eventList[index].event = new CustomEvent(eventName, detail);
        include = true;
        break;
      }      
    }
    return include;
  }

  private flush(eventName: string) {
    this.eventList.forEach(eventRegister => {
        if (eventRegister.id == eventName) {
          window.dispatchEvent(eventRegister.event)
        }
    });
  }

}