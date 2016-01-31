#Angular 2 Forms

## Step 01 - Template driven
In questo esempio viene analizzato un approccio alla gestione dei form molto simile a quello presente in AngularJs. In questo scenario la struttura del form è definita dal template in cui sono collegate (binding) le proprietà del model

## Step 02 - Model driven implicito
Con Angular 2 appare una struttura tra il template e il model che è la struttura dei controlli che compongono il form. QUesto approccio permette di svincolare la struttura dei controlli dal form e di renderla quindi più testabile e meno soggetta ai problemi legati alla manutenzione e alla modifica dei template. L'approccio implicito però è una via di mezzo tra step 01 e i due che seguono perché la struttura dei controlli viene creata dinamicamente sulla base delle dichiarazioni del template

I primi due step sono ben illustrati da [questo interessante articolo](http://blog.jhades.org/introduction-to-angular-2-forms-template-driven-vs-model-driven/)

## Step 03 - Model driven esplicito - programmatico
In questo esempio vediamo come è possibile dichiarare i Control e i ControlGroup come instanze di classe e collegarli tra di loro e al template. Questo approccio è molto potente e permette di svincolare in modo esplicito la struttura del template da quella dei controlli del form, è però anche molto dispendioso in termini di scrittura di codice

## Step 04 - Model driven esplicito - dichiarativo
Grazuie a FormBuilder è possibile avere tutti i vantaggi visti nello step 04 potendo nel contempo definire il modello del form in maniera dichiarativa sotto forma di gerarchia di oggetti

 