
function provjeraKontakt(){
  var form = document.getElementById("kontaktForm");
    var errorMessage = document.getElementById("error-message");

    var regexProvjera=/[!?#<>]/;

    var predmet = document.getElementById("predmet").value;
      var poruka = document.getElementById("poruka").value;
      var vrstaUpita = document.querySelectorAll('input[name="vrstaupita"]:checked');

    
    document.getElementById("predmet").addEventListener("blur", function (){
      predmet = document.getElementById("predmet").value;
      if(document.getElementById("predmet").value == ""){
        errorMessage.style.display = "block"; 
        document.getElementById("predmet").classList.add("klasaError");
        errorMessage.innerHTML="<p>Unos predmeta prazan!</p>";
      }
      else if(regexProvjera.test(predmet)){
        errorMessage.style.display = "block"; 
        document.getElementById("predmet").classList.add("klasaError");
        errorMessage.innerHTML="<p>Neispravan unos znakova!</p>";
      }
      else{
        document.getElementById("predmet").classList.remove("klasaError");
      }
  })

  document.getElementById("poruka").addEventListener("blur", function (){
    poruka = document.getElementById("poruka").value;
    if(document.getElementById("poruka").value == ""){
      errorMessage.style.display = "block"; 
      document.getElementById("poruka").classList.add("klasaError");
      errorMessage.innerHTML="<p>Unos poruke prazan!</p>";
    }
    else if(regexProvjera.test(poruka)){
      errorMessage.style.display = "block"; 
      document.getElementById("poruka").classList.add("klasaError");
      errorMessage.innerHTML="<p>Neispravan unos znakova!</p>";
    }
    else{
      document.getElementById("poruka").classList.remove("klasaError");
    }
})


  
    form.addEventListener("submit", function(event) {
      predmet = document.getElementById("predmet").value;
      poruka = document.getElementById("poruka").value;
      vrstaUpita = document.querySelectorAll('input[name="vrstaupita"]:checked');
      event.preventDefault();
      error=false; 

      if (predmet === "" || poruka === "" || vrstaUpita.length === 0) {
        errorMessage.style.display = "block"; 
        error=true;
      } 

      if(predmet.length>30){
        errorMessage.style.display = "block"; 
        error=true;
      }
      
      if(regexProvjera.test(predmet)){
        errorMessage.style.display = "block"; 
        error=true;
      }

      if(poruka.length<10 || poruka.length>1000){
        errorMessage.style.display = "block"; 
        error=true;
      }

      if(regexProvjera.test(poruka)){
        errorMessage.style.display = "block"; 
        error=true;
      }

  
      if(error==false){
        form.submit();
      }

    });
  
    errorMessage.addEventListener("click", function() {
      errorMessage.style.display = "none"; 
    });


   


}




function provjeraRezervacija(){
  var form = document.getElementById("rezervacijaForm");
    var errorMessage = document.getElementById("error-message");
    
    var regexProvjera=/[!?#<>]/;

    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var telefon = document.getElementById("telefon").value;
    var email = document.getElementById("email").value;
    var brojOdraslih = document.getElementById("brojodraslih").value;
    var brojDjece = document.getElementById("brojdjece").value;
    var datumDolaska = document.getElementById("datumdolaska").value;
    var datumOdlaska = document.getElementById("datumodlaska").value;
    var vrijemeDolaska = document.getElementById("vrijemedolaska").value;
    var smjestaj = document.getElementById("smjestaj").value;
    var brojSoba = document.querySelectorAll('input[name="brojsoba"]:checked');

      document.getElementById("vrijemedolaska").disabled=true;

      document.getElementById("ime").addEventListener("blur", function (){
        ime = document.getElementById("ime").value;
        if(document.getElementById("ime").value == ""){
          errorMessage.style.display = "block"; 
          document.getElementById("ime").classList.add("klasaError");
          errorMessage.innerHTML="<p>Unos imena prazan!</p>";
        }
        else if(regexProvjera.test(ime)){
          errorMessage.style.display = "block"; 
          document.getElementById("ime").classList.add("klasaError");
          errorMessage.innerHTML="<p>Neispravan unos znakova!</p>";
        }
        else{
          document.getElementById("ime").classList.remove("klasaError");
        }
    })

    document.getElementById("prezime").addEventListener("blur", function (){
      prezime = document.getElementById("prezime").value;
      if(document.getElementById("prezime").value == ""){
        errorMessage.style.display = "block"; 
        document.getElementById("prezime").classList.add("klasaError");
        errorMessage.innerHTML="<p>Unos prezimena prazan!</p>";
      }
      else if(regexProvjera.test(prezime)){
        errorMessage.style.display = "block"; 
        document.getElementById("prezime").classList.add("klasaError");
        errorMessage.innerHTML="<p>Neispravan unos znakova!</p>";
      }
      else{
        document.getElementById("prezime").classList.remove("klasaError");
      }
  })

  document.getElementById("telefon").addEventListener("blur", function (){
    telefon = document.getElementById("telefon").value;
    if(document.getElementById("telefon").value == ""){
      errorMessage.style.display = "block"; 
      document.getElementById("telefon").classList.add("klasaError");
      errorMessage.innerHTML="<p>Unos telefona prazan!</p>";
    }
    else if(regexProvjera.test(telefon)){
      errorMessage.style.display = "block"; 
      document.getElementById("telefon").classList.add("klasaError");
      errorMessage.innerHTML="<p>Neispravan unos znakova!</p>";
    }
    else{
      document.getElementById("telefon").classList.remove("klasaError");
    }
})

document.getElementById("email").addEventListener("blur", function (){
  email = document.getElementById("email").value;
  if(document.getElementById("email").value == ""){
    errorMessage.style.display = "block"; 
    document.getElementById("email").classList.add("klasaError");
    errorMessage.innerHTML="<p>Unos emaila prazan!</p>";
  }
  else if(regexProvjera.test(email)){
    errorMessage.style.display = "block"; 
    document.getElementById("email").classList.add("klasaError");
    errorMessage.innerHTML="<p>Neispravan unos znakova!</p>";
  }
  else{
    document.getElementById("email").classList.remove("klasaError");
  }
})
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      error=false; 

      ime = document.getElementById("ime").value;
      prezime = document.getElementById("prezime").value;
      telefon = document.getElementById("telefon").value;
      email = document.getElementById("email").value;
      brojOdraslih = document.getElementById("brojodraslih").value;
      brojDjece = document.getElementById("brojdjece").value;
      datumDolaska = document.getElementById("datumdolaska").value;
      datumOdlaska = document.getElementById("datumodlaska").value;
      vrijemeDolaska = document.getElementById("vrijemedolaska").value;
      smjestaj = document.getElementById("smjestaj").value;
      brojSoba = document.querySelectorAll('input[name="brojsoba"]:checked');
  
      

      if (ime === "" || prezime === "" || telefon === "" || email=== "" || brojOdraslih=== "" || brojDjece=== "" || datumDolaska=== "" || datumOdlaska=== "" || vrijemeDolaska=== "" || smjestaj=== "" || brojSoba.length === 0) {
        errorMessage.style.display = "block"; 
        error=true;
      } 

      
      if(regexProvjera.test(ime)){
        errorMessage.style.display = "block"; 
        error=true;
      }

      if(regexProvjera.test(prezime)){
        errorMessage.style.display = "block"; 
        error=true;
      }

      if(regexProvjera.test(telefon)){
        errorMessage.style.display = "block"; 
        error=true;
      }

      if(regexProvjera.test(email)){
        errorMessage.style.display = "block"; 
        error=true;
      }

      if(ime.length>30){
        errorMessage.style.display = "block"; 
        error=true;
      }

      var trenutniDatum = new Date();
      var odabraniDatum = new Date(document.getElementById('datumdolaska').value);
      vrijemeDolaska = document.getElementById("vrijemedolaska").value;

      trenutniDatum.setHours(0,0,0,0);
      odabraniDatum.setHours(0,0,0,0);
      
      if (odabraniDatum < trenutniDatum) {
        errorMessage.style.display = "block"; 
        error=true;
      }else{
        document.getElementById("vrijemedolaska").disabled=false;
      }

      var odabraniOdlaska = new Date(document.getElementById('datumodlaska').value);
      if (odabraniOdlaska < odabraniDatum) {
        errorMessage.style.display = "block"; 
        error=true;
      }

      
      if (odabraniDatum.getTime() == trenutniDatum.getTime()) {
        console.log("Isti datum");
        trenutniDatum = new Date();
        odabraniDatum = new Date(document.getElementById('datumdolaska').value);
        vrijemeDolaska = document.getElementById("vrijemedolaska").value;
        
        var trenutniSati = trenutniDatum.getHours();
        var trenutnteMinute = trenutniDatum.getMinutes();
        var odabraniSati = parseInt(vrijemeDolaska[0]+vrijemeDolaska[1]);
        var odabraneMinute = parseInt(vrijemeDolaska[3]+vrijemeDolaska[4]);


        if (trenutniSati > odabraniSati) {
          console.log("Provjeravam sate");
          errorMessage.style.display = "block"; 
          error=true;
        }
        else if(trenutniSati == odabraniSati){
          console.log("Provjeravam minute");
          if(trenutnteMinute>odabraneMinute){
            errorMessage.style.display = "block"; 
            error=true;
          }
        }
      }

      
      if(error==false){
        form.submit();
      }

    });
  
    errorMessage.addEventListener("click", function() {
      errorMessage.style.display = "none"; 
    });
}



function rotiraj() {
  var element = document.getElementById('submit-button');
  var rotacija = 0;

  function rotirajElement() {
    rotacija += 2;
    element.style.transform = 'rotate(' + rotacija + 'deg)';

    if (rotacija < 360) {
      setTimeout(rotirajElement, 10);
    }
  }

  setTimeout(rotirajElement, 10);
}


function pomakniElement() {
  var element = document.getElementById('pozdrav');
  var pozicija = 0;
  var ciljnaPozicija = 300; 

  function pomici() {
    pozicija += 5;
    element.style.left = pozicija + 'px';

    if (pozicija < ciljnaPozicija) {
      setTimeout(pomici, 10);
    }
  }

  setTimeout(pomici, 10);
}

function animirajBoju() {
  var element = document.getElementById('colorful-element');
  var boje = ['#ff0000', '#00ff00', '#0000ff']; 
  var trenutnaBoja = 0;

  function promijeniBoju() {
    element.style.backgroundColor = boje[trenutnaBoja];

    trenutnaBoja = (trenutnaBoja + 1) % boje.length; 

    setTimeout(promijeniBoju, 1000); 
  }

  setTimeout(promijeniBoju, 0); 
}


  


const funkcije = window.location.pathname;
const str = funkcije.split('/').pop();
  document.addEventListener("DOMContentLoaded", function(){
    if(str=="cjenik_usluga.html"){
      tablicaCjenik();
    }

    if(str=="obrazac_kontakt.html"){
      provjeraKontakt();
    }

    if(str=="obrazac_rezervacija.html"){
      provjeraRezervacija();
    }

    if(str=="obrazac_kontakt.html"){
      rotiraj();
    }

    if(str=="index.html"){
      pomakniElement();
    }

    if(str=="index.html"){
      animirajBoju();
    }
  })

