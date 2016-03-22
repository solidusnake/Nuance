//Variables globales
var varmusique; // variable contenant l'objet Musique de la musique en cours
var musiqueplaying; // Variable contenant l'objet Média de la musique
var mp3Folder="Music"; //Le dossier qui va être analysé sur l'allapreil de l'utilisateur
var entries;// Tableau qui va recueuillir les musiques de l'utilisateur
var premiereutilisation=false;
var playing=false; // Booléen qui révèle si une musique est en cours d'écoute, par défaut ce n'est pas le cas
var timezik=0; // Temps en millisecondes de la musique jouée écoulé
var intervalzik; // setInterval qui incrémente timezik tous les millièmes de secondes
angular.module('application').controller('MusicCtrl', function($scope,$ionicLoading) {
//le module application et le controller musicCtrl, actif globalement dans toutes les pages de l'application
  document.addEventListener("deviceready", init, false); // On attend que le smartphone soit prêt
  function init(){ //On lance init lorsqu'il est prêt
    if(premiereutilisation==false){ // Lorsqu'on lance l'application, on va lire les musiques de l'utilisateur
      premiereutilisation=true; // Cette fonction s'applique qu'une seule fois
      window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + mp3Folder, //on va dans la carte sd
        function(dir,mediaError) {
          var reader = dir.createReader(); // On crée un reader qui va lire les fichiers
          reader.readEntries(function(entries) {   //lit tout le contenu du répertoire
          for (var i = 0; i < entries.length; i++) { // tant que toutes les musiques n'ont pas été parcourues
            var duree=0; // on définit plus tard la durée de la musique
            var m1 = new Musique(duree,entries[i].name, entries[i].nativeURL,"","");
            // on crée une nouvelle musique avec ses spécificités propres
            m1.inputBD(); // on l'ajoute dans le localStorage
        }
      });
    });
  }
  var m=new Musique();
  var maxid=m.maxId();
  var tab=m.recupTout();
  $scope.listemusique = tab;  //liste les musiques
}


$scope.jouer = function(idmus) { //joue une musique sélectionnée
  if(playing==false){
    playing=true;
  }
  else{
    musiqueplaying.stop();
  }
  document.addEventListener("deviceready", init, false);
  function init(){
    var m=new Musique();
    var m2=m.recupBD(idmus);
    varmusique=m2;
    lien_en_cours=m2.url;
    musiqueplaying = new Media(lien_en_cours);
    changecolor(m2.emobulle);
    musiqueplaying.play();
    clearInterval(intervalzik);
    timezik=0;
    intervalzik=setInterval(function(){timezik=timezik+1.1;},10);

  }

}
$scope.repeat = function() { //fonction precedent
  musiqueplaying.stop();
  clearInterval(intervalzik);
  timezik=0;
  musiqueplaying.play();
  intervalzik=setInterval(function(){timezik=timezik+1;},10);
  }
$scope.playpause = function() { //fonction precedent
  if(playing==true){
    musiqueplaying.stop();
    clearInterval(intervalzik);
    var i=document.getElementById("playpause");
    i.className="icon ion-pause";
    playing=false;
  }
  else{
    musiqueplaying.play();
    musiqueplaying.seekTo(timezik*10);
    intervalzik=setInterval(function(){timezik=timezik+1;},10);
    playing=true;
    var i=document.getElementById("playpause");
    i.className="icon ion-play";
  }
}
$scope.next = function() { //fonction suivant
  clearInterval(intervalzik);
  timezik=0;
  var m=new Musique();
  var max=m.maxId()+1;
  musiqueplaying.stop();
  var idmusact=varmusique.id;
  var num=idmusact.substring(1,idmusact.length);
  var id=parseInt(num);
  id=id+1;
  if(max==id){
    id=0;
  }
  m=m.recupBD("m"+id);
  varmusique=m;
  changecolor(varmusique.emobulle);
  lien_en_cours=m.url;
  musiqueplaying = new Media(lien_en_cours);
  musiqueplaying.play();
}
$scope.previous = function() { //fonction precedent
  clearInterval(intervalzik);
  timezik=0;
  var m=new Musique();
  var max=m.maxId();
  musiqueplaying.stop();
  var idmusact=varmusique.id;
  var num=idmusact.substring(1,idmusact.length);
  var id=parseInt(num);
  id=id-1;
  if(id<0){
    id=max;
  }
  m=m.recupBD("m"+id);
  varmusique=m;
  changecolor(varmusique.emobulle);
  lien_en_cours=m.url;
  musiqueplaying = new Media(lien_en_cours);
  musiqueplaying.play();
}
function changecolor(emobulle){
  $("#auteur").html(varmusique.artiste);
  $("#titre").html(varmusique.titre);
  if(emobulle=="colere"){
    $("i").css("color","#E6312F");
$("#emo").attr("src","img/PNG/colere.png");}
  if(emobulle=="espoir"){
    $("i").css("color","#8DBF43");
$("#emo").attr("src","img/PNG/espoir.png");}
  if(emobulle=="joie"){
    $("i").css("color","#FFCE0E");
$("#emo").attr("src","img/PNG/joie.png");}
  if(emobulle=="energie"){
    $("i").css("color","#F28F1A");
$("#emo").attr("src","img/PNG/energie.png");}
  if(emobulle=="passion"){
    $("i").css("color","#AD145A");
$("#emo").attr("src","img/PNG/passion.png");}
  if(emobulle=="melancolie"){
    $("i").css("color","#654897");
$("#emo").attr("src","img/PNG/melancolie.png");}
  if(emobulle=="reve"){
    $("i").css("color","#335CA7");
$("#emo").attr("src","img/PNG/reve.png");}
  if(emobulle=="calme"){
    $("i").css("color","#44CDEF");
$("#emo").attr("src","img/PNG/calme.png");}
  if(emobulle=="tendresse"){
    $("i").css("color","#E85D9D");
$("#emo").attr("src","img/PNG/tendresse.png");}
  if(emobulle=="tristesse"){
    $("i").css("color","#707070");
$("#emo").attr("src","img/PNG/tristesse.png");}
  if(emobulle=="vide"){
    $("i").css("color","#101010");
$("#emo").attr("src","img/PNG/vide.png");}
}

function notification() { //fonction qui lance une notification a chaque musique
  //notification
  document.addEventListener('deviceready', function () {
    // Schedule notification for tomorrow to remember about the meeting
    cordova.plugins.notification.local.schedule({
      title: "Nuance",
      message: nom_fichier,
      icon: 'http://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_play_circle_outline_48px-128.png',
    });

  });
}
});



angular.module('application').controller('BarCtrl', function($cordovaStatusbar) {

  $cordovaStatusbar.overlaysWebView(true);
  $cordovaStatusbar.style(1);
  $cordovaStatusbar.styleColor('white');
  $cordovaStatusbar.show();

  var isVisible = $cordovaStatusbar.isVisible();

});

angular.module('application').controller('emobulles', function($scope,$ionicLoading) {
  var m=new Musique();
  var tab=m.recupTout();
  $scope.listemusique = tab;
$scope.changeEmo = function(id,emo) {
$("#"+id).attr("src","img/PNG/"+emo+".png");
var m=new Musique();
var m1=m.recupBD(id);
console.dir(m1);
m.setEmo(m1,emo);
}
});
