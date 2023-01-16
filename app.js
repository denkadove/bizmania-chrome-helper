table = document.getElementById("goods");
tableBody = table.childNodes[2]
rows = tableBody.getElementsByTagName('tr');
rowsCount = rows.length;

let tds, balanceCount,salesCount,orderCount;

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

for (let i = 0; i <= (rowsCount -1) ; i++) {
    tds = rows[i].getElementsByTagName('td');
    if (isInt(parseInt(tds[5].innerHTML.replaceAll(/\s/g,'')))) {
        balanceCount = parseInt(tds[5].innerHTML.replaceAll(/\s/g,''));
        salesCount = parseInt(tds[12].getElementsByTagName('a')[0].innerHTML.replaceAll(/\s/g,''));
        //orderCount = parseInt(tds[14].getElementsByTagName('div')[1].childNodes[0].value.replaceAll(/\s/g,''));
        orderCount = Math.ceil((salesCount-balanceCount)*1.05);
        if (orderCount > 0) {
            tds[14].getElementsByTagName('div')[1].childNodes[0].value = orderCount;
        } else {
            tds[14].getElementsByTagName('div')[1].childNodes[0].value = 0;
        }
    } else {
        continue;
    }
    console.log(balanceCount,'=>', salesCount,'=>', Math.ceil((balanceCount-salesCount)*1.05));
}

