var iq = 0.00;
var money = 0;
var iqMulti = 1;
var costMulti = 0.05;
var minIq = 0.999999999;

//---------------------------------------
function showMenu() {
        document.getElementById("showMainMenu").style = "display: block";
        document.getElementById("hideMainMenuButton").style = "display: none";
        document.getElementById("hideMain").style = "display: none";
};
//---------------------------------------

function addIq() {
    var showIq = `${(iq += 0.1 * iqMulti).toFixed(1)}`;
    document.getElementById("showIq").innerHTML = showIq
}
function sellIq() {
    if (!(iq <= minIq)) {
        var totalMoney = `Money:  ${(money += minIq * 0.03).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney

        var showIq = `${(iq -= minIq).toFixed(0)}`;
        document.getElementById("showIq").innerHTML = showIq
    } else return
}

function addIqMulti() {
    if (money >= costMulti) {

        var totalMoney = `Money:  ${(money -= costMulti).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney

        var showIqMulti = `${(iqMulti += 0.1).toFixed(1)}x`;
        document.getElementById("showIqMulti").innerHTML = showIqMulti

        var showCostMulti = costMulti += 0.025
        document.getElementById("showCostMulti").innerHTML = showCostMulti
    } else return
}

//---------------------------------------