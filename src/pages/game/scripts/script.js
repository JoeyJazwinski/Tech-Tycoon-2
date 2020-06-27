function openShop() {
    hide(get('upgradeGui'));
    unhide(get('shopGui'));
}

function openUpgrade() {
    hide(get('shopGui'));
    unhide(get('upgradeGui'));
}

function closeMenu(id) {
    hide(get(id));
}