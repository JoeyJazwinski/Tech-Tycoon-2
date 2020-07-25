const closeMenu = (id) => {
    hide(get(id));
}

function openShop() {
    hide(get('upgradeGui'));
    unhide(get('shopGui'));

    // Unselect all shopCategory buttons
    const shopCategories = document.getElementsByClassName('shopCategory');
    for (let i = 0; i < shopCategories.length; i++) {
        const shopCategory = shopCategories[i];
        removeCSS(shopCategory, 'selected');
    }
    addCSS(shopCategories[0], 'selected');
}

function openUpgrade() {
    hide(get('shopGui'));
    unhide(get('upgradeGui'));
}

const openShopCategory = (selectedShopCategory) => {
    const shopCategories = document.getElementsByClassName('shopCategory');
    for (let i = 0; i < shopCategories.length; i++) {
        const shopCategory = shopCategories[i];
        removeCSS(shopCategory, 'selected');
    }
    addCSS(selectedShopCategory, 'selected');
}

// TODO: Joey fillin
const items = [
    {
        image: 'MONITER',
        name: 'Acer CB272',
        description: 'Cheap Starting Moniter',
        price: 100,
    },
    {
        image: 'MONITER',
        name: 'Samsung XD2400',
        description: 'Slightly Better Moniter',
        price: 109,
    },
    {
        image: 'MONITER',
        name: 'Asus RX42',
        description: 'Good Moniter With Good Graphics',
        price: 119,
    },
    {
        image: 'MONITER',
        name: 'Samsung XD2400',
        description: 'Slightly Better Moniter',
        price: 109,
    },
    {
        image: 'MONITER',
        name: 'HP CB324',
        description: 'Really Good Garphics',
        price: 139,
    },
    {
        image: 'MONITER',
        name: 'Samsung XD2400',
        description: 'Slightly Better Moniter',
        price: 109,
    },
    {
        image: 'MONITER',
        name: 'Acer UHD420',
        description: 'Amazing Grahics Quality And 144hz Refresh Rate',
        price: 169,
    }
];
