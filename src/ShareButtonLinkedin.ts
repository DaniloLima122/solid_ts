import EventHandler from './EventHandler';
import AbstractLinkShareButton from './AbstractLinkShareButton ';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

    eventHandler: EventHandler

    constructor(clazz: string, url: string) {

        super(clazz, url);

        this.eventHandler = new EventHandler()
    }

    createLink(): string {

        return `https://www.linkedin.com/shareArticle?url=${this.url}`;

    }
}