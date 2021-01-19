import Eventhandler from './DOMEventHandler';
import AbstractShareButton from './AbstractShareButton';

export default abstract class AbstractLinkShareButton extends AbstractShareButton{

    clazz: string;
    url: string;
    eventHandler : Eventhandler;

    constructor(eventHandler : Eventhandler, clazz : string, url : string){
        super(eventHandler,clazz)
        this.clazz = clazz;
        this.url = url;
        this.eventHandler = new Eventhandler();
    }

    abstract createLink() : string;

    createAction() : any{
        const link = this.createLink();
        return () => window.open(link);
    }

}