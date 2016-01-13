/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });



    //player
    var app = angular.module('starter', ['ionic']);




    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        //if (window.cordova && window.cordova.plugins.Keyboard) {
          //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        //}
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });

    app.controller('AudioController', function($scope, $ionicPlatform) {
    $scope.time = 0;
    $scope.time++;

    //chronometre
    function AlbumCtrl($scope,$timeout) {
     $scope.onTimeout = function(){
    if ($scope.counter > 0) {
               mytimeout = $timeout($scope.onTimeout,1000);

             }
           }
        $scope.playTrack = $timeout($scope.onTimeout,1000);

    }

    //console.log(time,"time");
    //tableau qui content la liste des sons ecouté par l'utilisateur id 1 correspond a l'id , la cle correspond au titre , track correspond au chemin d'accees
      var tableau = 4;
      var audio =  [{

        id: 1,
        key: 'master',
        title: "The Master",
        track: 'audio/The_Master.mp3',
        genre: "This will be card Description"

      }, {
        id: 2,
        key: 'give',
        title: "Give",
        track: 'audio/Give.mp3',
        genre: "Alternative & Punk | Bright"
      }, {
        id: 3,
        key: 'morning',
        title: "Morning Stroll",
        track: 'audio/Morning_Stroll.mp3',
        genre: "Classical | Happy"
      }, {
        id: 4,
        key: 'DMX',
        title: "Unknown",
        track: 'audio/Zone Of The Enders 2 OST - Beyond Bounds.mp3',
        genre: "This will be card Description"
      }, {
    }, ];



    console.log(audio);
    //parcours du tableau

    for (var i = 0; i < audio.length; i++) {

      $scope.audioTracks = function(track, key, title) {
        window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
        window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
            $scope.player.key = '';

       alert(audio[i]);
    }
    }

    //console.log(time);
      $scope.audioTracks = Array.prototype.slice.call(audio, 0);
      $scope.player = { //variable player
        key: '' // Holds a last active track
      }

      $ionicPlatform.ready(function() {

        $scope.playTrack = function(track, key, title) {
    console.log(track,"track",title);
    console.log(key,"cle");

          // Preload an audio track before we play it
          window.plugins.NativeAudio.preloadComplex(key, track, 1 /*volume par defaut*/, 1, 0, function(msg) {

            console.log(msg,"msg")
            // If this is not a first playback stop and unload previous audio track
            if ($scope.player.key.length > 0) {
              window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
              window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
            }



            window.plugins.NativeAudio.play(key); // Play audio track
            cordova.plugins.backgroundMode.enable();
            $scope.player.key = key; // Set a current audio track so we can close it if needed
          }, function(msg) {
            console.log('error: ' + msg); // Loading error
          });
        };

        $scope.stopTrack = function() {
            // If this is not a first playback stop and unload previous audio track
            if ($scope.player.key.length > 3) {
              window.plugins.NativeAudio.stop($scope.player.key); // Stop audio track
              window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
              $scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function
            }
        };

        $scope.loopTrack = function() {
            // If this is not a first playback stop and unload previous audio track
            if ($scope.player.key.length > 0) {
              window.plugins.NativeAudio.loop($scope.player.key); // Stop audio track
              //window.plugins.NativeAudio.unload($scope.player.key); // Unload audio track
              //$scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function

            }
        };

        $scope.pauseTrack = function() {
            // If this is not a first playback stop and unload previous audio track
            if ($scope.player.key.length > 0) {
              window.plugins.NativeAudio.call($scope.player.key); // Stop audio track
              //window.setTimeout($scope.player.key);
              $scope.player.key = ''; // Remove a current track on unload, it will break an app if we try to unload it again in playTrack function

    }
    };




      });
    });









})

;
