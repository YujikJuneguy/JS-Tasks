let area = +prompt('ev nece kvadratdir?');
if (area < 2000) {
    alert('2000 kvadratdan az olan ev mene maraqli deyil.');
} 
    let price = +prompt('ev neceyedir?');
    if (price !== 99.999) {
        alert('qiymet mehs 99.999 AZN olmalidir, maash aldim ');
    }
    let currency = prompt('AZN yoxsa dollar?');
    if (currency != 'AZN') {
        alert('mehs AZN olsun');
    }
    let who = prompt('makler filan deyilsiz?');
    if (who !== 'ev yiyesi') {
        alert('makler ve alvercilernen ish gormurem ');
    } else{
      alert('xoshuma geldi, aliram');
    }
            
 