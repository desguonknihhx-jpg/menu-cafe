const menuData ={
    // ١. زێدەکرنا کاتیگۆرییا "هەمی" وەک ئایتمێ ئێکێ
    all: { 
        title: { ku: 'هەمی', ar: 'الكل', en: 'All' }, 
        icon: 'fa-border-all' 
    },
    mojito: { 
        title: { ku: 'موهيتو', ar: 'موهيتو', en: 'Mojito' }, 
        icon: 'fa-glass-martini-alt',
        items: [
            { name: 'Blue Hawaii (Soda)', img: 'b.jpg', price: '4,000' },
            { name: 'Blue Hawaii (Redbull)', img: 'bl r.jpg', price: '4,500' },
            { name: 'Strawberry (Soda)', img: 'strawbery soda.jpg', price: '4,000' },
            { name: 'Strawberry (Redbull)', img: 'b r.jpg', price: '4,500' },
            { name: 'Classic (Soda)', img: 'classic mojito soda.jpg', price: '3,500' },
            { name: 'Classic (Redbull)', img: 'c r.jpg', price: '4,500' }
        ]
    },
    icecream: { 
        title: { ku: 'ئایس کریم', ar: 'آيس كريم', en: 'Ice Cream' }, 
        icon: 'fa-ice-cream',
        items: [
            { name: 'Ice Cream Luna Bloom', img: 'luna ice cream.jpg', price: '4,500' },
            { name: 'Ice Cream Classic', img: 'calassic ice cream.jpg', price: '3,000' }
        ]
    },
    hot: { 
        title: { ku: 'گەرم', ar: 'ساخن', en: 'Hot Drinks' }, 
        icon: 'fa-mug-hot',
        items: [
            { name: 'Espresso', img: 'espresso.jpg', price: '3,000' },
            { name: 'Espresso Double', img: 'espresso-double.jpg', price: '4,000' },
            { name: 'Americano', img: 'americano.jpg', price: '4,000' },
            { name: 'Cappuccino', img: 'cappuccino.jpg', price: '4,500' },
            { name: 'Spanish Latte', img: 'spanish-hot.jpg', price: '4,500' },
            { name: 'Latte Caramel', img: 'caramel-hot.jpg', price: '4,500' },
            { name: 'Tea Regular', img: 'tea.jpg', price: '500' },
            { name: 'Green Tea', img: 'green tea.jpg', price: '3,500' },
            { name: 'water', img: 'watter.jpg', price: '500' }
        ]
    },
    cold: { 
        title: { ku: 'تەزی', ar: 'بارد', en: 'Cold Drinks' }, 
        icon: 'fa-snowflake',
        items: [
            { name: 'Ice Latte', img: '1.jpg', price: '4,000' },
            { name: 'Spanish Late', img: 'spanish latte.jpg', price: '4,500' },
            { name: 'Caramel Latte', img: 'iced caramel.jpg', price: '4,500' },
            { name: 'Luna Bloon Late', img: 'l ice.jpg', price: '5,000' },
            { name: 'Ice Americano', img: 'a.jpg', price: '4,000' }
        ]
    },
    pancake: { 
        title: { ku: 'بان کێک', ar: 'بان كيك', en: 'Pancake' }, 
        icon: 'fa-layer-group',
        items: [
            { name: 'Mini Pancake Chocolate', img: 'chocolate waffle.jpg', price: '4,000' },
            { name: 'Mini Pancake Pistachio', img: 'fstq waffle.jpg', price: '4,000' },
            { name: 'Mini Pancake Lotus', img: 'lutos waffle.jpg', price: '4,000' },
            { name: 'Mini Pancake Kinder', img: 'kinder waffle.jpg', price: '4,500' },
            { name: 'Mini Pancake Luna Bloom', img: 'luna waffle.jpg', price: '4,500' }
        ]
    },
    cupcake: { 
        title: { ku: 'کەب کێک', ar: 'كب كيك', en: 'Cupcake' }, 
        icon: 'fad fa-pie',
        items: [
            { name: 'Cupcake Luna Bloom', img: 'luna cupcake.jpg', price: '4,500' },
            { name: 'Cupcake Chocolate', img: 'chocolate pan.jpg', price: '4,000' },
            { name: 'Cupcake Vanilla', img: 'vanila pan.jpg', price: '4,000' },
            { name: 'Cupcake Caramel', img: 'caramel pancake.jpg', price: '4,000' }
        ]
    },
    bakery: { 
        title: { ku: 'كرواسان', ar: 'كرواسون', en: 'croissant' }, 
        icon: 'fa-solid fa-croissant',
        items: [
            { name: 'Croissant', img: 'croissant.jpg', price: '4,500' },
            { name: 'Cookies', img: 'coockis.jpg', price: '3,500' }
        ]
    },
    waffle: { 
        title: { ku: 'وافل', ar: 'وافل', en: 'Waffle' }, 
        icon: 'fa-stroopwafel',
        items: [
            { name: 'Waffle Luna Bloom', img: 'l waffle.jpg', price: '4,500' },
            { name: 'Waffle Chocolate', img:'choco.jpg', price: '4,500' },
            { name: 'Waffle Fruits', img: 'luna wafle.jpg', price: '5,000' },
            { name: 'Waffle Pistachio', img: 'pista.jpg', price: '4,000' },
            { name: 'Waffle Kinder', img: 'k ww.jpg', price: '4,500' },
            { name: 'Waffle Lotus', img: 'l ww.jpg', price: '4,000' }
        ]
    },
    juice: { 
        title: { ku: 'شەربەت', ar: 'عصائر', en: 'Fresh Juice' }, 
        icon: 'fa-apple-alt',
        items: [
            { name: 'Orange Juice', img: 'orangge.jpg', price: '4,000' },
            { name: 'Pineapple Juice', img: 'pineapple.jpg', price: '4,000' },
            { name: 'Lemonade', img: 'lemonade.jpg', price: '3,500' },
            { name: 'Banana Milk', img: 'milk.jpg', price: '4,500' },
            { name: 'Smoothie Mixed', img: 'smoothi mix.jpg', price: '5,000' },
            { name: 'Smoothie Mango', img: 'mango.jpg', price: '5,000' },
            { name: 'Smoothie Kiwi', img: 'kiwi.jpg', price: '4,000' }
        ]
    }
};

let currentLang = 'ku';

// Language Toggle Logic
const langBtn = document.getElementById('langBtn');
const langBox = document.getElementById('langBox');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langBox.style.display = langBox.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
    langBox.style.display = 'none';
});

function changeLang(lang) {
    currentLang = lang;

    // نڤێسینا ناڤێ دوکمێ ب سێ زمانان
    const btnTexts = { ku: 'زمان', ar: 'اللغة', en: 'Language' };
    document.getElementById('btn-text').innerText = btnTexts[lang];
    renderCategories();
}

function renderCategories() {
    const container = document.getElementById('cat-container');
    container.innerHTML = Object.keys(menuData).map(key => `
        <div class="cat-item" onclick="showItems('${key}')" id="cat-${key}">
            <i class="fas ${menuData[key].icon}"></i>
            <p>${menuData[key].title[currentLang]}</p>
        </div>
    `).join('');
    
    // ل دەسپێکێ هەمی ئایتمان نیشان بدە
    showItems('all');
}

function showItems(catId) {
    document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
    document.getElementById(`cat-${catId}`).classList.add('active');

    const container = document.getElementById('items-container');
    container.innerHTML = '';

    let items = [];

    // ئەگەر "هەمی" هاتە هەلبژارتن، هەمی لیستان کۆم بکە
    if (catId === 'all') {
        Object.keys(menuData).forEach(key => {
            if (menuData[key].items) {
                items = items.concat(menuData[key].items);
            }
        });
    } else {
        items = menuData[catId].items || [];
    }

    container.innerHTML = items.map(item => `
        <div class="item-card">
            <div class="item-img">
                <img src="images/${item.img}" alt="${item.name}" 
                     onerror="this.src='https://via.placeholder.com/150?text=Luna+Bloom'" 
                     style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price} IQD</div>
            </div>
        </div>
    `).join('');
}

window.onload = renderCategories;