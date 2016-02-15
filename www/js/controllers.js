//angular.module('application').controller('MusicCtrl', function($scope) {
angular.module('application').controller('MusicCtrl', function($scope, $cordovaMedia, $ionicLoading) {


  $scope.play = function(src) {
      var media = new Media(src, null, null, mediaStatusCallback);
      $cordovaMedia.play(media);
  }

  var mediaStatusCallback = function(status) {
      if(status == 1) {
          $ionicLoading.show({template: 'Loading...'});
      } else {
          $ionicLoading.hide();
      }
  }

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



angular.module('nuance.controllers', []);
angular.module('application').controller('TestCtrl', function($scope, $cordovaVibration) {

  $scope.duration = 100;

  $scope.vibrate = function(){
    console.log("vibrating");
    $cordovaVibration.vibrate($scope.duration);
  }
});









angular.module('application').controller('fileCtrl', function($scope, $log, $cordovaFile, $window, $q, $cordovaFileError) { //player


  $scope.inputs = {
    checkDir: "Music",
    checkFile: "*",
    createDirectory: "test_directory",
    createFile: "test_file.txt",
    removeDirectory: "test_directory",
    removeFile: "test_file.txt",
    removeRecursively: "test_directory/test_file.txt",
    writeText: "THIS TEXT IS WRITTEN TO THIS FILE",
    writeFile: "test_file.txt",
    writeExistingText: "Write this text to an existing file",
    writeExistingFile: "test_file.txt",
    readFile: "test_file.txt",
    moveDirectory: "test_directory",
    moveFile: "test_file.txt",
    copyDirectory: "test_directory",
    copyFile: "test_file.txt"
  };

  $scope.test = function () {
    document.addEventListener('deviceready', function () {

      var newPath = cordova.file.externalRootDirectory;
      var test = DirectoryEntry(newPath);
console.log(newPath);
      console.log(test);
      /*
       try {
       var path = cordova.file.applicationDirectory;
       var newFileName;
       var fileName = newFileName = "test_file.txt";
       var newPath = cordova.file.tempDirectory;

       var q = $q.defer();
       $window.resolveLocalFileSystemURL(path, function (fileSystem) {
       fileSystem.getFile(fileName, {create: false}, function (fileEntry) {

       var newPathName = newPath.substring(newPath.lastIndexOf('/'));

       console.log(newPathName);

       //var parentEntry = new DirectoryEntry(newPathName, newPath);
       fileEntry.moveTo(newPath, newFileName, function (result) {
       console.log(result)
       }, function (error) {
       console.log(error)
       });

       }, function (err) {
       console.log(err);
       });
       }, function (er) {
       console.log(er);
       });
       } catch (e) {
       console.log(e);
       }

       */
    });
  };


  $scope.checkDir = function () {

    document.addEventListener('deviceready', function () {


      // path, directory
      $cordovaFile.checkDir(cordova.file.externalRootDirectory, $scope.inputs.FileSystem).then(function (success) {
        console.log($scope.inputs.checkDir);
        console.log(cordova.file.externalRootDirectory);
        $scope.checkDirResult = 'success ' + JSON.stringify(success);
      }, function (error) {
        $scope.checkDirResult = 'error ' + JSON.stringify(error);
      });
    });
  };


  $scope.checkFile = function () {
    document.addEventListener('deviceready', function () {
      // path, file
      $cordovaFile.checkFile(cordova.file.externalRootDirectory, $scope.inputs.checkFile).then(function (success) {
        console.log($scope.inputs.checkFile);
        console.log(cordova.file.externalRootDirectory);
        console.log($scope.checkFileResult);
        $scope.checkFileResult = 'success ' + JSON.stringify(success);
      }, function (error) {
        $scope.checkFileResult = 'error ' + JSON.stringify(error);
      });
    });
  };









angular.module('application').controller('Achatinapp', function($scope) { //player


});


angular.module('application').controller('notification_lecture_en_cours', function($scope) { //player


});
