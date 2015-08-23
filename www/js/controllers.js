angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.data = {res:[]};

  $scope.model = {search:""};

  $scope.loadData = function(){
    console.log('xxxx');
    console.log($scope.search);
    var ufficio = Parse.Object.extend("Ufficio");
    var query = new Parse.Query(ufficio);

    query.find({
      success: function(results) {
        //alert("Successfully retrieved " + results.length + " scores.");
        // Do something with the returned Parse.Object values

        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          console.log(object.id + ' - ' + object.get('via'));
        }
        console.log('11111');
        $scope.data = {res:results};
        console.log(results);
        console.log('22222');
        if ($scope.model.search == "g"){
          //alert('voto');
          //results = {};
          $scope.data = {res:[]};
        }
        $scope.$apply();
      },
      error: function(error) {
        console.log("xxxxError: " + error.code + " " + error.message);
      }
    })
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
