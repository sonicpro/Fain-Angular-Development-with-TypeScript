import {Observable, BehaviorSubject} from "rxjs";
import {Injectable} from '@angular/core';

// StateService. Serves as a mediator for communicating the components that do not have common parent nor rendered at the same time.
@Injectable()
export class StateService{

  // This class is built around rxjs.BehaviourSubject. The advantage of this is that when the user navigates to either eBay or Amazon component, their
  // SearchComponent child is rendered causing StateService to re-emit the last emitted state (aka "search string" in this demo).
  private stateSubject: BehaviorSubject<string> = new BehaviorSubject('');

  // Is invoked from SearchComponent.
  set searchCriteria(value: string) {

    this.stateSubject.next(value);  // emitting the value. Its subscribers ("AmazonComponent" and "EbayComponent") use getState() public method to subscribe.

  }

  // We can name this method as "get searchCriteria()", but use "getState" name to emphasize that this component preserves part of the app state.
  getState(): Observable<string>{
    return this.stateSubject.asObservable();  // to prevent subscribers from using next()
  }
}
