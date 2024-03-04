new Vue({
    //connection to dev with id #vue-app
    el: "#vue-app",
    data: {
        name: "shaun",
        job: 'Ninja',
        website: "https://app.diagrams.net/",
        el: `<a href="https://app.diagrams.net/" target="_blank">Visit us</a>`
    },
    methods: {
        greet: function(time){
            //this.data.name ❌
            //this.name 👍
            return `Good ${time} ${this.name}`
        }
    }

})