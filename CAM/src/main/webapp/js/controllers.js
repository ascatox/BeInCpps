// CONTROLLERS
camApp.controller('homeController', [
		'$scope',
		'$http',
		function($scope, $http) {

			$scope.columnDefs = [ {
				"mDataProp" : "asset",
				"aTargets" : [ 0 ]
			}, {
				"mDataProp" : "class",
				"aTargets" : [ 1 ]
			}, {
				"mDataProp" : "model",
				"aTargets" : [ 2 ]
			}, {
				"mDataProp" : "owner",
				"aTargets" : [ 3 ]
			}, {
				"mDataProp" : "created",
				"aTargets" : [ 4 ]
			}, {
				"mDataProp" : "action",
				"aTargets" : [ 5 ]
			} ];

			$scope.overrideOptions = {
				"bStateSave" : true,
				"iCookieDuration" : 2419200, /* 1 month */
				"bJQueryUI" : true,
				"bPaginate" : true,
				"bLengthChange" : false,
				"bFilter" : true,
				"bInfo" : true,
				"bDestroy" : true
			};
            
            entityManager.init($scope, $http);
			
			$scope.assetList = [];
   
            $scope.classList1 = [ {
				"className" : "Root",
				"classId" : "root",
				"children" : [ {
					"className" : "Example Class",
					"classId" : "exclass",
					"children" : []
				} ]
			} ];
            
            $scope.classList1 =

			// roleList1 to treeview
			$scope.classList = $scope.classList1;
          
			
            //EntityManager.getClasses($http, $scope);
			
			//funzioni di utilità
			
			$scope.loadAsset = function(){
//				alert($scope.currentNode); //per recuperare il nodo da passare in input a servizio rest
				if($scope.currentNode.classId == 'exclass'){
					entityManager.getAssets();
                }else{
				    $scope.assetList=[]
				}
			}
		
		} ]);

