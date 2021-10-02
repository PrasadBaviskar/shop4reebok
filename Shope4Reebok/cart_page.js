
var sum_p,sum1;
if(localStorage.getItem("cart") === null){
    localStorage.setItem("cart",JSON.stringify([]));
}

var products = JSON.parse(localStorage.getItem("cart"));

var parent = document.getElementById("products");
parent.className = "btm-line";

if(products.length == 0){
    document.getElementById("products").innerHTML = null;
    // parent.innerHtml = null;
    let h1 = document.createElement("h1");
    h1.className = "no_prod_text"
    h1.textContent = "No product added yet!"
    parent.append(h1);
}

function show_cart(products){
    products.forEach(function(product){
    let img_div = document.createElement("div");
    let details_div = document.createElement("div");
    details_div.className = "details";

    let info_div = document.createElement("div");
    let price_div = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.img;

    img_div.append(img);

    let name = document.createElement("p");
    name.textContent= product.name;

    let color = document.createElement("p");
    color.textContent = "Color :" + product.color;

    let size = document.createElement("p");
    size.textContent = "Size :" + product.size;

    let mrp = document.createElement("p");
    mrp.textContent = "₹" + product.mrp;
    mrp.style.fontSize = "14px"
    mrp.style.textDecoration = "line-through"

    let price = document.createElement("p");
    price.textContent = "₹" + product.selling_price;

    let remove_item_div = document.createElement("div");
    let remove_link = document.createElement("a");
    remove_link.textContent = "Remove item";
    remove_link.href = "";
    remove_link.style.fontWeight = "600";
    remove_link.style.color = "#c71432";
    remove_link.onclick = function(){
        remove_item(event ,product);
    }

    remove_item_div.append(remove_link)

    let hr = document.createElement("hr");


    info_div.append(name, color, size);

    price_div.append(price, mrp);

    details_div.append(info_div, price_div,remove_item_div);

    parent.append(img_div, details_div);

    sum = 0;
    products.forEach(function(p){
        sum += Number(p.selling_price);
    });
    sum_p = document.getElementById("sum");
    let ar = sum_p.textContent.split(" ");
    // console.log(ar)
    ar[2] = sum;
    sum_p.textContent = ar.join(" ");

    sum1 = document.getElementById("total");
    let ar2 = sum1.textContent.split(" ");
    ar2[2] = sum;
    sum1.textContent = ar2.join(" ");
    // sum1.textContent = sum1;

    if(JSON.parse(localStorage.getItem("checkout_desk")) == null){
        localStorage.setItem("checkout_desk",JSON.stringify({}));
    }
    
    let desk = JSON.parse(localStorage.getItem("checkout_desk"));
    desk["total"] = ar2.join(" ");

    // console.log(desk)
    // console.log(ar2.join(" "))

    localStorage.setItem("checkout_desk",JSON.stringify(desk));
    
});    
}

show_cart(products)



function remove_item(e, prod){
    e.preventDefault()

    let newprods = products.filter(function(p){
        if(p!= prod){
            return p;
        }
    });

    localStorage.removeItem("cart");

    localStorage.setItem("cart",JSON.stringify(newprods));

    location.reload()

    // show_cart(newprods);
}

// check & apply promocode

function check_code(){

    let code = document.getElementById("promocode").value;

    if(code == "masai30"){
        let disc_value = (sum / 100) * 30;
        sum = sum - (sum / 100) * 30;

        sum_p = document.getElementById("sum");
        let ar = sum_p.textContent.split(" ");
        ar[2] = sum;
        sum_p.textContent = ar.join(" ");

        sum1 = document.getElementById("total");
        let ar2 = sum1.textContent.split(" ");
        ar2[2] = sum;
        sum1.textContent = ar2.join(" ");

        let disc = document.getElementById("discount");
        let disc_amt = disc.textContent.split(" ");
        console.log(sum)
        disc_amt[1] = disc_value;
        console.log(disc_amt);
        disc.textContent = disc_amt.join(" ")

        let desk = JSON.parse(localStorage.getItem("checkout_desk"));
        desk["discount"] = disc_amt.join(" ");

        localStorage.setItem("checkout_desk",JSON.stringify(desk));

    }
    else{
        alert("please enter valid promocode")
    }
}

// function address_form(e){
//     e.preventDefault()

//     location.href("checkout.html")
// }
