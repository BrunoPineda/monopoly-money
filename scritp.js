const $ = selector => document.querySelector(selector)
const $form = $('#form')
const $results = $('#results')

function result(cont, banknotes, contBacknotes) {
    while (cont > 0) {
        if (banknotes[0] <= cont) {
            cont = cont - banknotes[0];
            contBacknotes[0]++;
            console.log("Se utilizo un billete de 500")
        } else if (banknotes[1] <= cont && banknotes[1] < banknotes[0]) {
            cont = cont - banknotes[1];
            contBacknotes[1]++;
            console.log("Se utilizo un billete de 100")
        } else if (banknotes[2] <= cont && banknotes[2] < banknotes[1]) {
            cont = cont - banknotes[2];
            contBacknotes[2]++;
            console.log("Se utilizo un billete de 50")
        } else if (banknotes[3] <= cont && banknotes[3] < banknotes[2]) {
            cont = cont - banknotes[3];
            contBacknotes[3]++;
            console.log("Se utilizo un billete de 20")
        } else if (banknotes[4] <= cont && banknotes[4] < banknotes[3]) {
            cont = cont - banknotes[4];
            contBacknotes[4]++;
            console.log("Se utilizo un billete de 10")
        } else if (banknotes[5] <= cont && banknotes[5] < banknotes[4]) {
            cont = cont - banknotes[5];
            contBacknotes[5]++;
            console.log("Se utilizo un billete de 1")
        } else if (banknotes[6] <= cont && banknotes[6] < banknotes[5]) {
            cont = cont - banknotes[6];
            contBacknotes[6]++;
            console.log("Se utilizo un billete de 1")
        }
        console.log('el contador esta en ' + cont)
    }
}

$form.addEventListener('submit', async(event) => {
    event.preventDefault();
    const change = document.getElementById('change').value;
    const profits = document.getElementById('profits').value;
    const banknotes = [500, 100, 50, 20, 10, 5, 1]
    const contBanknotes = [0, 0, 0, 0, 0, 0, 0];

    const vuelto = change - profits
    const cont = vuelto;
    console.log(cont);


    result(cont, banknotes, contBanknotes);
    console.log(contBanknotes)

    $results.innerHTML =
        "<h1>Dale de vuelto: </div>" +
        "<div id='money'>" +
        " <div class='a500' style='display: flex;" +
        " margin-bottom: 50px;'>" +
        "       <img src='https://pbs.twimg.com/media/DDHDmGFXUAAoR0_.jpg' alt=''>" +
        "      <div>x " + contBanknotes[0] + "</div>" +
        "   </div>" +
        "   <div id='a100' style='display: flex;" +
        "  margin-bottom: 50px;'>" +
        "      <img src='https://i.pinimg.com/originals/df/f9/73/dff9739f1fa028cc20da5999c7d54a43.jpg' alt=''>" +
        "       <div>x " + contBanknotes[1] + "</div>" +
        "   </div>" +
        "    <div id='a50' style='display: flex;" +
        "   margin-bottom: 50px;'>" +
        "       <img src='https://c8.alamy.com/compes/2fnt29b/cincuenta-unidades-monopoly-money-note-close-up-2fnt29b.jpg' alt=''>" +
        "       <div>x " + contBanknotes[2] + "</div>" +
        "    </div>" +
        "    <div id='a20' style='display: flex;" +
        "    margin-bottom: 50px;'>" +
        "       <img src='https://m.media-amazon.com/images/I/81CCVgIUsrL.jpg' alt=''>" +
        "     <div>x " + contBanknotes[3] + "</div>" +
        " </div>" +
        "   <div id='a10' style='display: flex;" +
        "  margin-bottom: 50px;'>" +
        "     <img src='https://i.ebayimg.com/images/g/dbIAAOSwhcJWKnBb/s-l500.jpg' alt=''>" +
        "    <div>x " + contBanknotes[4] + "</div>" +
        "  </div>" +
        "  <div id='a5' style='display: flex;" +
        "  margin-bottom: 50px;'>" +
        "     <img src='https://pbs.twimg.com/media/Esh01D_XUAUmh2l.jpg' alt=''>" +
        "    <div>x " + contBanknotes[5] + "</div>" +
        "  </div>" +
        "  <div id='a1' style='display: flex;" +
        "  margin-bottom: 50px;'>" +
        "     <img src='https://mostodd.files.wordpress.com/2011/01/monopoly_money_1.jpg' alt=''>" +
        "     <div>x " + contBanknotes[6] + "</div>" +
        "   </div>" +
        " </div>";
})