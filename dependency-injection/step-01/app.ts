// class library

export class ShortMessageSender {
    private address: string;
    private text: string;

    constructor(address: string, text: string) {
        this.address = address;
        this.text = text;
    }

    send():string {
      return `Inviato un SMS al numero ${this.address} - Messaggio: ${this.text}`;
    }
}

// application

let button = $("#button");
button.click( function() {
  let address = $("#address").val();
  let message = $("#message").val();

  // shortMessageSender è un oggetto specializzato nell'inviare SMS  

  let sender = new ShortMessageSender(address, message);
  let notify = sender.send();

  $("#notify").html(`<code>${notify}</code>`);

} );