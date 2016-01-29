# Esempio moduli di alto livello e moduli di basso livello
Rendiamo ora la classe ShortMessageSender più generica e in grado di delegare a moduli di basso livello (providers) l'invio effettivo dei messaggi a seconda della tipologia di canale utilizzzato. Nell'esempio vengono implementati i providers per Sms e Twitter ma ovviamente i providers potrebbero essere estesi a mail, printer, etc..
Nell'implementazione vediamo il classico approccio in cui la classe di alto livello istanzia gli oggetti di basso livello, ne conosce quindi i comportamenti e ne deriva una dipendenza vincolante.
In questo scenario sono gli oggetti di basso livello a definire i propri comportamenti e dettagli ed è la classe di alto livello che li consuma a dover rispettare tali vincoli.
