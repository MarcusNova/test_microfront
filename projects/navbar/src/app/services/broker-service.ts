import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class Broker {
    private subscribers: { [key: string]: ((payload: any) => void)[] } = {};
  
    constructor() {}
  
    public subscribe(eventType: string, subscriber: any): void {
      if (!this.subscribers[eventType]) {
        this.subscribers[eventType] = [];
      }
      console.log(this.subscribers);
      
      this.subscribers[eventType].push(subscriber);
    }
  
    public publish(eventType: string, data: any): void {
      console.log(this.subscribers);
      
      const subscribers = this.subscribers[eventType] || [];
      subscribers.forEach((subscriber) => subscriber(data));
    }
  }