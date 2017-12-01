var vm = new Vue({
  el: "#app",
  data: {
    boxes: [
      { image: 'images/box.png', disabled: false },
      { image: 'images/box.png', disabled: false },
      { image: 'images/box.png', disabled: false }
    ],
    images: [
      'images/cobra.png',
      'images/coin.png',
      'images/empty.png'
    ],
    pushed: false
  },
  methods: {
    open: function(index) {
      if (this.pushed) {return}
      this.pushed = true;
      for (var i = 0; i < this.boxes.length; i++) {
        this.boxes[i].disabled = true;
        this.boxes[i].image = this.images[Math.floor(Math.random() * this.images.length)];
      }
      this.boxes[index].disabled = false;

    }
  }
})
