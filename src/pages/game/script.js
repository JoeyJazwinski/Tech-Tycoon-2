function openShop() {

    if (document.getElementById('shopGui').style.display='none') {
        document.getElementById('shopGui').style.display='inline-block';
    }   
    if (document.getElementById('upgradeGui').style.display='inline-block') {
        document.getElementById('upgradeGui').style.display='none';
    }
}

function openUpgrade() {

    if (document.getElementById('upgradeGui').style.display='none') {
        document.getElementById('upgradeGui').style.display='inline-block';
    }
    if (document.getElementById('shopGui').style.display='inline-block') {
        document.getElementById('shopGui').style.display='none';
    }
    
}