
import  behavior from 'navbar/navbarBehavior';
import toDoBehavior from "toDoList/Behavior";
import { Ibehavior } from '../models/behavior.model';

export const behaviorList: Ibehavior = {
    'name': [
        behavior,
        toDoBehavior
    ]
}