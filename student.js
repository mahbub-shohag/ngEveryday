		angular.module('myApp',[]);
		angular.module('myApp').
		component('studentList',{
			templateUrl : 'template.html',
			controller : function studentController(){
				this.user = 'Mahbub Alam Shohag'
			}	
			});