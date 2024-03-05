new Vue({
  el: "#app-vue",
  data: {
    available: true,
    nearby: false
  },
  methods: {
    
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})