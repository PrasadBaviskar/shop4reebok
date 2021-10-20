var products = JSON.parse(localStorage.getItem("cart"));
    

sum = 0;
products.forEach(function(p){
    sum += Number(p.selling_price);
});

// document.getElementById("sum").textContent = ;
// let ar = sum_p.textContent.split(" ");
// // console.log(ar)
// ar[2] = sum;
// sum_p.textContent = ar.join(" ");

// sum1 = document.getElementById("total");
// let ar2 = sum1.textContent.split(" ");
// ar2[2] = sum;
// sum1.textContent = ar2.join(" ");

let disc_value = (sum / 100) * 30;
// let disc = document.getElementById("discount");
// let disc_amt = disc.textContent.split(" ");
// disc_amt[1] = disc_value;
// disc.textContent = disc_amt.join(" ")

let desk = JSON.parse(localStorage.getItem("checkout_desk"));
  // console.log(desk["total"])   
document.getElementById("total").textContent = desk["total"];
document.getElementById("discount").textContent = desk["discount"];

let final_amt = document.getElementById("sum").textContent.split(" ");
final_amt[2] = sum-disc_value;

desk["final_amt"] = final_amt.join(" ");

localStorage.setItem("checkout_desk",JSON.stringify(desk));

document.getElementById("sum").textContent = desk["final_amt"]

// document.getElementById("discount").textContent = desk["final_amt"];

// document.getElementById("sum").textContent = ;



function payment(e){
  e.preventDefault();
  window.location.href = 'payment_page.html';
}
