const shop = {

    header: {
        logo: '<a class="header__logo" href="#!">Site name</a>',
        nav : [
            '<a href="#!">Page</a>',
            '<a href="#!">Page</a>',
            '<a href="#!">Page</a>',
            '<button>Button</button>',
        ]
    },

    shop_title: {
        shop_title__wrap: [
            '<h1>Shop title</h1>',
            '<p>Subheading with description of your shopping site</p>',
            '<button>Button</button>',
        ]
    },

    shop_featured: {
        heading: '<h3>Heading</h3>',
        productCards: [
            '<a class="shop-product-cards__item col col-7 col-lg-12" href="#!"><img src="../img/shop-featured-card-1.jpg" alt=""><span>Featured product</span><p>Description of featured product</p><span>$10.99</span></a>',
            '<div class="shop-featured-cards__wrap col col-5 col-lg-6"><a class="shop-product-cards__item col-lg-6" href="#!"><img src="../img/shop-product-card-1.jpg" alt=""><span>Product</span><p>Description of first product</p><span>$10.99</span></a><a class="shop-product-cards__item col-lg-6" href="#!"><img src="../img/shop-product-card-4.jpg" alt=""><span>Product</span><p>Description of first product</p><span>$10.99</span></a></div>'
        ]
    },

    footer: {
        footer_info: '<div class="footer__left col col-2 col-md-12"><a class="footer__logo" href="#!">Site name</a><div class="footer__links"><a href="#!"><img src="../img/footer-fb.svg" alt=""></a><a href="#!"><img src="../img/footer-linkin.svg" alt=""></a><a href="#!"><img src="../img/footer-youtube.svg" alt=""></a><a href="#!"><img src="../img/footer-insta.svg" alt=""></a></div></div><div class="footer__right col col-10 col-md-12"><ul><li>Topic</li><li><a href="#!">Page</a></li><li><a href="#!">Page</a></li><li><a href="#!">Page</a></li></ul><ul><li>Topic</li><li><a href="#!">Page</a></li><li><a href="#!">Page</a></li><li><a href="#!">Page</a></li></ul><ul><li>Topic</li><li><a href="#!">Page</a></li><li><a href="#!">Page</a></li><li><a href="#!">Page</a></li></ul></div>'
    }

};


//HEADER
document.getElementById('header').innerHTML = shop.header.logo;



function shopNav() {
    const shopNav = document.querySelector('#header__nav')
    
    for(i = 0; i < shop.header.nav.length; i++) {
        
        const shopNavConst = shop.header.nav[i]; 
        shopNav.innerHTML += shopNavConst;
    }

}

document.addEventListener("DOMContentLoaded", function() {
    shopNav();
});

//SHOP-TITLE

function shopTitle() {
    const shopTitle = document.querySelector('#shop-title__wrap')

    for(i = 0; i < shop.shop_title.shop_title__wrap.length; i++) {

        const shopTitleConst = shop.shop_title.shop_title__wrap[i]; 
        shopTitle.innerHTML += shopTitleConst;

    }
}

document.addEventListener("DOMContentLoaded", function() {
    shopTitle();
});

//SHOP-HEADING

document.getElementById('heading').innerHTML = shop.shop_featured.heading;

function shopCard() {
    const shopCard = document.querySelector('#shopCard')

    for(i = 0; i < shop.shop_featured.productCards.length; i++) {

        const shopCardConst = shop.shop_featured.productCards[i]; 
        shopCard.innerHTML += shopCardConst;

    }
}

document.addEventListener("DOMContentLoaded", function() {
    shopCard();
});


//SHOP-FOOTER

document.getElementById('footer').innerHTML = shop.footer.footer_info;







