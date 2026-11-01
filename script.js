const WA="https://wa.me/27797195492?text=";
document.querySelector(".menu-btn").onclick=()=>document.querySelector(".nav-links").classList.toggle("open");
const form=document.getElementById("form");
if(form)form.onsubmit=e=>{e.preventDefault();const g=i=>document.getElementById(i).value;
window.open(WA+encodeURIComponent("Hi MKG Enterprise, I'm "+g("n")+". Service: "+g("s")+". "+g("m")),"_blank")};
const grid=document.getElementById("grid");
if(grid){let cart={};
const $=id=>document.getElementById(id);
function draw(){const k=Object.keys(cart);$("count").textContent=k.reduce((a,x)=>a+cart[x],0);
$("cart-items").innerHTML=k.length?k.map(x=>`<div><span>${x}</span><span><button data-d="${x}">−</button> ${cart[x]} <button data-u="${x}">+</button></span></div>`).join(""):"<p>No items yet.</p>";
$("send").href=WA+encodeURIComponent("Hi MKG Enterprise, I'd like a quote for:\n"+k.map(x=>"- "+x+" x"+cart[x]).join("\n"))}
grid.onclick=e=>{const n=e.target.dataset.name;if(n){cart[n]=(cart[n]||0)+1;draw()}};
$("cart-items").onclick=e=>{const d=e.target.dataset.d,u=e.target.dataset.u;
if(u)cart[u]++;if(d&&--cart[d]<1)delete cart[d];draw()};
$("cart-open").onclick=()=>$("drawer").classList.add("open");
$("cart-close").onclick=()=>$("drawer").classList.remove("open");
document.querySelector(".filters").onclick=e=>{const f=e.target.dataset.f;if(!f)return;
document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("on",b===e.target));
grid.querySelectorAll(".prod").forEach(c=>c.style.display=f==="All"||c.dataset.cat===f?"":"none")};
draw()}