
let btns = document.querySelector('.btns')
let currentActiveLink = null;

async function makro() {
  try {
    let res = await fetch('https://api.makromarket.uz/api/category-list/');
    let catalogs = await res.json();
    console.log(catalogs);
    
    
    catalogs.forEach(catalog => {
      let item = document.createElement('div');
      item.classList.add('btn');
      let a = document.createElement('a');
      a.classList.add('bt');
      a.textContent = catalog.title;

      item.append(a);
      btns.append(item);
      
      
      
      
      item.addEventListener('click', () => {
        if (currentActiveLink) {
          currentActiveLink.classList.remove('active');
        }
        item.classList.add('active');
        currentActiveLink = item;
      });

      
    });

  } catch (error) {
    console.log(error);
  }
}

makro();
  
  
  let vse = document.querySelector('.btnn')

  vse.addEventListener('click', () => {
    if (currentActiveLink) {
      currentActiveLink.classList.remove('active');
    }
    vse.classList.add('active');
    currentActiveLink = vse;
  });


  if (!currentActiveLink) {
    vse.classList.add('active');
    currentActiveLink = vse;
  }





// https://api.makromarket.uz/api/product-list/

  
  let smth = document.querySelector('.smth');

  
  async function productss() {
    try {
      let res = await fetch('https://api.makromarket.uz/api/product-list/')
      let products = await res.json()
      console.log(products);
      
      products.forEach((product, index) => {     
        let meal = document.createElement('div')
        meal.classList.add('box')
        
        
        let tp = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.classList.add('title-b')
        h1.textContent = product.title
        
        let dv = document.createElement('div')
        dv.classList.add('dv')
        let spann = document.createElement('span')
        spann.classList.add('t-h2')
        spann.textContent = 'актуально до'
        let span = document.createElement('span')
        span.classList.add('times')
        span.textContent = product.endDate
        
        
        let bm = document.createElement('div')
        let img = document.createElement('img')
        img.classList.add('products')
        img.src = product.photo_medium;
        img.alt = product.title;
        
        // let price = document.createElement('div')
        // price.classList.add('price')

        
        
        
        dv.append(spann, span)
        bm.append(img)
        tp.append(h1, dv)
        meal.append(tp, bm)
        
                                  
        if(index === 0) {
          meal.classList.remove('box')
          h1.classList.remove('title-b')
          span.classList.remove('times')
          spann.classList.remove('t-h2')
          img.classList.remove('products')
          meal.classList.add('boxx')
          h1.classList.add('title-bx')
          span.classList.add('time')
          spann.classList.add('tt-h2')
          img.classList.add('product')
        }
        
        smth.append(meal)
      })
      
    } catch (error) {
      console.log(error);
    } 
  }

  productss()
  
  
