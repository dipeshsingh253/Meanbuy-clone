 function append(data,container){
  container.innerHTML=null;

     data.forEach((elem) => {
         let card = document.createElement("div");
          card.setAttribute("id","card");

          let img = document.createElement("img")
          img.src=elem.image;

          let name = document.createElement("h3")
           name.innerText=elem.name;
           name.setAttribute("id","nam")
          
          let save = document.createElement("div")
          save.innerText=elem.save;
          save.setAttribute("id","sav")
        //   save.innerHTML= `<span class="fa fa-star checked"></span>`;

          let price = document.createElement("h4") 
              price.setAttribute("id","pr");
             price.innerText=`₹${elem.price}`;

         let info =document.createElement("div")
          info.setAttribute("id","info");

          let wasPrice= document.createElement("h4")
            wasPrice.innerText=elem.WasPrice;

         let h5 = document.createElement("p")
          h5.setAttribute("id","free")
          h5.innerText="FREE SHIPPING";

          let pricediv = document.createElement("div")
           pricediv.setAttribute("id","price-div")

           info.append(name,save);
          pricediv.append(price,h5);
          card.append(img,info,pricediv)
          container.append(card)
     })
      

 }

 export default append