# Vue To Do List

## Testo della consegna
Implementiamo una todolist.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista (cercate nella documentazione l'evento che vi serve per questo bonus)
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente ed eventuale icona (se done era uguale a false, impostare true e viceversa)
3- visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista
4- implementare la persistenza di dati tramite local storage, quindi all'avvio dell'applicazione prendere i dati salvati per renderizzarli in pagina e ad ogni cambiamento aggiornare i dati salvati.