var sex = 0;
var money = 0;
var sexMulti = 1;
var costMulti = 0.025;


function addSex() {
    var showSex = `You have this many Sex:  ${(sex += 0.1 * sexMulti).toFixed(2)}`;
    document.getElementById("showSex").innerHTML = showSex
}

function sellSex() {
    if (sex >= 0.999999999) {
        var totalMoney = `Money:  ${(money += 1 * 0.03).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney

        var showSex = `You have this many Sex:  ${(sex -= 0.999999999).toFixed(2)}`;
        document.getElementById("showSex").innerHTML = showSex
    } else return
}

function addSexMulti() {
    if (money >= costMulti) {

        var totalMoney = `Money:  ${(money -= costMulti).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney

        var showMulti = `Sex Multi:  ${(sexMulti += 0.1).toFixed(1)}x`;
        document.getElementById("showMulti").innerHTML = showMulti

        var showCostMulti = costMulti += 0.1
        return showCostMulti
    } else return
}

