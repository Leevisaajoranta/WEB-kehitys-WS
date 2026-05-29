const sisalto = document.querySelector("#sisalto");

// otsikko
const otsikko = document.createElement("h3");
otsikko.textContent = "Etusivun uutinen";

otsikko.style.color = "Blue";
otsikko.style.fontSize = "30px";

sisalto.appendChild(otsikko);

// Kuva
const kuva = document.createElement("img");
kuva.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/3rd_generation_Honda_N-BOX_Custom.jpg/1280px-3rd_generation_Honda_N-BOX_Custom.jpg";

kuva.style.width = "400px";
kuva.style.height = "200px";

sisalto.appendChild(kuva);

// luodaan nappien "container" div
const nappialue = document.createElement("div");
nappialue.style.marginTop = "10px";

// lisätään se DIVin jälkeen (DIVin ulkopuolelle)
sisalto.insertAdjacentElement("afterend", nappialue);

// nappi 1
const piilota = document.createElement("button");
piilota.textContent = "Piilota uutinen";
piilota.style.marginRight = "10px";

// nappi 2
const nayta = document.createElement("button");
nayta.textContent = "Näytä uutinen";

// lisätään napit nappialueeseen
nappialue.appendChild(piilota);
nappialue.appendChild(nayta);

// kuuntelijat
piilota.addEventListener("click", () => {
  sisalto.style.display = "none";
});

nayta.addEventListener("click", () => {
  sisalto.style.display = "block";
});

const valikko = document.querySelector("#mySelect");
const autoKuva = document.querySelector("#carimage");

function vaihdaAuto() {
    alert("Valitsit: " + valikko.value);

    if (valikko.value === "BMW") {
        autoKuva.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
    } else if (valikko.value === "Audi") {
        autoKuva.src = "https://www.pngplay.com/wp-content/uploads/13/Audi-RS5-PNG-Clipart-Background.png";
    } else if (valikko.value === "Mercedes") {
        autoKuva.src = "https://www.pngall.com/wp-content/uploads/19/Sophisticated-Mercedes-Car-Design-Element-PNG.png";
    } else if (valikko.value === "Volvo") {
        autoKuva.src = "https://www.pngall.com/wp-content/uploads/2/Volvo-PNG-Pic.png";
    }
}

valikko.addEventListener("change", vaihdaAuto);

autoKuva.addEventListener("mouseover", function () {
    autoKuva.style.border = "5px solid green";
});

autoKuva.addEventListener("mouseout", function () {
    autoKuva.style.border = "none";
});

const lisaaNappi = document.querySelector("#Insert");

lisaaNappi.addEventListener("click", () => {

    const nimi = document.querySelector("#nimi").value;
    const tehtava = document.querySelector("#tehtava").value;
    const palkka = document.querySelector("#palkka").value;

    // Validointi
    if (nimi.length <= 5) {
        alert("Nimen tulee olla yli 5 merkkiä pitkä.");
        return;
    }

    if (tehtava.trim() === "") {
        alert("Tehtävä ei saa olla tyhjä.");
        return;
    }

    if (palkka <= 0 || isNaN(palkka)) {
        alert("Palkan tulee olla numero ja suurempi kuin 0.");
        return;
    }

    // Lisätään rivi taulukkoon
    const taulukko = document.querySelector("#data tbody");

    const uusiRivi = taulukko.insertRow();

    const solu1 = uusiRivi.insertCell();
    const solu2 = uusiRivi.insertCell();
    const solu3 = uusiRivi.insertCell();

    solu1.textContent = nimi;
    solu2.textContent = tehtava;
    solu3.textContent = palkka;

    alert("Rivi lisätty!");

    // Tyhjennetään kentät
    document.querySelector("#nimi").value = "";
    document.querySelector("#tehtava").value = "";
    document.querySelector("#palkka").value = "";
});
