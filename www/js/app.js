// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

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

    $stateProvider.state('musiques',{
        url: '/musiques',
        templateUrl: 'templates/musiques.html'
    })





    $stateProvider.state('playlists',{
        url: '/playlists',
        templateUrl: 'templates/playlists.html'
    })

    $stateProvider.state('profil',{
        url: '/profil',
        templateUrl: 'templates/profil.html'
    })

    $stateProvider.state('boutique',{
        url: '/boutique',
        templateUrl: 'templates/boutique.html'
    })

    $stateProvider.state('player',{
        url: '/player',
        templateUrl: 'templates/player.html'
    })




    $urlRouterProvider.otherwise('/commencer')
});
