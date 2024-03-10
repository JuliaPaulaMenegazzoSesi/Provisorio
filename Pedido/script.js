var destG;
var hospG;
var planG;
var packG;
var tempG;
var totalG;

var registro = new Date();

dt = formatarData(registro)

function formatarData(item){

    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}

function calcular() {
    var selectDest = document.getElementById("desSelect");
    var selectHosp = document.getElementById("hosSelect");
    var selectPlan = document.getElementById("plaSelect");
    var selectPack = document.getElementById("pacSelect");
    var selectTemp = document.getElementById("temSelect");
    var totalPrint = document.getElementById("totalP");
    

    var dest = "";
    var hosp = "";
    var hospPreco = 0;
    var plan = "";
    var planPreco = 0;
    var pack = "";
    var temp = "";
    var tempPreco = 0;
    var total = 0;

    switch (selectDest.value) {
        case "salvador":
            dest = "Salvador"
            total += 900.00
            break;
        case "rj":
            dest = "Rio de Janeiro"
            total += 450.00
            break;
        case "veneza":
            dest = "Veneza"
            total += 6000.00
            break;
        case "kilimanjaro":
            dest = "Kilimanjaro"
            total += 9000.00
            break;
        case "manila":
            dest = "Manila"
            total += 6500.00
            break;
    }
    switch (selectHosp.value) {
        case "hotel":
            hosp = "Hotel"
            hospPreco = 200
            break;
        case "hostel":
            hosp = "Hostel"
            hospPreco = 50
            break;
        case "pousada":
            hosp = "Pousada"
            hospPreco = 150
            break;
        case "casa":
            hosp = "Casa"
            hospPreco = 250
            break;
        case "sem-lugar":
            hosp = "Nenhuma hospedagem"
            hospPreco = 1
            break;
    }
    switch (selectPlan.value) {
        case "1pessoa":
            plan = "Para 1 pessoa"
            planPreco = 1
            break;
        case "2pessoas":
            plan = "Para 2 pessoas"
            planPreco = 2
            break;
        case "familia":
            plan = "Plano Família"
            planPreco = 3
            break;
        case "luademel":
            plan = "Plano Lua de Mel"
            planPreco = 1.5
            break;
        case "grupo":
            plan = "Grupo"
            planPreco = 6
            break;
    }
    switch (selectPack.value) {
        case "restaurante":
            pack = "Pacote Restaurantes"
            total += 350
            break;
        case "bar":
            pack = "Pacote Bares"
            total += 200
            break;
        case "passeio":
            pack = "Pacote Passeios"
            total += 500
            break;
        case "com-criança":
            pack = "Pacote Com Crianças"
            total += 400
            break;
        case "sem-pacote":
            pack = "Nenhum pacote"
            total += 0
            break;
    }
    switch (selectTemp.value) {
        case "5dias":
            temp = "5 dias"
            tempPreco = 1
            break;
        case "15dias":
            temp = "15 dias"
            tempPreco = 2.5
            break;
        case "mes":
            temp = "Mês"
            tempPreco = 5
            break; ''
        case "batevolta":
            temp = "Bate e volta"
            tempPreco = 0.3
            break;
        case "ida":
            temp = "Ida"
            tempPreco = 0.5
            break;
    }
    total += hospPreco * tempPreco * planPreco;
    console.log(total);

    document.getElementById("destP").textContent = dest;
    document.getElementById("hospP").textContent = hosp;
    document.getElementById("planP").textContent = plan;
    document.getElementById("packP").textContent = pack;
    document.getElementById("tempP").textContent = temp;
    totalPrint.textContent = `R$${total.toFixed(2)}`

    destG = dest;
    hospG = hosp;
    planG = plan;
    packG = pack;
    tempG = temp;
    totalG = total;
}

function enviar() {
    var numTel = "5541999999999"

    var linkWpp = "https://wa.me/" + numTel + "?text=Total: R$" + totalG + " - Data: " + dt;

    window.open(linkWpp, "_blank");
}