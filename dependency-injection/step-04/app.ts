// class library
interface ISender {
    sendMessage(address: string, text: string): string;
}

export class SmsSender implements ISender {
    sendMessage(address: string, text: string): string {
        return `Inviato un SMS al numero ${address} - Messaggio: ${text}`;
    }
}

export class TwitterSender implements ISender {
    sendMessage(address: string, text: string): string {
        return `Inviato un Tweet all'indirizzo ${address} - Messaggio: ${text}`;
    }
}

export class MessageSender {
    private address: string;
    private text: string;
    private sender: ISender;

    constructor (sender: ISender, address: string, text: string) {
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
    let type = $("#type").val();
    let address = $("#address").val();
    let message = $("#message").val();

    // shortMessageSender è un oggetto specializzato nell'inviare SMS  
    if(!type) {
        alert("selezionare il tipo di invio da 'Invia come:'");
        return;
    }
    let publisher: ISender = type === "SMS" ? new SmsSender() : new TwitterSender();
    let sender = new MessageSender(publisher, address, message);
    let notify = sender.send();

    $("#notify").html(`<code>${notify}</code>`);

});