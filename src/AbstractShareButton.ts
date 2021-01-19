import Eventhandler from './EventHandler';

export default abstract class AbstractShareButton {

    clazz: string;
    eventHandler: Eventhandler;

    constructor(clazz: string) {

        this.clazz = clazz;
        this.eventHandler = new Eventhandler();
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action)
    }
}