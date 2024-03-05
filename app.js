new Vue({
  el: "#app-vue",
  data: {
    name: "",
    age: ""
  },
  methods: {
    logName: function(event) {
      console.log("you enter name")
    },
    logAge: function(event) {
      console.log("you enter age")
    }
  }
});
