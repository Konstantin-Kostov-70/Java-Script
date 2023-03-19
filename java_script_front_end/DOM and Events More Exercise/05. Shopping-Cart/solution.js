function solve() {
   document.querySelector(".shopping-cart").addEventListener('click', onClick);
   document.querySelector(".checkout").addEventListener('click', checkout);
   let textArea = document.getElementsByTagName('textarea')[0];
   let products = []

   function onClick({target}) {
      if (target.tagName === 'BUTTON' && target.className === "add-product") {
         let product = target.parentNode.parentNode;
         let name = product.querySelector(".product-title").textContent;
         let price = Number(product.querySelector(".product-line-price").textContent);
      
         textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         products.push({
            name,
            price,
         });
        
      }
   }

   function checkout() {
      let unique = new Set();
      products.forEach(obj => unique.add(obj.name));
      const total = products.reduce((t, p) => t + p.price ,0)
       textArea.value += `You bought ${Array.from(unique).join(', ')} for ${total.toFixed(2)}.`
   }
}