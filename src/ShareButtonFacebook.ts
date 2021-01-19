import EventHandler from './EventHandler';
import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonFacebook extends AbstractShareButton {

    eventHandler: EventHandler

    constructor(clazz: string, url: string) {

        super(clazz, url);

        this.eventHandler = new EventHandler()
    }

    createLink(): string {

        return `https://www.facebook.com/sharer.php?u=${this.url}`;

    }
}