
function Musique(d,t,u,ar,al) {
  // Pour les musiques, le constructeur est : durée, titre, url, artiste, album
  this.duree=d;
  this.titre=t;
  this.url=u;
  this.date_ajout;
  this.artiste=ar;
  this.album=al;
  this.emobulle="vide";
  this.tag1="vide";
  this.tag2="vide";
  this.tag3="vide";
  this.nbecoute=0;

  // Sert à assigner des id
  var x=0;
  var bool=true;
  while(bool==true){
    var str="m"+x;
  if(localStorage.getItem(str)!=null){
    x++;
  }
  else{
    bool=false;
     this.id="m"+x;
  }
  }

  this.inputBD=function(){ // Permet d'insérer une musique dans la bd
  var versJson = JSON.stringify(this); // j'ai fait un stringify de this, ça permet de transformer l'élément courant (ma musique) en JSon
  localStorage.setItem(this.id,versJson);
  };
  this.recupBD=function(id){ // Récupère la musique de la bd
  var monobjet_json = localStorage.getItem(id);
  var musique = JSON.parse(monobjet_json);
  return musique;
  };
  this.effacer=function(id){ // Efface la musique
  localStorage.removeItem(id);
  };
  this.effacerBD=function(){
    localStorage.clear(); // /!\ ATTENTION CA EFFACE TOUTE LA BASE DE DONNEES
  };
  this.setEmo=function(nomemo){
    this.emobulle=nomemo;
  };

}
