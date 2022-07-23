import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import { product , sortingData} from "./Data/productdata.js";


import append  from "./component/append.js";


 let container = document.getElementById("product-list")


 let sorting = document.getElementById("sort").addEventListener("change",sort);


//  -----------------------------  //

 append(product.flash,container)

 let flash = document.getElementById("flash").
  addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText="Flash"
    append(product.flash,container)
  });

  let trending = document.getElementById("Trending").
  addEventListener("click", () => {
    document.querySelector("#product-div>h2").innerText="Trending";
    append(product.trending ,container)
  });

  let newarrivals = document.getElementById("newarrival")
  .addEventListener("click" ,() =>{
    document.querySelector("#product-div>h2").innerText="NewArrivals";
     append(product.newarrivals, container)
  });

  let best = document.getElementById("Best").addEventListener("click", () => {
  document.querySelector("#product-div>h2").innerText="Bestdeals";

  append(product.best, container)
  })
  
// --------------


// sorting

function sort (){
  let value = document.getElementById("sort").value;
  let text = document.querySelector("#product-div>h2").innerText;
  
  if(text === "Flash"){
    if(value === "HTL"){
      product.flash.sort((a,b) =>{
        return +b.price - Number(a.price)
      });
       append(product.flash , container);
    }
    if(value === "LTH"){
      product.flash.sort((a,b) =>{
        return +a.price - Number(b.price)
      });
       append(product.flash , container);
    }
  } 

  // --------
  else  if(text === "Bestdeals"){
    if(value === "HTL"){
      product.best.sort((a,b) =>{
        return +b.price - Number(a.price)
      });
       append(product.best , container);
    }
    if(value === "LTH"){
      product.best.sort((a,b) =>{
        return +a.price - Number(b.price)
      });
       append(product.best , container);
    }
  }
  
  // -----------
  else  if(text ==="Trending"){
    if(value === "HTL"){
      product.trending.sort((a,b) =>{
        return +b.price - Number(a.price)
      });
      append(product.trending ,container)
    }
    if(value === "LTH"){
      product.trending.sort((a,b) =>{
        return +a.price - Number(b.price)
      });
      append(product.trending ,container)
    }
  }
//  ---------
else  if(text === "NewArrivals"){
  if(value === "HTL"){
    product.newarrivals.sort((a,b) =>{
      return +b.price - Number(a.price)
    });
    append(product.newarrivals, container)
  }
  if(value === "LTH"){
    product.newarrivals.sort((a,b) =>{
      return +a.price - Number(b.price)
    });
    append(product.newarrivals, container)
  }
}

}



// ----------- side bar  ---------- // 
  
 let brand = document.getElementById("brands").addEventListener("click",brandlist);
 let colour = document.getElementById("colour")
 .addEventListener("click",showcolour);
 let count = 0;
 let count1 = 0; 



  
function brandlist() {
  count++;
  let div = document.querySelector("#brands>div");
  div.innerHTML = null;

  if (count % 2 === 0) {
    document.querySelector("#brands>p>span").innerHTML ="&#9660"
    div.innerHTML = null;
  } else {
    document.querySelector("#brands>p>span").innerHTML = "&#9660";

    let flied = document.createElement("fieldset");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");

    let input1 = document.createElement("input");
    input1.setAttribute("id", "cobination");
    input1.type = "checkbox";

    let label1 = document.createElement("label");
    label1.for = "cobination";
    label1.innerText = "Awei";
    div1.append(input1, label1);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "cob1");
    input2.type = "checkbox";

    let label2 = document.createElement("label");
    label2.for = "cob1";
    label2.innerText = "BOBOBIRD";
    div2.append(input2, label2);

    let input3 = document.createElement("input");
    input3.setAttribute("id", "cob1");
    input3.type = "checkbox";

    let label3 = document.createElement("label");
    label3.for = "normal";
    label3.innerText = "DACOM";
    div3.append(input3, label3);

    let input4 = document.createElement("input");
    input4.setAttribute("id", "cob1");
    input4.type = "checkbox";

    let label4 = document.createElement("label");
    label4.for = "cob1";
    label4.innerText = "HAVIT";
    div4.append(input4, label4);

    let input5 = document.createElement("input");
    input5.setAttribute("id", "cob1");
    input5.type = "checkbox";

    let label5 = document.createElement("label");
    label5.for = "mi";
    label5.innerText = "Xiaomi";
    div5.append(input5, label5);

    let input6 = document.createElement("input");
    input6.setAttribute("id", "cob1");
    input6.type = "checkbox";

    let label6 = document.createElement("label");
    label6.for = "all";
    label6.innerText = "Haylou";
    div6.append(input6, label6);

    let input7 = document.createElement("input");
    input7.setAttribute("id", "cob1");
    input7.type = "checkbox";

    let label7 = document.createElement("label");
    label7.for = "svn";
    label7.innerText = "Ikf";
    div7.append(input7, label7);

    let input8 = document.createElement("input");
    input8.setAttribute("id", "cob1");
    input8.type = "checkbox";

    let label8 = document.createElement("label");
    label8.for = "egt";
    label8.innerText = "SanDunes";
    div8.append(input8, label8);

    let input9 = document.createElement("input");
    input9.setAttribute("id", "cob1");
    input9.type = "checkbox";

    let label9 = document.createElement("label");
    label9.for = "nine";
    label9.innerText = "MB";
    div9.append(input9, label9);

    let input10 = document.createElement("input");
    input10.setAttribute("id", "cob1");
    input10.type = "checkbox";

    let label10 = document.createElement("label");
    label10.for = "ten";
    label10.innerText = "LOKMAT";
    div10.append(input10, label10);

    flied.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
    div.append(flied);
  }
}



function showcolour () {
  count1++;

  let div = document.querySelector("#colour>div");
  div.innerHTML = null;

  if (count1 % 2 === 0) {
    document.querySelector("#colour>p>span").innerHTML = "&#9660";
    div.innerHTML = null;
  } else {
    document.querySelector("#colour>p>span").innerHTML = "&#9660";

    let flied = document.createElement("fieldset");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");


    let input1 = document.createElement("input");
    input1.setAttribute("id", "cobination");
    input1.type = "checkbox";

    let label1 = document.createElement("label");
    label1.for = "cobination";
    label1.innerText = "Beige";
    div1.append(input1, label1);

    let input2 = document.createElement("input");
    input2.setAttribute("id", "cob1");
    input2.type = "checkbox";

    let label2 = document.createElement("label");
    label2.for = "bl";
    label2.innerText = "Black";
    div2.append(input2, label2);

    let input3 = document.createElement("input");
    input3.setAttribute("id", "cob1");
    input3.type = "checkbox";

    let label3 = document.createElement("label");
    label3.for = "normal";
    label3.innerText = "Zeblaze";
    div3.append(input3, label3);

    let input4 = document.createElement("input");
    input4.setAttribute("id", "cob1");
    input4.type = "checkbox";

    let label4 = document.createElement("label");
    label4.for = "brw";
    label4.innerText = "Brown";
    div4.append(input4, label4);

    let input5 = document.createElement("input");
    input5.setAttribute("id", "cob1");
    input5.type = "checkbox";

    let label5 = document.createElement("label");
    label5.for = "cob1";
    label5.innerText = "Cobalt Blue";
    div5.append(input5, label5);

    let input6 = document.createElement("input");
    input6.setAttribute("id", "cob1");
    input6.type = "checkbox";

    let label6 = document.createElement("label");
    label6.for = "all";
    label6.innerText = "Coffee";
    div6.append(input6, label6);

let input8 = document.createElement("input");
    input8.setAttribute("id", "cob1");
    input8.type = "checkbox";

    let label8 = document.createElement("label");
    label8.for = "egt";
    label8.innerText = "Electric Blue";
    div8.append(input8, label8);

    let input9 = document.createElement("input");
    input9.setAttribute("id", "cob1");
    input9.type = "checkbox";

    let label9 = document.createElement("label");
    label9.for = "nine";
    label9.innerText = "Gold";
    div9.append(input9, label9);

    let input10 = document.createElement("input");
    input10.setAttribute("id", "cob1");
    input10.type = "checkbox";

    let label10 = document.createElement("label");
    label10.for = "ten";
    label10.innerText = "Gray";
    div10.append(input10, label10);

    flied.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);

    div.append(flied);
  }
}
