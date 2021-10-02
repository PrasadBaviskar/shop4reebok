let parent=document.getElementById("des");
let catlogue_des=JSON.parse(localStorage.getItem("des_data"));
var x = (catlogue_des[catlogue_des.length-1])
console.log(x);

//localStorage.setItem("des_data",JSON.stringify(catlogue_des));

function showCatlogues(){
   
  
     let div=document.createElement('div');
     let div1=document.createElement('div');
     div1.id = "div1_des"
     div.id = "div_des"
    
    
     let img=document.createElement("img");
     let img01=document.createElement("img");

    
     img.src=x.img;
     img.style.width = "500px"
     img.class = "image"
     img.id = "zoom"
     img01.id = "img01_des"

     let img1=document.createElement("img");
     img1.src=x.img;
     img1.id = "img1_des"

     let catlog_price=document.createElement("p");
     catlog_price.id = "des_price"  
     catlog_price.textContent= "Price: "+ x.price;
      let catlog_price1=document.createElement("p");
      
      catlog_price1.textContent= "(inc. All the taxes) \n"+   "\n   available color \n" +"\n black black black";
      catlog_price1.style.width = "140px"
      catlog_price1.style.fontSize = "17px"
      catlog_price1.style.marginTop = "-30px"
     

      

      let catlog_name=document.createElement("p");
      catlog_name.id = "des_name"
      catlog_name.textContent=x.name;

      let addtocart_btn=document.createElement("button");
    addtocart_btn.id = "btn_cart_des"
    addtocart_btn.innerText="ADD TO CART"+" "+ " ";

    let fav_btn=document.createElement("button");
    fav_btn.id = "btn_fav_des"
    fav_btn.innerText="♡"+" "+ " ";
  
      
     

      addtocart_btn.onclick=function()
      {
        
          addtoCart(x);
      };


      div1.append(catlog_name,catlog_price,catlog_price1,img1,addtocart_btn,fav_btn);
      div.append(img,img01);

    
     
     
    //  console.log(div)

    
    parent.append(div);
      parent.append(div1);
    
  


}


function addtoCart(p)
{
    let catlogue_cart=JSON.parse(localStorage.getItem("cart"));
    catlogue_cart.push(p);

    localStorage.setItem("cart",JSON.stringify(catlogue_cart));

}

showCatlogues();


// swati


let parent_dest=document.getElementById("showing_element");

function descrition()
{
  parent_dest.innerHTML=null;
let xy=document.createElement("div");
xy.style.marginRight="50%";
let li_1=document.createElement("p");
li_1.textContent="Mask up and show off your style. This face cover is made of spacer fabric and lined with stretchy mesh for long-wearing comfort. Elastic ear straps keep the mask in place while you move. A metallic Reebok logo flashes a sporty look.";
xy.append(li_1);
parent_dest.append(xy);

}
function specification()
{
 

  parent_dest.innerHTML=null;
  let ux=document.createElement('ul');
  let li1_1=document.createElement('li');
  li1_1.textContent="This product is not eligible for returns or exchanges and is excluded from all promotions";
  let li1_2=document.createElement('li');
  li1_2.textContent="Product colour: Pure Grey 5, Vector Navy and Vector Red";
  
  let li1_3=document.createElement('li');
  li1_3.textContent="Body: 93% Recycled Polyester and 7% Elastane";

  let li1_4=document.createElement('li');
  li1_4.textContent="Lining: 92% Recycled Polyester and 8% Elastane";

  let li1_5=document.createElement('li');
  li1_5.textContent="Elastic ear straps";

  let li1_6=document.createElement('li');
  li1_6.textContent="Reebok logo";

  let li1_7=document.createElement('li');
  li1_7.textContent="Net Quantity: 3 N";
  ux.style.marginLeft="50%";
 ux.append(li1_1,li1_2,li1_3,li1_4,li1_5,li1_6,li1_7);
 parent_dest.append(ux);

  
}