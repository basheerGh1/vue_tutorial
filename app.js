new Vue({
  el: "#app-vue",
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {

  },
  computed: {
    addToA: function() {
      console.log("A runs")
      return this.a + this.age
     },
     addToB: function() {
      console.log("B runs")
       return this.b + this.age
     },
  }
})



// methods: {
//   addToA: function() {
//    return this.a + this.age
//   },
//   addToB: function() {
//     return this.b + this.age
//   },
// }

// when click on add a button the two method addToA() and addToB() runs
// to avoid this behavior we going to we computed