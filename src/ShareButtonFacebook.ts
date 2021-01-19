import EventHandler from './EventHandler';
import AbstractLinkShareButton from './AbstractLinkShareButton ';

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    eventHandler: EventHandler

    constructor(clazz: string, url: string) {

        super(clazz, url);

        this.eventHandler = new EventHandler()
    }

    createLink(): string {

        return `https://www.facebook.com/sharer.php?u=${this.url}`;

    }
}