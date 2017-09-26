

module.exports = function($scope, $http, $mdDialog) {
    //Init
    $scope.init = function () {
        console.log("init controller")
        $scope.users = [];
    }

    //Actions
    $scope.showUsers = function(){
        getUsers();
    }

    $scope.open = function($event, user){
        $scope.selectedUser = user
        openDialog($event)
    }

    //Functions
    function getUsers(){
        $http({
            method: 'GET',
            url: '/data/users.json'
        }).then(function successCallback(response) {
            $scope.users = response.data.users;
        })
    }

    function openDialog($event){
        $mdDialog.show({
            scope : $scope,
            fullscreen : true,
            targetEvent : $event,
            preserveScope : true,
            clickOutsideToClose : true,
            parent : angular.element(document.body),
            templateUrl : "src/screens/dialog/dialog.html"
        })
    }
}