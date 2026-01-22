const ADMIN_PHONE='7989301401';

// Sample Items (50+)
let items=[
{name:'Ugadi Pachadi',cat:'Ugadi',base:150,img:'https://images.unsplash.com/photo-1617196032282-7f1e2bdf9e34?auto=format&fit=crop&w=400&q=80',desc:'Fresh Ugadi Pachadi'},
{name:'Neem Flower Pachadi',cat:'Ugadi',base:160,img:'https://images.unsplash.com/photo-1617196032282-7f1e2bdf9e34?auto=format&w=400&q=80',desc:'Delicious Neem Flower Pachadi'},
{name:'Pootharekulu',cat:'Sweets',base:120,img:'https://images.unsplash.com/photo-1617196032300-f0ef4b7b6c4f?auto=format&w=400&q=80',desc:'Crispy Pootharekulu'},
{name:'Kaju Ladoo',cat:'Sweets',base:200,img:'https://images.unsplash.com/photo-1617196032305-f1ef4b7b6c5f?auto=format&w=400&q=80',desc:'Delicious Kaju Ladoo'},
{name:'Chekkalu',cat:'Snacks',base:100,img:'https://images.unsplash.com/photo-1617196032310-94f171f1f1f3?auto=format&w=400&q=80',desc:'Tasty Chekkalu'},
{name:'Murukulu',cat:'Snacks',base:90,img:'https://images.unsplash.com/photo-1617196032311-94f171f1f2f4?auto=format&w=400&q=80',desc:'Crunchy Murukulu'},
{name:'Pulihora',cat:'Snacks',base:130,img:'https://images.unsplash.com/photo-1617196032340-6f1f3f1f2f7f?auto=format&w=400&q=80',desc:'Tangy Tamarind Rice'},
{name:'Kandi Podi',cat:'Podis',base:140,img:'https://images.unsplash.com/photo-1617196032315-1f1f3f1f2f2f?auto=format&w=400&q=80',desc:'Spicy Kandi Podi'},
{name:'Minapa Pappad',cat:'Papads',base:50,img:'https://images.unsplash.com/photo-1617196032320-3f1f3f1f2f4f?auto=format&w=400&q=80',desc:'Crispy Minapa Papad'},
{name:'Avakaya',cat:'Pickles',base:200,img:'https://images.unsplash.com/photo-1617196032330-4f1f3f1f2f5f?auto=format&w=400&q=80',desc:'Tangy Avakaya Pickle'}
// Add remaining 40+ items similarly
];

// State
let cat='All',activeItem=null,weight=500,modalQty=1,cart={},count=0,total=0,search='';

// DOM Elements
const pDiv=document.getElementById('products');
const featuredDiv=document.getElementById('featured');
const modal=document.getElementById('modal');
const mName=document.getElementById('mName');
const mDesc=document.getElementById('mDesc');
const mImg=document.getElementById('mImg');
const mPrice=document.getElementById('mPrice');
const countEl=document.getElementById('count');
const cartItems=document.getElementById('cartItems');
const cartDiv=document.getElementById('cart');
const totalEl=document.getElementById('total');
const toast=document.getElementById('toast');
const searchInput=document.getElementById('search');

// Render Products
function render(){
    pDiv.innerHTML='';
    let filtered=items.filter(i=>(cat==='All'||i.cat===cat)&&i.name.toLowerCase().includes(search));
    if(filtered.length===0){
        pDiv.innerHTML='<p style="text-align:center;padding:2rem;color:#888;font-weight:500;">No items found 😞</p>';
        return;
    }
    filtered.forEach((i,idx)=>{
        const div=document.createElement('div');
        div.className='product';
        div.innerHTML=`<img src="${i.img}"><div class="info"><strong>${i.name}</strong><p>₹${i.base}</p></div>`;
        div.onclick=()=>openModal(idx);
        pDiv.appendChild(div);
    });
}

// Render Featured
function renderFeatured(){
    featuredDiv.innerHTML='';
    let featuredItems=(cat==='All')?items:items.filter(i=>i.cat===cat);
    featuredItems.slice(0,5).forEach(i=>{
        const div=document.createElement('div');
        div.className='featured-item';
        div.innerHTML=`<img src="${i.img}"><div class="info"><strong>${i.name}</strong><p>₹${i.base}</p></div>`;
        div.onclick=()=>openModal(items.indexOf(i));
        featuredDiv.appendChild(div);
    });
}

// Modal
function openModal(i){
    activeItem=items[i];weight=500;modalQty=1;
    modal.classList.add('active');
    mName.innerText=activeItem.name;
    mDesc.innerText=activeItem.desc;
    mImg.src=activeItem.img;
    mPrice.innerText=activeItem.base;
    document.querySelectorAll('.weight-boxes span').forEach(s=>s.classList.remove('active'));
    document.querySelector('.weight-boxes span:nth-child(2)').classList.add('active');
}
function closeModal(){modal.classList.remove('active');}
function setWeight(w,e){weight=w;document.querySelectorAll('.weight-boxes span').forEach(s=>s.classList.remove('active'));e.classList.add('active');updatePrice();}
function updatePrice(){mPrice.innerText=Math.round(activeItem.base*(weight/500));}
function changeModalQty(v){modalQty=Math.max(1,modalQty+v);document.getElementById('modalQty').innerText=modalQty;}
function addToCart(){
    const key=`${activeItem.name} (${weight}g)`;
    const price=parseInt(mPrice.innerText);
    if(!cart[key]) cart[key]={qty:0,price};
    cart[key].qty+=modalQty;
    count+=modalQty; total+=price*modalQty;
    updateCart();
    closeModal();
    showToast();
}
function updateCart(){
    cartItems.innerHTML=''; countEl.innerText=count; totalEl.innerText=total;
    for(let k in cart){
        const div=document.createElement('div');
        div.className='cart-item';
        div.innerHTML=`<span>${k} x${cart[k].qty}</span> <span><button onclick="change('${k}',-1)">-</button><button onclick="change('${k}',1)">+</button></span>`;
        cartItems.appendChild(div);
    }
}
function change(k,d){
    cart[k].qty+=d; count+=d; total+=cart[k].price*d;
    if(cart[k].qty<=0) delete cart[k];
    updateCart();
}
function toggleCart(){cartDiv.classList.toggle('open');}

// Categories & Search
function setCat(c,e){cat=c;document.querySelectorAll('.categories button').forEach(b=>b.classList.remove('active'));e.classList.add('active');render(); renderFeatured();}
function searchItems(v){search=v.toLowerCase();render();}
function clearSearch(){searchInput.value='';search='';render();}

// Scroll & Dark Mode
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}
function toggleDark(){document.body.classList.toggle('dark');}

// Checkout via WhatsApp
function checkout(){
    let loc=document.getElementById('location').value||"Not specified";
    let msg=`Hello \nLocation: ${loc}\nOrder:\n`;
    for(let k in cart){msg+=`• ${k} x${cart[k].qty}\n`}
    msg+=`Total: ₹${total}`;
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(msg)}`);
}

// Toast
function showToast(){toast.style.opacity=1;setTimeout(()=>{toast.style.opacity=0;},1500);}

// Initialize
render(); renderFeatured();
