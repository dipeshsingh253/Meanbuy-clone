let cars = [
  {
    image_url: "https://d64lkarmo2mrq.cloudfront.net/img/home/freedom2222.webp",
  },

  {
    image_url:
      "https://d64lkarmo2mrq.cloudfront.net/img/home/bluetooth2022.webp",
  },

  {
    image_url:
      "https://d64lkarmo2mrq.cloudfront.net/img/home/womenswatches2022.webp",
  },

  {
    image_url: "https://d64lkarmo2mrq.cloudfront.net/img/home/nordic2022.webp",
  },
];

localStorage.setItem("images", JSON.stringify(cars));

images = JSON.parse(localStorage.getItem("images"));
// console.log(images)
container = document.getElementById("slideshow");
i = 0;

setInterval(function () {
  if (i === cars.length) {
    i = 0;
  }
  let img = document.createElement("img");
  img.src = images[i].image_url;
  // console.log(images[i].image_url)
  container.innerHTML = null;
  container.append(img);
  i++;
}, 2000);

let flashdata = [
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Zeblaze Stratos 2 Smartwatch",
    price: "1,099.99",
    save: "4.5/5",
    wasPrice: "1,999.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "IWO W17 Smartwatch",
    price: "59.99",
    save: "4.6/5",
    wasPrice: "89.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzY4XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "LOKMAT Attack Smart Watch",
    price: "259.99",
    save: "4.5/5",
    wasPrice: "899.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Xiaomi Mi Monitor Light Bar",
    price: "34.99",
    save: "4.2/5",
    wasPrice: "69.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM4XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Xiaomi Mi Smart Scale 2",
    price: "149.99",
    save: "4.3/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQwXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Xiaomi Mi Home Thermometer Sensor",
    price: "89.99",
    save: "4.5/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Xiaomi Mi Smart Anibacterial Humidifier",
    price: "22.99",
    save: "4.1/5",
    wasPrice: "wasPrice 39.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3NjYyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "SoundPeats 3 SE Earbuds",
    price: "19.99",
    save: "4.7/5",
    wasPrice: "wasPrice 29.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3NDMzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "DACOM LO5 Bluetooth",
    price: "79.99",
    save: "4.8/5",
    wasPrice: "wasPrice 179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3NDE4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Bone Conduction Earphone",
    price: "204.99",
    save: "4.1/5",
    wasPrice: "wasPrice 349.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3NDE0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "HAVIT TWS Earbuds",
    price: "89.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3NDEyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "SYLLABLE D15 Earbuds",
    price: "1,099.99",
    save: "4.5/5",
    wasPrice: "1,999.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "TICWRIS Max 4G Smart Watch",
    price: "79.99",
    save: "4.0/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjEwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "KOSPET Raptor Smartwatch",
    price: "79.99",
    save: "4.1/5",
    wasPrice: "104.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMxXC9XaGl0ZV9uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Wireless Laser Keyboard",
    price: "68.49",
    save: "4.0/5",
    wasPrice: "92.49",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTk5XC9SZWRfbl8xX0JsdWV0b290aFNwZWFrZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Iron Man Bluetooth Speaker",
    price: "329.99",
    save: "4.5/5",
    wasPrice: "516.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ2XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Wireless Gamepad for Xbox",
    price: "59.99",
    save: "4.6/5",
    wasPrice: "89.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTYxXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "F6 Wireless Earphone",
    price: "259.99",
    save: "4.5/5",
    wasPrice: "899.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Soundpeats Wireless Earphones",
    price: "34.99",
    save: "4.2/5",
    wasPrice: "69.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Haylou GT2S Earbuds",
    price: "149.99",
    save: "4.3/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjQ5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Q9S TWS Earphones",
    price: "89.99",
    save: "4.5/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "3 Time Zones Wristwatch",
    price: "22.99",
    save: "4.1/5",
    wasPrice: "wasPrice 39.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "SKMEI Digital Watch",
    price: "19.99",
    save: "4.7/5",
    wasPrice: "wasPrice 29.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODIzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Y3 Headset With Wristband",
    price: "79.99",
    save: "4.8/5",
    wasPrice: "wasPrice 179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNzg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Starking Steel Watch",
    price: "204.99",
    save: "4.1/5",
    wasPrice: "wasPrice 349.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNzU1XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Wireless Earhook Earphones",
    price: "89.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjg5XC9Db2ZmZWVfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Wooden Quartz Watch",
    price: "1,099.99",
    save: "4.5/5",
    wasPrice: "1,999.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjgzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Silicon Digital Watch",
    price: "79.99",
    save: "4.0/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjE2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Mens Luxury Quartz Watch",
    price: "89.99",
    save: "4.2/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjA5XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Men Sports Digital Watch",
    price: "79.99",
    save: "4.1/5",
    wasPrice: "104.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMzIzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Combo GIft Set-Wallet",
    price: "68.49",
    save: "4.0/5",
    wasPrice: "92.49",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Dual Movement Quartz Watch",
    price: "329.99",
    save: "4.5/5",
    wasPrice: "516.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk1XC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Leather Sport Quartz Watch",
    price: "59.99",
    save: "4.6/5",
    wasPrice: "89.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDkzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Deluxe Quartz Watch",
    price: "259.99",
    save: "4.5/5",
    wasPrice: "899.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Dual Movt Quartz Wristwatch",
    price: "34.99",
    save: "4.2/5",
    wasPrice: "69.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Multi-Function Leather Watch",
    price: "149.99",
    save: "4.3/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDg0XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Ultra-thin Steel Belt Watch",
    price: "89.99",
    save: "4.5/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDU2XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Leather Belt Quartz Watch",
    price: "22.99",
    save: "4.1/5",
    wasPrice: "wasPrice 39.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDY1XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Skull Watch",
    price: "19.99",
    save: "4.7/5",
    wasPrice: "wasPrice 29.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDU0XC9Ccm93bl9uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "CURREN Quartz Watch",
    price: "79.99",
    save: "4.8/5",
    wasPrice: "wasPrice 179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDI5XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Digital Analog Watch",
    price: "204.99",
    save: "4.1/5",
    wasPrice: "wasPrice 349.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Awei T85 TWS Earbuds",
    price: "199.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwNDQxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Z8 Sport Bluetooth",
    price: "249.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMDMyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Case For iphone 8 PLus",
    price: "134.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Nzc5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "curren Luxury Wrist Watch",
    price: "69.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzY5XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Skmei 1335 Mens Watch",
    price: "189.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
];

flashdata.forEach((el) => {
  //console.log(el.name)
  div = document.createElement("div");
  div.addEventListener("click", myfunction);
  img = document.createElement("img");
  img.src = el.image;
  Name = document.createElement("h4");
  Name.innerText = el.name;
  Save = document.createElement("p");
  Save.innerText = `${el.save}/*`;
  div1 = document.createElement("div");
  div2 = document.createElement("div");
  div2.innerHTML = "_______________________________";
  value = document.createElement("h5");
  value.innerText = `Rs-${el.price}`;
  SAVE = document.createElement("h5");
  SAVE.innerText = `total price${el.wasPrice}`;
  div3 = document.createElement("div");
  div3.append(value, SAVE);
  ///////////////////////////////////
  div1.append(Name, Save);
  div.append(img, div1, div2, div3);
  document.querySelector(".fast_product").append(div);
});
function myfunction(el) {
  // console.log(el)
}

let homedata = [
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMDg5XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Double-Sided Mirror",
    price: "79.99",
    save: "4.0/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxOTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Soap Dispenser & Holder",
    price: "89.99",
    save: "4.2/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Smart Mug Warmer",
    price: "89.99",
    save: "4.2/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxOTA1XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Hnging Candle Holder",
    price: "79.99",
    save: "4.1/5",
    wasPrice: "104.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxODM5XC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "European Tea Pot Set",
    price: "68.49",
    save: "4.0/5",
    wasPrice: "92.49",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxODExXC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Ceramic 6 Cups Tea Set",
    price: "329.99",
    save: "4.5/5",
    wasPrice: "516.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMDg5XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "Double-Sided Mirror",
    price: "79.99",
    save: "4.0/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxOTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Soap Dispenser & Holder",
    price: "89.99",
    save: "4.2/5",
    wasPrice: "299.99",
  },
];

homedata.forEach((el) => {
  //console.log(el.name)
  div = document.createElement("div");
  div.addEventListener("click", myfunction1);
  img = document.createElement("img");
  img.src = el.image;
  Name = document.createElement("h4");
  Name.innerText = el.name;
  Save = document.createElement("p");
  Save.innerText = `${el.save}/*`;
  div1 = document.createElement("div");
  div2 = document.createElement("div");
  div2.innerHTML = "_______________________________";
  value = document.createElement("h5");
  value.innerText = `Rs-${el.price}`;
  SAVE = document.createElement("h5");
  SAVE.innerText = `30%off`;
  div3 = document.createElement("div");
  div3.append(value, SAVE);
  ///////////////////////////////////
  div1.append(Name, Save);
  div.append(img, div1, div2, div3);
  document.querySelector(".home_product").append(div);
});
function myfunction1(el) {
  //console.log(el)
}
//  comapny slide show

let comapny = [
  {
    image_url:
      "https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner1.webp",
  },

  {
    image_url:
      "https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner2.webp",
  },

  {
    image_url:
      "https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner1.webp",
  },

  {
    image_url:
      "https://d64lkarmo2mrq.cloudfront.net/img/home/brandbanner2.webp",
  },
];

container1 = document.getElementById("company_slideshow");
i = 0;

setInterval(function () {
  if (i === comapny.length) {
    i = 0;
  }
  let img1 = document.createElement("img");
  img1.src = comapny[i].image_url;
  // console.log(images[i].image_url)
  container1.innerHTML = null;
  container1.append(img1);
  i++;
}, 1000);

//  watches data

let watchdata = [
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Zeblaze Stratos 2 Smartwatch",
    price: "1,099.99",
    save: "4.5/5",
    wasPrice: "1,999.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "IWO W17 Smartwatch",
    price: "59.99",
    save: "4.6/5",
    wasPrice: "89.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzY4XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "LOKMAT Attack Smart Watch",
    price: "259.99",
    save: "4.5/5",
    wasPrice: "899.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "TICWRIS Max 4G Smart Watch",
    price: "79.99",
    save: "4.0/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjEwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "KOSPET Raptor Smartwatch",
    price: "79.99",
    save: "4.1/5",
    wasPrice: "104.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjQ5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Q9S TWS Earphones",
    price: "89.99",
    save: "4.5/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "3 Time Zones Wristwatch",
    price: "22.99",
    save: "4.1/5",
    wasPrice: "wasPrice 39.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "SKMEI Digital Watch",
    price: "19.99",
    save: "4.7/5",
    wasPrice: "wasPrice 29.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNzg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Starking Steel Watch",
    price: "204.99",
    save: "4.1/5",
    wasPrice: "wasPrice 349.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjg5XC9Db2ZmZWVfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Wooden Quartz Watch",
    price: "1,099.99",
    save: "4.5/5",
    wasPrice: "1,999.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjgzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Silicon Digital Watch",
    price: "79.99",
    save: "4.0/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjE2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Mens Luxury Quartz Watch",
    price: "89.99",
    save: "4.2/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjA5XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Men Sports Digital Watch",
    price: "79.99",
    save: "4.1/5",
    wasPrice: "104.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Dual Movement Quartz Watch",
    price: "329.99",
    save: "4.5/5",
    wasPrice: "516.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk1XC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Leather Sport Quartz Watch",
    price: "59.99",
    save: "4.6/5",
    wasPrice: "89.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDkzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Deluxe Quartz Watch",
    price: "259.99",
    save: "4.5/5",
    wasPrice: "899.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Dual Movt Quartz Wristwatch",
    price: "34.99",
    save: "4.2/5",
    wasPrice: "69.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDk0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Multi-Function Leather Watch",
    price: "149.99",
    save: "4.3/5",
    wasPrice: "179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDg0XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Ultra-thin Steel Belt Watch",
    price: "89.99",
    save: "4.5/5",
    wasPrice: "299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDU2XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Leather Belt Quartz Watch",
    price: "22.99",
    save: "4.1/5",
    wasPrice: "wasPrice 39.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDY1XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Skull Watch",
    price: "19.99",
    save: "4.7/5",
    wasPrice: "wasPrice 29.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDU0XC9Ccm93bl9uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "CURREN Quartz Watch",
    price: "79.99",
    save: "4.8/5",
    wasPrice: "wasPrice 179.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDI5XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Mens Digital Analog Watch",
    price: "204.99",
    save: "4.1/5",
    wasPrice: "wasPrice 349.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    name: "Awei T85 TWS Earbuds",
    price: "199.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Nzc5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "curren Luxury Wrist Watch",
    price: "69.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
  {
    image:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzY5XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "Skmei 1335 Mens Watch",
    price: "189.99",
    save: "4.3/5",
    WasPrice: "wasPrice 299.99",
  },
];

watchdata.forEach((el) => {
  //console.log(el.name)
  div = document.createElement("div");
  div.addEventListener("click", myfunction1);
  img = document.createElement("img");
  img.src = el.image;
  Name = document.createElement("h4");
  Name.innerText = el.name;
  Save = document.createElement("p");
  Save.innerText = `${el.save}/*`;
  div1 = document.createElement("div");
  div2 = document.createElement("div");
  div2.innerHTML = "_______________________________";
  value = document.createElement("h5");
  value.innerText = `Rs-${el.price}`;
  SAVE = document.createElement("h5");
  SAVE.innerText = `30%off`;
  div3 = document.createElement("div");
  div3.append(value, SAVE);
  ///////////////////////////////////
  div1.append(Name, Save);
  div.append(img, div1, div2, div3);
  document.querySelector(".watch_product").append(div);
});
function myfunction1(el) {
  //console.log(el)
}

$(function () {
  var print = function (msg) {
    alert(msg);
  };

  var setInvisible = function (elem) {
    elem.css("visibility", "hidden");
  };
  var setVisible = function (elem) {
    elem.css("visibility", "visible");
  };

  var elem = $("#elem");
  var items = elem.children();

  // Inserting Buttons
  elem.prepend(
    '<div id="right-button" style="visibility: hidden;"><a href="#"><</a></div>'
  );
  elem.append('  <div id="left-button"><a href="#">></a></div>');

  // Inserting Inner
  items.wrapAll('<div id="inner" />');

  // Inserting Outer
  debugger;
  elem.find("#inner").wrap('<div id="outer"/>');

  var outer = $("#outer");

  var updateUI = function () {
    var maxWidth = outer.outerWidth(true);
    var actualWidth = 0;
    $.each($("#inner >"), function (i, item) {
      actualWidth += $(item).outerWidth(true);
    });

    if (actualWidth <= maxWidth) {
      setVisible($("#left-button"));
    }
  };
  updateUI();

  $("#right-button").click(function () {
    var leftPos = outer.scrollLeft();
    outer.animate(
      {
        scrollLeft: leftPos - 200,
      },
      800,
      function () {
        debugger;
        if ($("#outer").scrollLeft() <= 0) {
          setInvisible($("#right-button"));
        }
      }
    );
  });

  $("#left-button").click(function () {
    setVisible($("#right-button"));
    var leftPos = outer.scrollLeft();
    outer.animate(
      {
        scrollLeft: leftPos + 200,
      },
      300
    );
  });

  $(window).resize(function () {
    updateUI();
  });
});

// search function start here.....





