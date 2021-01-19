import EventHandler from './DOMEventHandler';
import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonPrint extends AbstractShareButton {

    eventHandler: EventHandler

    constructor(eventHandler: EventHandler,clazz: string) {

        super(eventHandler,clazz);

        this.eventHandler = new EventHandler()
    }

    createAction() {

        return () => window.print();

    }
}