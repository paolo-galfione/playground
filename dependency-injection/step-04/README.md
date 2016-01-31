# Esempio di dependency injection
In questo esempio aggiungiamo l'interfaccia ISender che definisce il metodo sendMessage che devono rispettare tutte le classi che si occupano di specializzare l'invio di un messaggio generico a un destinatario. Le classi SmsSender e TwitterSender devono perciò adeguare le proprie interfacce di accesso al contratto ISender a cui aderiscono.

La dependency injection è possibile grazie a una delle tre tecniche utilizzate: constructor, method e interface

Nell'esempio utiliziamo l'iniziezione nel costruttore, sia perché è la più usata, sia perché è la stessa che incontreremo in Angular 2
