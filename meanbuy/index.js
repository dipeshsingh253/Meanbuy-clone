import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar();


import { product } from "./Data/productdata.js";

import append  from "./component/append.js";

 
 let container = document.getElementById("product-list")


 let flash = document.getElementById("flash").
  addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText="Flash"
    append(product.flash,container)

  });

  let trending = document.getElementById("Trending").
  addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText="TRENDING";
    append(product.trending ,container)
  });

  let newarrivals = document.getElementById("newarrival")
  .addEventListener("click" ,() =>{
    document.querySelector("#product-div>h2").innerText="NEW ARRIVALS";
     append(product.newarrivals, container)
  });

  let best = document.getElementById("Best").addEventListener("click", () => {
  document.querySelector("#product-div>h2").innerText="BEST DEALS"

  append(product.best, container)
  })
  