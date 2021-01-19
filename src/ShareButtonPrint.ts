import EventHandler from './EventHandler';
import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonPrint extends AbstractShareButton {

    eventHandler: EventHandler

    constructor(clazz: string) {

        super(clazz);

        this.eventHandler = new EventHandler()
    }

    createAction() {

        return () => window.print();

    }
}