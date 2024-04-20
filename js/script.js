const { createApp } = Vue;

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

    created() {
        const jsonToDo = localStorage.getItem("todoListKey");
        console.log(jsonToDo);
        if (jsonToDo != null) {
            const newArray = JSON.parse(jsonToDo);
            this.todoList = [...newArray];
        }
    },

    methods: {
        addTask() {
            if (this.newTask.text === "") return;
            console.log({ ...this.newTask });

            this.todoList.push({ ...this.newTask });
            this.newTask.text = "";
            this.newTask.category = "";

            this.saveToDo();
        },

        doneNotDone(index) {
            this.todoList[index].done = !this.todoList[index].done;
            // se è stata fatta crea una copia, lo cancella dall'array e inserisce la copia all'ultimo posto
            if (this.todoList[index].done) {
                const lastTask = { ...this.todoList[index] }
                this.todoList.splice(index, 1);
                this.todoList.push(lastTask);
            }
            this.saveToDo();
        },

        deleteElement(index) {
            this.todoList.splice(index, 1);
            this.saveToDo();
        },

        saveToDo() {
            const jsonToDo = JSON.stringify(this.todoList);
            console.log(jsonToDo);
            localStorage.setItem("todoListKey", jsonToDo);
        },

        moveDown(index) {
            const newArray = [];

            let i = 0;
                while (i < this.todoList.length) {
                    if (i === index) {
                        newArray.push(this.todoList[i + 1]);
                        newArray.push(this.todoList[i]);
                        console.log(i);
                        i++;
                        console.log(i);
                    } else {
                        newArray.push(this.todoList[i]);
                    }
                    i++;
                }
                this.todoList = [...newArray];
                this.saveToDo();

        },

        moveUp(index) {
            const newArray = [];

            let i = 0;

            while (i < this.todoList.length) {
                if(i === index - 1) {
                    newArray.push(this.todoList[index]);
                    newArray.push(this.todoList[i]);
                    i++;

                } else {
                    newArray.push(this.todoList[i]);
                }

                i++;

            }

            this.todoList = [...newArray];
            this.saveToDo();


        }
    }
}).mount("#app")