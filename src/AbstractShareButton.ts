import Eventhandler from './EventHandler';

export default abstract class AbstractShareButton{

    clazz: string;
    url: string;
    eventHandler : Eventhandler;

    constructor(clazz : string, url : string){

        this.clazz = clazz;
        this.url = url;
        this.eventHandler = new Eventhandler();
    }

    abstract createLink() : string;

    bind(){
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.clazz,"click",() => window.open(link))
    }
}