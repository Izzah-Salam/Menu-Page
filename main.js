// items display
const menu=[
  {
    id:1,
    title:"buttuer Milk",
    category:"breakfast",
    price:15.99,
    img:'./img/buttermilk.avif',
    dec:` Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Eveniet omnis ipsum iste cum? 
     Corporis quasi dolor molestiae sapiente sed deleniti!`

 },
 {
  id:2,
  title:"Godzilla Milkshake",
  category:"shake",
  price:15.99,
  img:'./img/shake.avif',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
{
  id:3,
  title:"krhai",
  category:"lunch",
  price:15.99,
  img:'./img/krhai.jpg',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
{
  id:4,
  title:"Ras Malai",
  category:"lunch",
  price:15.99,
  img:'./img/rasmalai.jpg',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
{
  id:5,
  title:"Oreo Shake",
  category:"shake",
  price:15.99,
  img:'./img/oreo.jpg',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
{
  id:6,
  title:"Egg Fry",
  category:"breakfast",
  price:15.99,
  img:'./img/egg.jpg',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
{
  id:7,
  title:"kbab Roll",
  category:"lunch",
  price:15.99,
  img:'./img/kbab.jpg',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
{
  id:8,
  title:"Country Delight",
  category:"lunch",
  price:15.99,
  img:'./img/dinner.avif',
  dec:` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Eveniet omnis ipsum iste cum? 
   Corporis quasi dolor molestiae sapiente sed deleniti!`

},
]


const menuSection = document.getElementById("menu-section")
const filterBtn = document.querySelectorAll(".btn")

// domcontentloader load items

window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu) 
})


// filter items

filterBtn.forEach((btn)=>{
  btn.addEventListener("click",function(e){
   const category = e.currentTarget.dataset.id;
   const menuCategory = menu.filter(function(menuitem){
    // console.log(menuitem.category);
    if(menuitem.category=== category){
      return menuitem
    }
   })
   if(category==="all"){
    displayMenuItems(menu)

   }
   else{
    displayMenuItems(menuCategory)
   }

  })

})





// display menu items
function  displayMenuItems(menuitem){
  let displayMenu = menuitem.map((item)=>{
   
    return `<div class="flex">
    <div class="border-solid border-2 border-amber-700 rounded-lg overflow-hidden mr-5 w-full h-full  bg-cover bg-center bg-no-repeat" style="background-image: url(${item.img});"></div>
    <div>
      <div class="flex justify-between border-b-2 border-amber-700">
        <h1 class="font-semibold">${item.title}</h1>
        <h3 class="text-amber-700">${item.price}</h3>
      </div>
      <div class="mt-5">
        ${item.dec}
      </div>
     
    </div>

  </div>`
    

  })
  displayMenu = displayMenu.join("")
  menuSection.innerHTML = displayMenu


}