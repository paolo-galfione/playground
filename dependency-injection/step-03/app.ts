// class library

export class SmsSender {
    sendSms(phoneNumber: string, text: string): string {
        return `Inviato un SMS al numero ${phoneNumber} - Messaggio: ${text}`;
    }
}

export class TwitterSender {
    sendTweet(address: string, text: string): string {
        return `Inviato un Tweet all'indirizzo ${address} - Messaggio: ${text}`;
    }
}

export class MessageSender {
    private address: string;
    private text: string;
    private type: string;

    constructor(type: string, address: string, text: string) {
        this.address = address;
        this.text = text;
        this.type = type;
    }

    send(): string {
        if(this.type === "SMS") {
            let sender = new SmsSender();
            return sender.sendSms(this.address, this.text);
        }
        if(this.type === "TWEET") {
            let sender = new TwitterSender();
            return sender.sendTweet(this.address, this.text);
        }
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
    let sender = new MessageSender(type, address, message);
    let notify = sender.send();

    $("#notify").html(`<code>${notify}</code>`);

});