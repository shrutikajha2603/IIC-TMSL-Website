document.body.onload = generate;

   function generate() {

      let root = document.documentElement;

      var colors = [

      '#ff0073', '#00eaff', '#ffd240'

   ],

   total = 20,

   space = parseInt(window.innerWidth / total);

   

   for (let i=0; i<total; i++) {

      let dot = document.createElement('div');

      let ind = parseInt(random(colors.length,0));

      dot.className = 'dots';

      dot.style.background = colors[ind];

      dot.style.boxShadow = '0 0 1vw 0.2vw ' + colors[ind];

      dot.style.left = space * i + 'px';

      dot.style.animationDelay = random(5, 0.2) + 's';

      dot.style.animationDuration = random(10, 3) + 's';

      document.body.appendChild(dot);

   }

   }

   function random(max, min) {

      return Math.random() * (max - min + 1) + min;

   }