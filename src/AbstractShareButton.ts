import Eventhandler from './EventHandler';


export default abstract class AbstractShareButton {

    clazz: string;
    eventHandler: Eventhandler;

    constructor(eventHandler : Eventhandler,  clazz: string) {

        this.clazz = clazz;
        this.eventHandler = eventHandler;
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action)
    }
}