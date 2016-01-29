// class library

export class SmsSender {
    sendSms(phoneNumber: string, text: string): string {
        return `Inviato un SMS al numero ${phoneNumber} - Messaggio: ${text}`;
    }
}

export class TwitterSender {
    sendTweet(address: string, text: string): string {
        return `Inviato un tweet all'indirizzo ${address} - Messaggio: ${text}`;
    }
}

export class MessageSender {
    private address: string;
    private text: string;
    private sender: SmsSender;

    constructor(address: string, text: string) {
        this.address = address;
        this.text = text;
        this.sender = new SmsSender();
    }

    send():string {
      return this.sender.sendSms(this.address, this.text);
    }
}

// application

let button = $("#button");
button.click( function() {
  let address = $("#address").val();
  let message = $("#message").val();

  // shortMessageSender è un oggetto specializzato nell'inviare SMS  

  let sender = new MessageSender(address, message);
  let notify = sender.send();

  $("#notify").html(`<code>${notify}</code>`);

} );