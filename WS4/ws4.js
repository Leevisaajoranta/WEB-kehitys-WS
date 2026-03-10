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


