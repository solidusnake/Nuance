 // Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('application', ['ionic','ngCordova',])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(3);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */



    $stateProvider.state('commencer',{
        url: '/commencer',
        templateUrl: 'templates/commencer.html'


    })

    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'templates/home.html'

    })

    $stateProvider.state('musiques', {
    	url: "/musiques",
    			templateUrl: "templates/musiques.html",
          //controller:"MusicCtrl",
    })

    $stateProvider.state('browser', {
    url: "/browser",
    templateUrl: "templates/browser.html",
  })


      $stateProvider.state('player', {
      url: "/player",
      templateUrl: "templates/player.html",
      //controller:"PlaylistsCtrl",
    })




    $stateProvider.state('profil',{
        url: '/profil',
        templateUrl: 'templates/profil.html'

    })

    $stateProvider.state('playlists', {
    url: "/playlists",
    templateUrl: "templates/playlists.html",
    controller:"PlaylistsCtrl",
  })



    $stateProvider.state('boutique',{
        url: '/boutique',
        templateUrl: 'templates/boutique.html'
    })


$stateProvider.state('setting', {
        url: '/setting',
        templateUrl: 'templates/setting.html'
})


    $urlRouterProvider.otherwise('/commencer')
});
