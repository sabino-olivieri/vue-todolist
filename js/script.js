const {createApp} = Vue;

createApp({
    data() {
        return {
            
            todoList: [
                {
                    text: "Quarterly Newsletter",
                    done: true,
                    category: "Editorial"
                }
            ]

        }
    },
    methods: {

    }
}).mount("#app")