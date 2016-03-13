angular.module('application').controller("PlaylistsCtrl", function($scope) {
  $scope.playlists = [

  { title: 'Playlist1', id: 1 },

  { title: 'Playlist2', id: 2 },

  { title: 'Playlist3', id: 3 },

  { title: 'Playlist4', id: 4 },

  { title: 'Playlist5', id: 5 },

  { title: 'Playlist6', id: 6 }

  ];

});






/*angular.module('application').controller('MusicCtrl', function($scope) {
$scope.tracks = [
{
url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3', //lien
artist: 'The Police', //artiste
title: 'Message in a bottle',
art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
},
{
url: '/storage/emulated/0/xepher.mp3',
artist: 'The Police',
title: 'Roxane',
art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
}
];
$scope.stopPlayback = function() {
MediaManager.stop();
};
});*/

//Variable globale
var nom_fichier; // variable contenant le nom du fichier avec l'extention
var lien; //le chemin d'accees du fichier android
var mp3Folder; //Le dossier musique situé dans la carte sd  (a la a racine)
var media; //l'objet media qui permet de lire la musique
var mediaTimer = null;
var playPause = false;
var couleurPlayer = "royal"; //la
//Constante



angular.module('application').controller('MusicCtrl', function($scope,$ionicLoading) { //le module application et le controller musicCtrl
  $scope.download = function() { //fonction

    //le scanner de fichier
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(entry,dirEntry) {


      document.addEventListener("deviceready", init, false);



      mp3Folder = "Music"; //Le dossier musique situé dans la carte sd  (a la a racine)
      var result;


      function init() { //fonction init


        window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + mp3Folder, //on va dans la carte sd
          function(dir,mediaError) {
            var reader = dir.createReader();
            //lire

            reader.readEntries(function(entries) {
              console.log("readEntries");
              console.dir(entries);


              var tailleTableau = entries.length;
              console.log("tailleTableau",tailleTableau);
              var indice = 0;
              console.log(indice,"indice");




for (var i = 0; i < tailleTableau; i++) {
  var m1 = new Musique(60,entries[i].name, entries[i].nativeURL,"cédric","nobé");


}


m1.inputBD();
var m2 = new Musique();
var m3 = m2.recupBD("m0");
alert(m3.titre);
$scope.couleur = couleurPlayer; //couleur du player
var pl1 = new Playlist("toto");
//pl1.creaPlaylist(1,"vide", "vide","vide","vide", "vide", "vide","vide");
console.log("pl1",pl1);
              //le player de fichier


              console.log(lien,"lien",nom_fichier,"fichier",indice,"indicedd");


              //la methode qui permet de lire le fichier audio (play)

                $scope.play = function() { //fonction play
                lien =  entries[indice].nativeURL; //le lien du fichier audio dans la carte sd

                media = new Media(lien, null, mediaError);
//play audio
media.play();


            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    media.getCurrentPosition(

                        // success callback
                        function(position) {
                            if (position > -1) {
                              console.log(position,mediaTimer);
                              setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
$scope.listemusique = entries; //liste les musiques









          nom_fichier = entries[indice].name; //le nom du fichier audio
          $scope.titre = nom_fichier; //copie le contenue de la variable nom_fichier dans un scope qui a pour nom titre



              }
              $scope.next = function() { //fonction suivant

                media.stop();
                $scope.play();
                notification();
                console.log("next",$scope.next,"indice",indice,"tailleTableau" ,tailleTableau,"nom_fichier",nom_fichier);



                indice++;
                if (indice > tailleTableau +1) {

                  indice = 0;

                }

              }







              $scope.previous = function() { //fonction precedent
                media.pause();
                $scope.play();
                notification();


                console.log("previous",$scope.previous,"indice",indice,"tailleTableau" ,tailleTableau);
                indice--;

                if (indice > tailleTableau -1) {



                  indice = 0;
                }
              }

              function notification() { //fonction qui lance une notification a chaque musique
                //notification
                document.addEventListener('deviceready', function () {
                // Schedule notification for tomorrow to remember about the meeting
                cordova.plugins.notification.local.schedule({

                  title: "Nuance",
                  message: nom_fichier,
                  icon: 'http://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_play_circle_outline_48px-128.png',
                })

              });
              }







              //le scanner de fichier

              entries.forEach(function(entry,tab) { //on parcours le nombre de ficher
                var name = entry.name;
                //console.log(name);


              entry.file(function(file) {

                ID3.loadTags(name,function() {
                  var tags = ID3.getAllTags(name);
                  console.log("got tags for "+name, tags);
                },{
                  dataReader:FileAPIReader(file)
                });

              });


            });

            });
}, function(err) {
});
}
init();
})
}
});


angular.module('application').controller('BarCtrl', function($cordovaStatusbar) {

  $cordovaStatusbar.overlaysWebView(true);

  // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
  $cordovaStatusbar.style(1);

  // supported names: black, darkGray, lightGray, white, gray, red, green,
  // blue, cyan, yellow, magenta, orange, purple, brown
  $cordovaStatusbar.styleColor('white');

  //$cordovaStatusbar.styleHex('#000');


  $cordovaStatusbar.show();

  var isVisible = $cordovaStatusbar.isVisible();

});
