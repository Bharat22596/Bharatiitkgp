var app=angular.module("myApp",[]);
		app.controller('Note',function($scope){
			$scope.note={};
			$scope.saved=[];
			$scope.id+=1;
			//$scope.saved.push($scope.note);
			$scope.save=function(){
				alert("Note Saved");
				$scope.saved.push($scope.note);
				$scope.note={};

			};

		});
		app.controller('sss',function(){

		});
		app.directive('post',function(){
			return {
				scope: {
					data: '=',
					target: '='
				},
				//template:"<div>{{data.title}}</div>"
				template: "<div class='note{{data.id'><h1>{{data.title}}</h1><p>{{data.text}}</p></div>"
			}
		});