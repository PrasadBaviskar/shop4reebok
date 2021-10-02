var d1,d2,d3,d4;
function show_form(){

    let col1 = document.getElementById("col1");

    d1 = document.createElement("div");
    d1.textContent = "Credit Card";
    
    d1.onclick = function(){
        getform(n=1);
    }

    d2 = document.createElement("div");
    d2.textContent = "Debit Card";
    d2.onclick = function(){
        getform(n=2);
    }

    d3 = document.createElement("div");
    d3.textContent = "Net Banking";
    d3.onclick = function(){
        getform(n=3);
    }

    d4 = document.createElement("div");
    d4.textContent = "Cash On Delivey";
    d4.onclick = function(){
        getform(n=4);
    }

    col1.append(d1, d2, d3, d4)

    let col2 = document.getElementById("col2");

    // let form_div = document.createElement("")

    d1.className = "active_bg";
    d2.className = "normal_bg ";
    d3.className = "normal_bg ";
    d4.className = "normal_bg ";

    let desk = JSON.parse(localStorage.getItem("checkout_desk"));

    document.getElementById("pay_amt").textContent = desk["final_amt"];
}

show_form()

function getform(n){
    switch(n){
        case 1:
            if(document.getElementById("nb")){
                document.getElementById("nb").innerHTML = null;
            }

            document.getElementById("card_formt").textContent = "Credit Card Number";
            d1.className = "active_bg";
            d2.className = "normal_bg ";
            d3.className = "normal_bg ";
            d4.className = "normal_bg ";
            break;

        case 2:
            if(document.getElementById("nb")){
                document.getElementById("nb").innerHTML = null;
            }

            document.getElementById("card_formt").textContent = "Debit Card Number";
            d1.className = "normal_bg";
            d2.className = "active_bg";
            d3.className = "normal_bg";
            d4.className = "normal_bg";
            break;

        case 3:
            // document.getElementById("form").innerHTML = null;
            
            let div = document.createElement("div");
            div.id = "nb"

            let p = document.createElement("p");
            p.textContent = "Net Banking Id";

            let ip = document.createElement("input");
            ip.type = "text";
            ip.placeholder = "Enter Your Net Banking Id";

            let btn = document.createElement("button");
            btn.className = "btn"
            btn.textContent = "Procced"

            div.append(p, ip, btn);

            document.getElementById("form").append(div);

            d1.className = "normal_bg";
            d2.className = "normal_bg";
            d3.className = "active_bg";
            d4.className = "normal_bg";

            break;
        case 4:
            setTimeout(function(){
                window.location.href = "sucess_page.html"
            },1500)
            
            break;
    }
}


function confirm_order(){
    setTimeout(function(){
        window.location.href = "sucess_page.html"
    },2000)
    
}