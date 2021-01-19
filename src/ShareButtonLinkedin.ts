import EventHandler from './DOMEventHandler';
import AbstractLinkShareButton from './AbstractLinkShareButton ';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

    eventHandler: EventHandler

    constructor(eventHandler : EventHandler, clazz: string, url: string) {

        super(eventHandler,clazz, url);

        this.eventHandler = new EventHandler()
    }

    createLink(): string {

        return `https://www.linkedin.com/shareArticle?url=${this.url}`;

    }
}