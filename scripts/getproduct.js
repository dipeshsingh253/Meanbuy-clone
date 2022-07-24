const images = document.querySelector("#images"); // append image here
const slideLeft = document.querySelector("#left"); // left slide
const slideRight = document.querySelector("#right"); // right slide
const product_info = document.querySelector("#product_info"); // append product info here
let products = [
  {
    name: "3D BENZ AMG WHEEL WATCH",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8zXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8yXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "8999",
    offer: "21",
    rating: "1.8",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "1 x 3D Mercedes AMG Wheel watch in the high-quality package.",
    features:
      "3D BENZ AMG WHEEL WATCH, Stainless steel case , Sapphire glass , Stainless steel band",
    category: "watch",
    id: 1,
  },
  {
    name: "KOSPET Optimus 2 Smartwatch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzcwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzcwXC9CbGFja19uXzJfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzcwXC9CbGFja19uXzRfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "21999",
    offer: "37",
    rating: "4.3",
    avaliable: true,
    summary:
      "Dual chip, Helio P22+PAR2822: Thanks to this dual-chip design mode, the computing efficiency of the watch is greatly improved, the movement data collection is more accurate, and the power consumption of the Bluetooth connection between the watch and the mobile phone is greatly reduced, and the stability of the Bluetooth connection is greatly improved. # Two 4G standby modes, Android mode+ Lite Mode: Android Mode: A high-performance version of the Android watch, which can turn on all functions such as video, games, camera, music, social, and calling # Lite Mode: Lite version of the call watch: only supports localized applications such as calls, text messages, sports and fitness",
    includes: "KOSPET Optimus 2 Smartwatch (4GB RAM + 64GB ROM)",
    features: "Kospet , Kospet Optimus 2, Material Silicon, 1.6 inch",
    category: "watch",
    id: 2,
  },
  {
    name: "LOKMAT APPLLP 6 Smart Watch 2+16GB",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODI0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODI0XC9HcmVlbl9uXzJfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODI0XC9HcmVlbl9uXzNfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "26999",
    offer: "21",
    rating: "4.8",
    avaliable: true,
    summary:
      "LOKMAT- APPLLP 6 Android Smartwatch supports 4G/WIFI network connections.  #  After inserting the SIM card (not included), you can make and receive calls, send text messages, or surf the internet any time and anywhere. # video entertainment, photo taking, step counting, heart rate monitoring, social entertainment, blood oxygen detection",
    includes: "LOKMAT APPLLP 6 Smart Watch 2+16GB",
    features: "LOKMAT , TPU+Microfiber Leather, 830mAh",
    category: "watch",
    id: 3,
  },
  {
    name: "LIGE LG0160 Smart Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNzk3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNzk3XC9TaWx2ZXJfbl8yXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNzk3XC9TaWx2ZXJfbl8zXzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "5999",
    offer: "25",
    rating: "5",
    avaliable: true,
    summary:
      "This fitness tracker supports 24/7 automatic heart rate monitoring. #This fitness activity tracker has 10 sports modes and features weather information, music & camera control, alarm clock, stopwatch, sedentary reminder, find phone, and brightness adjustment which makes this sports watch activity tracker practical and comprehensive. #Alloy CNC process case, electroplated anti-fingerprint, reinforced mineral glass mirror",
    includes: "LIGE LG0160 Smart Watch",
    features: "Alloy,Bluetooth,IP68,1.3 inch,black",
    category: "watch",
    id: 4,
  },
  {
    name: "LIGE BW0330 Smart Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNzk4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNzk4XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNzk4XC9TaWx2ZXJfbl81XzYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "6999",
    offer: "22",
    rating: "3.8",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "LIGE BW0330 Smart Watch",
    features: "Stainless Steel,Water Resistant,1.28 inch,Fitness Tracker",
    category: "watch",
    id: 5,
  },
  {
    name: "LOKMAT TIME 2 Smart Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODAxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODAxXC9HcmF5X25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzODAxXC9HcmF5X25fMl8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    price: "6999",
    offer: "30",
    rating: "5",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "LOKMAT TIME 2 Smart Watch",
    features: "Stainless Steel,Water Resistant,1.28 inch,Fitness Tracker",
    category: "watch",
    id: 6,
  },
  {
    name: "KOSPET Tank M1 Pro Smart Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNjcyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNjcyXC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNjcyXC9CbHVlX25fM180LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    price: "8499",
    offer: "30",
    rating: "4.5",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "KOSPET Tank M1 Pro Smart Watch",
    features: "Stainless Steel,Water Resistant,1.28 inch,Fitness Tracker",
    category: "watch",
    id: 7,
  },
  {
    name: "Zeblaze Meteor Smart Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNTQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNTQ1XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzNTQ1XC9XaGl0ZV9uXzJfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "7499",
    offer: "30",
    rating: "4.7",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "KOSPET Tank M1 Pro Smart Watch",
    features: "Stainless Steel,Water Resistant,1.28 inch,Fitness Tracker",
    category: "watch",
    id: 8,
  },
  {
    name: "F60 Healthcare Smart Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTk5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTk5XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTk5XC9SZWRfbl81XzYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "5999",
    offer: "35",
    rating: "4.7",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "KOSPET Tank F60 Healthcare Smart WatchM1 Pro Smart Watch",
    features: "Stainless Steel,Water Resistant,1.28 inch,Fitness Tracker",
    category: "watch",
    id: 9,
  },
  {
    name: "Full Touch Screen Watch",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTQ1XC9CZWlnZV9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTQ1XC9CZWlnZV9uXzNfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMzMTQ1XC9CZWlnZV9uXzZfNy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "5999",
    offer: "35",
    rating: "4.7",
    avaliable: true,
    summary:
      "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
    includes: "Full Touch Screen Watch",
    features: "Stainless Steel,Water Resistant,1.28 inch,Fitness Tracker",
    category: "watch",
    id: 10,
  },
  {
    name: "Pisen X-Pods T2 Earphones",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTQzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTQzXC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTQzXC9CbGFja19uXzVfNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "4299",
    offer: "35",
    rating: "4.7",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "Pisen X-Pods T2 Earphones",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 11,
  },
  {
    name: "Disney Mickey Minnie In-ear Earphones",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTQ0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTQ0XC9XaGl0ZV9uXzFfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTQ0XC9XaGl0ZV9uXzNfNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "6999",
    offer: "40",
    rating: "4.7",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "Disney Mickey Minnie In-ear Earphones",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 12,
  },
  {
    name: "SYLLABLE S101 TWS Earphones",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc0XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc0XC9CbGFja19uXzVfNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "6999",
    offer: "40",
    rating: "3.6",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "SYLLABLE S101 TWS Earphones",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 13,
  },
  {
    name: "TWS Noise Cancelling Earphones",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzUxXC9CZWlnZV9uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzUxXC9OYXZ5K0JsdWVfbl8yXzMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzUxXC9OYXZ5K0JsdWVfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "24999",
    offer: "30",
    rating: "3.6",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "TWS Noise Cancelling Earphones",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 14,
  },
  {
    name: "PISEN Bluetooth Earphones",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjQ3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjQ3XC9CbGFja19uXzJfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjQ3XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "3999",
    offer: "30",
    rating: "3.6",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "PISEN Bluetooth Earphones",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 15,
  },
  {
    name: "Wireless Hush Hybrid Headphone",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNTY3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNTY3XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNTY3XC9HcmF5X25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    price: "12999",
    offer: "35",
    rating: "4.1",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "Wireless Hush Hybrid Headphone\t",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 16,
  },
  {
    name: "Bluetooth Noise Cancelling Headphone",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ2XC9TaWx2ZXJfbl8xXzEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ2XC9TaWx2ZXJfbl8yXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ2XC9TaWx2ZXJfbl8zXzMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "33999",
    offer: "35",
    rating: "4.1",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "Bluetooth Noise Cancelling Headphone",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 17,
  },
  {
    name: "Iron Man Gaming Earbuds",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjEzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjEzXC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyNjEzXC9SZWRfbl8zXzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
    price: "4999",
    offer: "35",
    rating: "4.1",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "Iron Man Gaming Earbuds",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 18,
  },
  {
    name: "Monster Inspire ANC Headphones",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUyXC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUyXC9CbGFja19uXzRfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "45999",
    offer: "35",
    rating: "4.1",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "Monster Inspire ANC Headphones",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 19,
  },
  {
    name: "High-End Audiophile Headphone",
    image1:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image2:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ4XC9CbGFja19uXzJfMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    image3:
      "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ4XC9CbGFja19uXzNfMy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    price: "129999",
    offer: "28",
    rating: "4.1",
    avaliable: true,
    summary:
      "Experience bass nirvana with a higher frequency response and 11 mm audio drivers for powerful, thunderous notes that will transform your media. Control your music, handle phone calls, and even summon Google Assistant with three tactile inline buttons and a mic. Say hello to hands-free convenience",
    includes: "High-End Audiophile Headphone",
    features: "Wireless, Yes, 5.0, 120 Hours",
    category: "earphone",
    id: 20,
  },
];

let product_id = JSON.parse(localStorage.getItem('product_id'));
console.log(product_id);
for(let i=0;i<products.length;i++)
{
  if(product_id == products[i].id)
  {
    var obj = products[i];
    break;
  }
}
var imageArray = [];
// var obj = {
//   name: "3D BENZ AMG WHEEL WATCH",
//   image1:
//     "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8zXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
//   image2:
//     "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
//   image3:
//     "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjI1XC9SZWRfbl8yXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
//   price: "8999",
//   offer: "21",
//   rating: "1.8",
//   avaliable: true,
//   summary:
//     "Lose yourself in the world of luxury with the Turbo Rim watch face. This eye-catching accessory is inspired by a remarkable and timeless rim and is hand-made to precision from robust 3D stainless steel. The luxurious dial is finished with a scratch-resistant finish to give you this elite watch that is created to last. With its sleek design and striking looks, the Turbo Rim watch face is perfect for anyone who loves driving fast and looking good doing it. Order your watch today and experience true luxury!",
//   includes: "1 x 3D Mercedes AMG Wheel watch in the high-quality package.",
//   features:
//     "3D BENZ AMG WHEEL WATCH, Stainless steel case , Sapphire glass , Stainless steel band",
//   category: "watch",
//   id: 1,
// };
//console.log(obj.image1);
imageArray.push(obj.image2, obj.image1, obj.image3);

function showImage(url) {
  let img = document.createElement("img");
  img.setAttribute("id", "image_url");
  img.src = url;
  images.append(img);
}
//  console.log(products[0]);
showImage(imageArray[0]);

function prevImage() {
  let btn_slider = document.querySelectorAll(".btn_slider");

  let current_image = document.getElementById("image_url").src;
  let current_index = imageArray.indexOf(current_image);
  //console.log(current_index);
  if (current_index !== 0) {
    document.getElementById("image_url").src = imageArray[current_index - 1];
    btn_slider[current_index - 1].style.backgroundColor = "#FFA500";
    btn_slider[current_index - 1].style.width = "15px";
    btn_slider[current_index - 1].style.height = "15px";
    btn_slider[current_index].style.backgroundColor = "#CDCDCD";
    btn_slider[current_index].style.width = "10px";
    btn_slider[current_index].style.height = "10px";
  }
}

function nextImage() {
  let btn_slider = document.querySelectorAll(".btn_slider");

  let current_image = document.getElementById("image_url").src;
  let current_index = imageArray.indexOf(current_image);
  //console.log(current_index);
  // console.log(current_index);
  if (current_index !== 2) {
    document.getElementById("image_url").src = imageArray[current_index + 1];
    btn_slider[current_index + 1].style.backgroundColor = "#FFA500";
    btn_slider[current_index + 1].style.width = "15px";
    btn_slider[current_index + 1].style.height = "15px";
    btn_slider[current_index].style.backgroundColor = "#CDCDCD";
    btn_slider[current_index].style.width = "10px";
    btn_slider[current_index].style.height = "10px";
  }
}
showProductInfo(obj);
function showProductInfo(product) {
  let product_title = document.createElement("h1");
  product_title.innerText = product.name;

  let info_div1 = document.createElement("div");
  info_div1.classList.add("info_div1");
  let rating = document.createElement("span");
  rating.classList.add("rating");
  rating.innerHTML = `<p>${product.rating}</p><a href="#" class="fa fa-star"></a>`;
  let write_review = document.createElement("p");
  write_review.innerText = "WRITE A REVIEW";
  let socials = document.createElement("div");
  socials.classList.add("socials");
  socials.innerHTML = `
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-pinterest"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-whatsapp"></a>
        <a href="#" class="fa fa-at"></a>
    `;
  info_div1.append(rating, write_review, socials);

  let info_div2 = document.createElement("div");
  info_div2.classList.add("info_div2");
  let price = document.createElement("div");
  price.classList.add("price");
  price.innerHTML = `<h1>₹${product.price}</h1> <p>₹${
    +product.price + Math.floor((product.price * product.offer) / 100)
  }</p> <p>UP TO ${product.offer}% OFF </p>
    `;
  let offer_text = document.createElement("div");
  offer_text.innerHTML = `<p style="font-size:12px; color:grey">(Save up to <span style="color:orange;">₹${Math.floor(
    (product.price * product.offer) / 100
  )})</span></p>`;

  let delivery = document.createElement("div");
  delivery.classList.add("delivery");
  delivery.innerHTML = `
         <p> <a href="#" class="fa fa-check">CASH ON DELIVERY availible on orders between ₹999</a></p>
         <p> <a href="#" class="fa fa-check"></a>Get up to ₹500 OFF with coupon code <span>PREAPAID</span></p>
          <p><a href="#" class="fa fa-check"></a>3 interest free payments</p>
          <p>Availability :<span>In Stock</span></p>
    `;
  let deliveryImage = document.createElement("img");
  deliveryImage.classList.add("delivery_image");
  deliveryImage.src = "del.png";

  let bulk = document.createElement("div");
  bulk.classList.add("bulk");
  bulk.innerHTML = `<p>For B2B/ Bulk pricing,<a href="#">click here</a></p>`;

  delivery.append(deliveryImage, bulk);
    //console.log(product);
    let id = product.id;
  let payment = document.createElement("div");
  payment.classList.add("payment");
  payment.innerHTML = `
        <h4>Please choose your preference</h4>
        <div>
        <p>Select Quantity:</p> <span> <button class="fa fa-minus" onclick="minusQuantity()"></button><p id="quantity">1</p><button class="fa fa-plus" onclick="addQuantity()"></button>
        </span>
        </div>
        <button id="addtoCart">Add to Cart</button>
        <button id="buyNow" onclick="buyNow(obj)">Buy Now</button>
    `;

  info_div2.append(price, offer_text, delivery, payment);

  let info_div3 = document.createElement("div");
  info_div3.classList.add("info_div3");

  let anchorBar = document.createElement("div");
  anchorBar.classList.add("anchor_bar");
  anchorBar.innerHTML = `
        <span onclick="showProductDescription(obj)"><a href="#" class="fa fa-caret-right"></a><p id="description_heading">Product Description</p></span>
        <span onclick="showProductFeaures(obj)"><a href="#" class="fa fa-caret-right"></a><p id="features_heading">Product Features</p></span>
        <span onclick="showShippingInfo()"><a href="#" class="fa fa-caret-right"></a><p id="shipping_heading">Shipping & Return Details </p></span>
    `;

  let showData = document.createElement("div");
  showData.setAttribute("id", "show_data");

  info_div3.append(anchorBar, showData);
  product_info.append(product_title, info_div1, info_div2, info_div3);
}
showProductDescription(obj);
function showProductDescription(product) {
  let caret_right = document.querySelectorAll(".fa-caret-right");
  caret_right[0].style.color = "orange";
  caret_right[0].style.fontSize = "23px";
  let description_heading = document.querySelector("#description_heading");
  description_heading.style.fontSize = "18px";
  description_heading.style.fontWeight = "bold";

  caret_right[1].style.color = "black";
  caret_right[1].style.fontSize = "12px";
  let features_heading = document.querySelector("#features_heading");
  features_heading.style.fontSize = "18px";
  features_heading.style.fontWeight = "normal";

  caret_right[2].style.color = "black";
  caret_right[2].style.fontSize = "12px";
  let shipping_heading = document.querySelector("#shipping_heading");
  shipping_heading.style.fontSize = "18px";
  shipping_heading.style.fontWeight = "normal";

  document.querySelector("#show_data").innerHTML = null;

  let div = document.createElement("div");

  let span_1 = document.createElement("span");
  span_1.classList.add("span_description");
  let heading_1 = document.createElement("h4");
  heading_1.innerText = "Product Summary";
  let text_1 = document.createElement("p");
  text_1.innerText = product.summary;
  span_1.append(heading_1, text_1);

  let span_2 = document.createElement("span");
  span_2.classList.add("span_description");
  let heading_2 = document.createElement("h4");
  heading_2.innerText = "Package Includes";
  let text_2 = document.createElement("p");
  text_2.innerText = product.includes;
  span_2.append(heading_2, text_2);

  div.append(span_1, span_2);
  document.querySelector("#show_data").append(div);
}

function showProductFeaures(product) {
  let caret_right = document.querySelectorAll(".fa-caret-right");
  caret_right[0].style.color = "black";
  caret_right[0].style.fontSize = "12px";
  let description_heading = document.querySelector("#description_heading");
  description_heading.style.fontSize = "18px";
  description_heading.style.fontWeight = "normal";

  caret_right[1].style.color = "orange";
  caret_right[1].style.fontSize = "23px";
  let features_heading = document.querySelector("#features_heading");
  features_heading.style.fontSize = "18px";
  features_heading.style.fontWeight = "bold";

  caret_right[2].style.color = "black";
  caret_right[2].style.fontSize = "12px";
  let shipping_heading = document.querySelector("#shipping_heading");
  shipping_heading.style.fontSize = "18px";
  shipping_heading.style.fontWeight = "normal";

  //console.log(product);
  let features = product.features.trim().split(",");
  //console.log(features);
  document.querySelector("#show_data").innerHTML = null;
  // let div = document.createElement("div");
  for (let i = 0; i < features.length; i++) {
    document.querySelector("#show_data").innerHTML += `
      <span class="span_features"><a href="#" class="fa fa-circle"></a><p>${features[i]}</p></span>
      `;
  }
}

function showShippingInfo() {
  let caret_right = document.querySelectorAll(".fa-caret-right");
  caret_right[1].style.color = "black";
  caret_right[1].style.fontSize = "12px";
  let features_heading = document.querySelector("#features_heading");
  features_heading.style.fontSize = "18px";
  features_heading.style.fontWeight = "normal";

  caret_right[0].style.color = "black";
  caret_right[0].style.fontSize = "12px";
  let description_heading = document.querySelector("#description_heading");
  description_heading.style.fontSize = "18px";
  description_heading.style.fontWeight = "normal";

  caret_right[2].style.color = "orange";
  caret_right[2].style.fontSize = "23px";
  let shipping_heading = document.querySelector("#shipping_heading");
  shipping_heading.style.fontSize = "18px";
  shipping_heading.style.fontWeight = "bold";

  document.querySelector("#show_data").innerHTML = null;

  let div = document.createElement("div");
  let span_1 = document.createElement("span");
  span_1.classList.add("span_description");
  let heading_1 = document.createElement("h4");
  heading_1.innerText = "Wait & Save";
  let text_1 = document.createElement("p");
  text_1.innerText =
    "Select the best price & delivery date and save the most. Have the best price all year round. No need to wait for sale and discount season. Get the best price and delivery directly from the factory. In general, a later Delivery Date means greater Savings!";
  //console.log(product);
  span_1.append(heading_1, text_1);
  let span_2 = document.createElement("span");
  span_2.classList.add("span_description");
  let heading_2 = document.createElement("h4");
  heading_2.innerText = "Returns and Exchanges";
  let text_2 = document.createElement("p");
  text_2.innerText =
    "Because we offer the lowest prices we cannot accept returns from Buyer's Remorse. If you're returning because of a faulty product, we'll get to work to get you a replacement product asap or a refund when out of stock.";
  let text_3 = document.createElement("p");
  text_3.innerText =
    "* Disclaimer: Although we work very hard to get your order delivered on time, sometimes things happen that are outside of our control so your shipment might get delayed. When this happens you will be informed as soon as possible.";
  span_2.append(heading_2, text_2, text_3);
  div.append(span_1, span_2);
  document.querySelector("#show_data").append(div);
}

// featured products starts here
function showFeaduredProducts(product, data, index) {
  let featured_products = document.querySelector("#featured_products");
  featured_products.innerHTML = null;
  let images = [];
  data.forEach((el) => {
    if (el.category == product.category) {
      images.push(el.image2);
    }
  });
  //console.log(images);

  featured_products.innerHTML = `
    <h2 style="font-weight: normal; font-size: 30px; color: ##534B4B">Featured Products</h2>
        <div id="featured_slider">
          <div>
            <img src="${images[index++]}" alt="">
            <img src="${images[index++]}" alt="">
            <img src="${images[index++]}" alt="">
            <img src="${images[index++]}" alt="">
            <img src="${images[index++]}" alt="">
          </div>
          <div>
            <a onclick="prevList()"  class="fa fa-chevron-left"></a>
            <a onclick="nextList()" class="fa fa-chevron-right"></a>
          </div>
        </div>

    `;
}

showFeaduredProducts(obj, products, 0);
function nextList() {
  showFeaduredProducts(obj, products, 5);
}
function prevList() {
  showFeaduredProducts(obj, products, 0);
}
// featured products ends here


// onclick functions

function buyNow(product) 
{
  // let quantity = JSON.parse(localStorage.getItem('quantity'));
  let quantity = document.getElementById("quantity").innerText;
  localStorage.setItem("quantity", JSON.stringify(quantity));
  localStorage.setItem("product", JSON.stringify(product));
 window.open("checkout.html","_self");
   //console.log(product, quantity);
}

function addQuantity()
{
  let quantity = document.getElementById("quantity");
  quantity.innerText++;
  // localStorage.setItem("quantity", JSON.stringify(quantity.innerText));
}
function minusQuantity()
{
  let quantity = document.getElementById("quantity");
  if(quantity.innerText > 1)
  {
    quantity.innerText--;
    // localStorage.setItem("quantity", JSON.stringify(quantity.innerText));

  }

}