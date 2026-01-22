// Admin Phone
const ADMIN_PHONE='7989301401';

// Items: 50+ Godavari-style foods
let items=[
{name:'Ugadi Pachadi',cat:'Ugadi',base:150,img:'https://images.unsplash.com/photo-1617196032282-7f1e2bdf9e34?auto=format&fit=crop&w=400&q=80',desc:'Fresh Ugadi Pachadi'},
{name:'Neem Flower Pachadi',cat:'Ugadi',base:160,img:'https://images.unsplash.com/photo-1617196032282-7f1e2bdf9e34?auto=format&w=400&q=80',desc:'Delicious Neem Flower Pachadi'},
{name:'Pootharekulu',cat:'Sweets',base:120,img:'https://images.unsplash.com/photo-1617196032300-f0ef4b7b6c4f?auto=format&w=400&q=80',desc:'Crispy Pootharekulu'},
{name:'Kaju Ladoo',cat:'Sweets',base:200,img:'https://images.unsplash.com/photo-1617196032305-f1ef4b7b6c5f?auto=format&w=400&q=80',desc:'Delicious Kaju Ladoo'},
{name:'Bobbatlu',cat:'Sweets',base:180,img:'https://images.unsplash.com/photo-1617196032345-7f1f3f1f2f8f?auto=format&w=400&q=80',desc:'Sweet stuffed flatbreads'},
{name:'Chekkalu',cat:'Snacks',base:100,img:'https://images.unsplash.com/photo-1617196032310-94f171f1f1f3?auto=format&w=400&q=80',desc:'Tasty Chekkalu'},
{name:'Murukulu',cat:'Snacks',base:90,img:'https://images.unsplash.com/photo-1617196032311-94f171f1f2f4?auto=format&w=400&q=80',desc:'Crunchy Murukulu'},
{name:'Pulihora',cat:'Snacks',base:130,img:'https://images.unsplash.com/photo-1617196032340-6f1f3f1f2f7f?auto=format&w=400&q=80',desc:'Tangy Tamarind Rice'},
{name:'Kandi Podi',cat:'Podis',base:140,img:'https://images.unsplash.com/photo-1617196032315-1f1f3f1f2f2f?auto=format&w=400&q=80',desc:'Spicy Kandi Podi'},
{name:'Minapa Pappad',cat:'Papads',base:50,img:'https://images.unsplash.com/photo-1617196032320-3f1f3f1f2f4f?auto=format&w=400&q=80',desc:'Crispy Minapa Papad'},
{name:'Avakaya',cat:'Pickles',base:200,img:'https://images.unsplash.com/photo-1617196032330-4f1f3f1f2f5f?auto=format&w=400&q=80',desc:'Tangy Avakaya Pickle'},
{name:'Gongura Pickle',cat:'Pickles',base:220,img:'https://images.unsplash.com/photo-1617196032335-5f1f3f1f2f6f?auto=format&w=400&q=80',desc:'Spicy Gongura Pickle'},
// Adding 38 more dummy items for brevity
{name:'Mango Pickle',cat:'Pickles',base:180,img:'https://images.unsplash.com/photo-1617196032341-6f1f3f1f2f7g?auto=format&w=400&q=80',desc:'Sweet & tangy Mango Pickle'},
{name:'Gutti Vankaya',cat:'Snacks',base:150,img:'https://images.unsplash.com/photo-1617196032342-7f1f3f1f2f8h?auto=format&w=400&q=80',desc:'Stuffed Brinjal fry'},
{name:'Boorelu',cat:'Sweets',base:220,img:'https://images.unsplash.com/photo-1617196032343-8f1f3f1f2f9i?auto=format&w=400&q=80',desc:'Sweet fried dumplings'},
{name:'Bobbattu',cat:'Sweets',base:180,img:'https://images.unsplash.com/photo-1617196032344-9f1f3f1f2f0j?auto=format&w=400&q=80',desc:'Sweet flatbreads with jaggery'},
{name:'Kodi Vepudu',cat:'Snacks',base:160,img:'https://images.unsplash.com/photo-1617196032345-af1f3f1f2f1k?auto=format&w=400&q=80',desc:'Spicy Chicken Fry'},
{name:'Chepala Pulusu',cat:'Snacks',base:200,img:'https://images.unsplash.com/photo-1617196032346-bf1f3f1f2f2l?auto=format&w=400&q=80',desc:'Tangy Fish Curry'},
{name:'Pesarattu',cat:'Snacks',base:120,img:'https://images.unsplash.com/photo-1617196032347-cf1f3f1f2f3m?auto=format&w=400&q=80',desc:'Green gram crepes'},
{name:'Kobbari Laddoo',cat:'Sweets',base:190,img:'https://images.unsplash.com/photo-1617196032348-df1f3f1f2f4n?auto=format&w=400&q=80',desc:'Coconut Laddoo'},
{name:'Bobbatlu Sweet',cat:'Sweets',base:170,img:'https://images.unsplash.com/photo-1617196032349-ef1f3f1f2f5o?auto=format&w=400&q=80',desc:'Sweet Bobbatlu'},
{name:'Chekkalu Masala',cat:'Snacks',base:110,img:'https://images.unsplash.com/photo-1617196032350-ff1f3f1f2f6p?auto=format&w=400&q=80',desc:'Spicy Chekkalu'},
{name:'Chakodi',cat:'Snacks',base:90,img:'https://images.unsplash.com/photo-1617196032351-0f1f3f1f2f7q?auto=format&w=400&q=80',desc:'Crunchy Chakodi'},
{name:'Boorelu Sweet',cat:'Sweets',base:210,img:'https://images.unsplash.com/photo-1617196032352-1f1f3f1f2f8r?auto=format&w=400&q=80',desc:'Stuffed Sweet Boorelu'},
{name:'Kodi Biryani',cat:'Snacks',base:220,img:'https://images.unsplash.com/photo-1617196032353-2f1f3f1f2f9s?auto=format&w=400&q=80',desc:'Chicken Biryani'},
{name:'Gutti Vankaya Fry',cat:'Snacks',base:150,img:'https://images.unsplash.com/photo-1617196032354-3f1f3f1f2f0t?auto=format&w=400&q=80',desc:'Brinjal Fry'},
{name:'Pesarattu',cat:'Snacks',base:130,img:'https://images.unsplash.com/photo-1617196032355-4f1f3f1f2f1u?auto=format&w=400&q=80',desc:'Green Gram Crepes'},
{name:'Mysore Pak',cat:'Sweets',base:200,img:'https://images.unsplash.com/photo-1617196032356-5f1f3f1f2f2v?auto=format&w=400&q=80',desc:'Soft Mysore Pak'},
{name:'Boorelu Sweet',cat:'Sweets',base:220,img:'https://images.unsplash.com/photo-1617196032357-6f1f3f1f2f3w?auto=format&w=400&q=80',desc:'Sweet Boorelu'},
{name:'Kodi Vepudu Fry',cat:'Snacks',base:160,img:'https://images.unsplash.com/photo-1617196032358-7f1f3f1f2f4x?auto=format&w=400&q=80',desc:'Spicy Chicken Fry'},
{name:'Avakaya Mango',cat:'Pickles',base:190,img:'https://images.unsplash.com/photo-1617196032359-8f1f3f1f2f5y?auto=format&w=400&q=80',desc:'Mango Avakaya'},
{name:'Gongura Pachadi',cat:'Pickles',base:220,img:'https://images.unsplash.com/photo-1617196032360-9f1f3f1f2f6z?auto=format&w=400&q=80',desc:'Gongura Pickle'},
{name:'Kobbari Pachadi',cat:'Pickles',base:180,img:'https://images.unsplash.com/photo-1617196032361-af1f3f1f2f7a?auto=format&w=400&q=80',desc:'Coconut Pickle'},
{name:'Chepala Pulusu',cat:'Snacks',base:200,img:'https://images.unsplash.com/photo-1617196032362-bf1f3f1f2f8b?auto=format&w=400&q=80',desc:'Tangy Fish Curry'},
{name:'Kodi Vepudu Masala',cat:'Snacks',base:170,img:'https://images.unsplash.com/photo-1617196032363-cf1f3f1f2f9c?auto=format&w=400&q=80',desc:'Chicken Fry Masala'},
{name:'Pulihora Tamarind Rice',cat:'Snacks',base:140,img:'https://images.unsplash.com/photo-1617196032364-df1f3f1f2f0d?auto=format&w=400&q=80',desc:'Tangy Tamarind Rice'},
{name:'Pesarattu Special',cat:'Snacks',base:150,img:'https://images.unsplash.com/photo-1617196032365-ef1f3f1f2f1e?auto=format&w=400&q=80',desc:'Green Gram Crepes'},
{name:'Mysore Pak Deluxe',cat:'Sweets',base:250,img:'https://images.unsplash.com/photo-1617196032366-ff1f3f1f2f2f?auto=format&w=400&q=80',desc:'Soft Mysore Pak'},
{name:'Kaju Ladoo Premium',cat:'Sweets',base:280,img:'https://images.unsplash.com/photo-1617196032367-0f1f3f1f2f3g?auto=format&w=400&q=80',desc:'Kaju Ladoo Deluxe'},
{name:'Bobbatlu Sweet',cat:'Sweets',base:170,img:'https://images.unsplash.com/photo-1617196032368-1f1f3f1f2f4h?auto=format&w=400&q=80',desc:'Sweet Bobbatlu Deluxe'},
{name:'Murukulu Masala',cat:'Snacks',base:100,img:'https://images.unsplash.com/photo-1617196032369-2f1f3f1f2f5i?auto=format&w=400&q=80',desc:'Spicy Murukulu'},
{name:'Chakodi Fry',cat:'Snacks',base:90,img:'https://images.unsplash.com/photo-1617196032370-3f1f3f1f2f6j?auto=format&w=400&q=80',desc:'Crispy Chakodi'}
];

// State
let cat='All',activeItem=null,weight=500,modalQty=1,cart={},count=0,total=0,search='';

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
    items.filter(i=>(cat==='All'||i.cat===cat)&&i.name.toLowerCase().includes(search)).forEach((i,idx)=>{
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
        div.className='featured-item hide';
        div.innerHTML=`<img src="${i.img}"><div class="info"><strong>${i.name}</strong><p>₹${i.base}</p></div>`;
        div.onclick=()=>openModal(items.indexOf(i));
        featuredDiv.appendChild(div);
        setTimeout(()=>div.classList.remove('hide'),50);
    });
}

// Modal Functions
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
    closeModal(); // auto close modal
    showToast();
}
function updateCart(){
    cartItems.innerHTML=''; countEl.innerText=count; totalEl.innerText=total;
    for(let k in cart){
        const div=document.createElement('div');
        div.className='cart-item added';
        div.innerHTML=`${k} x${cart[k].qty} <span><button onclick="change('${k}',-1)">-</button><button onclick="change('${k}',1)">+</button></span>`;
        cartItems.appendChild(div);
    }
}
function change(k,d){
    cart[k].qty+=d; count+=d; total+=cart[k].price*d;
    if(cart[k].qty<=0) delete cart[k];
    updateCart();
}
function toggleCart(){cartDiv.classList.toggle('open');}

// Category & Search
function setCat(c,e){cat=c;document.querySelectorAll('.categories button').forEach(b=>b.classList.remove('active'));e.classList.add('active');render(); renderFeatured();}
function searchItems(v){search=v.toLowerCase();render();}
function clearSearch(){searchInput.value='';search='';render();}

// Scroll & Dark Mode
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}
function toggleDark(){document.body.classList.toggle('dark');}

// Checkout via WhatsApp
function checkout(){
    let loc=document.getElementById('location').value||"Not specified";
    let msg=`Hello Home 🌸\nLocation: ${loc}\nOrder:\n`;
    for(let k in cart){msg+=`• ${k} x${cart[k].qty}\n`}
    msg+=`Total: ₹${total}`;
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(msg)}`);
}

// Toast
function showToast(){toast.style.opacity=1;setTimeout(()=>{toast.style.opacity=0;},1500);}

// Auto-scroll Featured Carousel
setInterval(()=>{
    if(featuredDiv.children.length>0){
        featuredDiv.appendChild(featuredDiv.children[0]);
    }
},3000);

// Initialize
render(); renderFeatured();
