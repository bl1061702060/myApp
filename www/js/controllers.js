angular.module('myApp.controllers', [])
    .controller('LoginCtrl', function($scope, $ionicPopup, $ionicLoading, $location, $rootScope) {
        $rootScope.hideNavBar = false;
        $scope.login = {
            lan: {
                username: '用户名',
                pwd: '密码',
                submit: '登录',
                syshelp: 'DOA 系统服务器支持',
                success: '登录成功',
                failure: '登录失败'
            }
        };
        $scope.submit = function() {
            if ($scope.username === 'aaa' && $scope.pwd === '1') {
                $location.path('/tab');
                $ionicLoading.show({
                    template: '<div class="content text-center" >' + $scope.login.lan.success + '</div>',
                    duration: 2000
                });
            } else {
                $ionicPopup.alert({
                    title: '温馨提示',
                    template: '<div class="content text-center">' + $scope.login.lan.failure + '</div>'
                });
            }
        }
    })
    .controller('DashCtrl', function($scope, $rootScope) {
        //$ionicNavBarDelegate.showBar(true);
        $rootScope.hideNavBar = true;
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