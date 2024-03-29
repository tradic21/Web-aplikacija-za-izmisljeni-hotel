const express = require('express');
const server = express();
const port = 12451; 
const putanja = __dirname;

server.use(express.static(putanja));

server.get("/", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/index.html");
});

server.get("/bazen", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/bazen.html");
});

server.get("/cjenik_usluga", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/cjenik_usluga.html");
});

server.get("/galerija_slika", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/galerija_slika.html");
});

server.get("/interaktivna_slika", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/interaktivna_slika.html");
});

server.get("/karta_lokacije", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/karta_lokacije.html");
});

server.get("/obiteljski_paket", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/obiteljski_paket.html");
});

server.get("/obrazac_kontakt", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/obrazac_kontakt.html");
});

server.get("/obrazac_rezervacija", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/obrazac_rezervacija.html");
});

server.get("/recepcija", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/recepcija.html");
});


server.get("/restoran", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/restoran.html");
});

server.get("/turanj", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/turanj.html");
});

server.get("/video", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/video.html");
});

server.get("/wellness_paket", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/ostalo/wellness_paket.html");
});

server.get("/autor", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/dokumentacija/autor.html");
});

server.get("/dokumentacija", (zahtjev, odgovor) => {
    console.log(zahtjev.query);
    odgovor.sendFile(putanja + "/html/dokumentacija/dokumentacija.html");
});

server.use('/javascript',express.static('/jsk/tradic21.js'));

server.use('/css',express.static('css'));

server.use('/dokumenti',express.static('dokumenti'));

server.listen(port, () => {
	console.log(`Server pokrenut na portu: ${port}`);
});
