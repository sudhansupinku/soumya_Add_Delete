var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
      $scope.cars = ["Fiat","Mercedes","Maruti","Safari","Ford"];
      $scope.header;
      $scope.options = [];
      $scope.disableItems={};
      $scope.ddlValue;

      $scope.showCurrentItem = function(value){
        $scope.header = value;
        $scope.updateDLL();
      }

      $scope.updateDLL = function(){
      	$scope.options=[];
      	for (i=0; i< $scope.cars.length;i++){
      		var keyName = $scope.cars[i];
      		if ($scope.cars[i]!= $scope.header && !($scope.disableItems[keyName])) {
      			$scope.options.push($scope.cars[i]);
      		}



      		// if ($scope.options.includes($scope.disableItems[keyName])) {
      		// 	// str.indexOf("welcome");
      		// 	var pos = options.indexOf($scope.disableItems[keyName]);
      		// 	$scope.options.splice(pos,1);
      		// }
      	}
      	

      	// for (item in $scope.disableItems) {
      	// 	if (disableItems[item] ) {}
      	// 	$scope.options.splice($scope.option);
      	// }
      }

      $scope.addItems=function(){
      	if($scope.disableItems[$scope.header]){
      		$scope.disableItems[$scope.header].push($scope.ddlValue);
      	}else{
      		$scope.disableItems[$scope.header] = [];
      		$scope.disableItems[$scope.header].push($scope.ddlValue);
      	}
      	$scope.updateDLL();
      }
});
