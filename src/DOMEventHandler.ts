import EventHandler from './EventHandler';
import Eventhandler from './EventHandler';

export default class DOMEventhandler implements Eventhandler {

    addEventListenerToClass(clazz : string, event : string, fn : any){

        const elements : any = document.querySelectorAll(clazz);
        
        for(const element of elements){
            element.addEventListener(event, fn)
        }
        
    }
}