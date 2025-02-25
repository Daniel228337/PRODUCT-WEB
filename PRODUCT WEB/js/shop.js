const products = [
    {
     id: 1,
     name: 'Product 1',
     url: 'https://www.wildberries.ru/catalog/160582385/detail.aspx',
     image: 'https://cdn.pixabay.com/photo/2025/02/08/03/07/flower-9391281_1280.jpg',
     description: 'Description of first product',
     price: 10.99,
     status: 1,
    },
    {
     id: 2,
     name: 'Product 2',
     url: 'https://www.wildberries.ru/catalog/160582385/detail.aspx',
     image: 'https://cdn.pixabay.com/photo/2020/05/07/22/08/lotus-5143420_1280.jpg',
     description: 'Description of second product',
     price: 2.99,
     status: 1,
    },
    {
     id: 3,
     name: 'Product 3',
     url: 'https://www.wildberries.ru/catalog/160582385/detail.aspx',
     image: 'https://cdn.pixabay.com/photo/2021/08/06/23/26/lotus-6527384_1280.jpg',
     description: 'Description of third product',
     price: 15.99,
     status: 0,
    },
    {
     id: 4,
     name: 'Product 4',
     url: 'https://www.wildberries.ru/catalog/160582385/detail.aspx',
     image: 'https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556_1280.jpg',
     description: 'Description of fourth product',
     price: 21.99,
     status: 1,
    },
    {
     id: 5,
     name: 'Product 5',
     url: 'https://www.wildberries.ru/catalog/160582385/detail.aspx',
     image: 'https://cdn.pixabay.com/photo/2016/11/19/14/27/lotus-1839558_1280.jpg',
     description: 'Description of fifth product',
     price: 9.99,
     status: 1,
    },
    {
     id: 6,
     name: 'Product 6',
     url: 'https://www.wildberries.ru/catalog/160582385/detail.aspx',
     image: 'https://cdn.pixabay.com/photo/2021/08/31/09/10/lotus-6588182_1280.jpg',
     description: 'Description of sixth product',
     price: 33.99,
     status: 0,
    }
   ];
   
   function outputProducts() {
    const productContainer = document.querySelector('#products')
    for(i = 0; i < products.length; i++) {
        

        if(products[i].status === 0) {
            continue;

        }
            const html = '<a class="shop-product-cards__item col col-4 col-lg-6 col-sm-12" href='+ products[i].url +'><img src='+ products[i].image +' alt=""><span>'+ products[i].name +'</span><p>'+ products[i].description +'</p><span>'+ products[i].price +'</span></a>'   
            productContainer.innerHTML += html;
    };
};

document.addEventListener("DOMContentLoaded", function() {
    outputProducts();
});
