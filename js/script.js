const {createApp} = Vue;

createApp({
    data() {
        return {

            newTask: {
                text: "",
                done: false,
                category: "",
            },
            
            todoList: []

        }
    },
    methods: {
        addTask() {
            if(this.newTask.text ===  "") return;
            console.log({...this.newTask});

            this.todoList.push({...this.newTask});

        },

        doneNotDone(index) {
            this.todoList[index].done = !this.todoList[index].done;
            // se è stata fatta crea una copia, lo cancella dall'array e inserisce la copia all'ultimo posto
            if(this.todoList[index].done){
                const lastTask = {...this.todoList[index]}
                this.todoList.splice(index, 1)
                this.todoList.push(lastTask);
            }
        }
    }
}).mount("#app")