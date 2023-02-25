async function api(){
    v= fetch ('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
   out1= await v 
   prom= out1.json()
   out2= await prom
   console.log(out2)
      var m_all=document.querySelector('.parent') 
      
   for(let i of out2){
        var makeup_data=document.querySelector('div')
        makeup_data.classList.add('make')
        makeup_data.style.display='Inline-block'

      try{
         
        //  brand
         var brand_name=document.createElement('p')
         brand_name.innerText=i.brand
         console.log(i.brand);
         makeup_data.append(brand_name)
        //product name
        var b_name=document.createElement('p')
        b_name.innerText=i.name
        console.log(i.name);
        makeup_data.append(b_name)
        //price
        var b_price=document.createElement('p')
        b_price.innerText=i.price
        console.log(i.price);
        makeup_data.append(b_price)
        //image
        var b_image=document.createElement('img')
        b_image.setAttribute('src',i.image_link)
         console.log(i.image_link);
        makeup_data.append(b_image)
       //description
        var b_des=document.createElement('p')
        b_des.innerText=i.description
        console.log(i.description);
        makeup_data.append(b_des)
        // var b_link=document.createElement('a')
        // b_link.setAttribute('href',i.product_link)
        // console.log(i.product_link);
        // makeup_data.append(b_link)



         m_all.append(makeup_data)
       }
         catch{
        // console.log("Hi")
        }

    } 


}
api()
