import EventHandler from './EventHandler';
import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonTwitter extends AbstractShareButton {

    eventHandler: EventHandler

    constructor(clazz: string, url: string) {

        super(clazz, url);

        this.eventHandler = new EventHandler()
    }

    createLink(): string {

        return `https://www.twitter.com/share?url=${this.url}`;

    }
}