new Vue({
    //connection to dev with id #vue-app
    el: "#vue-app",
    data: {
        name: "shaun",
        job: 'Ninja'
    },
    methods: {
        greet: function(time){
            //this.data.name ❌
            //this.name 👍
            return `Good ${time} ${this.name}`
        }
    }

})