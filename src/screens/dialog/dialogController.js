module.exports = function($scope, $mdDialog){
    //Init
    $scope.init = function () {
        console.log("dialog controller")
    }

    //Actions
    $scope.closeDialog = function(){
        $mdDialog.cancel()
    }
}