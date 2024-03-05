new Vue({
  el: "#app-vue",
  data: {
    name: "",
    age: ""
  },
  methods: {
    logName: function() {
      console.log("you enter name")
    },
    logAge: function() {
      console.log("you enter age")
    }
  }
});
