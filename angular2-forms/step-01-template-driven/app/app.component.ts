import {Component} from "angular2/core";
import { IMessage } from "./i-message";
import { Message } from "./message";

@Component({
	selector: "uno-app",
	templateUrl: "app/app.template.html"
})

export class AppComponent {
    vm: IMessage;
    results: string;

    constructor() {
        this.vm = new Message();
        this.vm.address = "348123456";
        this.vm.message = "Hello SMS!";
    }

    onSubmitTemplateBased() : void {
        this.results = JSON.stringify(this.vm);
    }
    
    setMessage() : void {
        this.vm.message = "Two way binding example";
    }
 }