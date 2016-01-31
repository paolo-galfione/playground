// class library
interface ISender {
    sendMessage(address: string, text: string): string;
}

export class SmsSender implements IPublisher {
    sendMessage(address: string, text: string): string {
        return `Inviato un SMS al numero ${address} - Messaggio: ${text}`;
    }
}

export class TwitterSender implements IPublisher {
    sendMessage(address: string, text: string): string {
        return `Inviato un Tweet all'indirizzo ${address} - Messaggio: ${text}`;
    }
}

export class MessageSender {
    private address: string;
    private text: string;
    private sender: IPublisher;

    constructor (sender: IPublisher, address: string, text: string) {
        this.address = address;
        this.text = text;
        this.sender = sender;
    }

    send(): string {
        return this.sender.sendMessage(this.address, this.text);
    }
}

// application

let button = $("#button");
button.click(function() {

    // inizializzo l'Injector
    let injector: { [key: string]: IPublisher } =  {};
    injector["SMS"] = new SmsSender();
    injector["TWEET"] = new TwitterSender();

    let type = $("#type").val();
    let address = $("#address").val();
    let message = $("#message").val();

    // shortMessageSender è un oggetto specializzato nell'inviare SMS  
    if(!type) {
        alert("selezionare il tipo di invio da 'Invia come:'");
        return;
    }
    // passo l'oggetto per nome all'injector che mi restituisce l'instanza
    let sender = new MessageSender(injector[type], address, message);
    let notify = sender.send();

    $("#notify").html(`<code>${notify}</code>`);

});