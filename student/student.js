		angular.module('myApp',[]);
		angular.module('myApp').
		component('studentList',{
			template: 'student/studenttemplate.html',
			controller : function studentController(){
				this.Name = 'Mahbub Alam Shohag',
				this.Subjects = [{Id: 001, Name : 'Bangla'},{Id: 002,Name : 'English'},{Id:003,Name : 'Physics'}]
			}	
			});