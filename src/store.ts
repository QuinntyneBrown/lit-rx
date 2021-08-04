import { Observable, Observer } from "rxjs";
import { Action } from "./action";

export class Store<T = object>  extends Observable<T> implements Observer<Action> {
    constructor() {
        super();
    }

    next(value: Action) {
        
    }

    error(err: any) {
        
    };

    complete() {
        
    };
}
