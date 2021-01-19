export default class Eventhandler{

    addEventListenerToClass(clazz : string, event : string, fn : any){

        const elements : any = document.querySelectorAll(clazz);
        
        for(const element of elements){
            element.addEventListener("click", fn)
        }
        
    }
}