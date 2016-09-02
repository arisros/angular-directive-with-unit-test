(function (angular) {
	
	'use strict';

	angular
		.module('app')
		.controller('LoginFormController', LoginFormController);

	LoginFormController.$inject = ['$mdToast'];

	function LoginFormController($mdToast) {
		var vm = this;
		vm.check = check;
		vm.loginAuth = loginAuth;
		vm.message = '';
		vm.email ='';
		vm.password='';

		function check() {
			vm.message = '';
			if (vm.email === '') {
				vm.message = 'email is empty';
				vm.type = 'error';
			}

			if (vm.password === '') {
				vm.message = 'password is empty';
				vm.type = 'error';
			}

			if (vm.email === '' && vm.password === '') {
				vm.message = 'email and password is empty';
				vm.type = 'error';
			}

		}

		function checkAuth() {
				if (vm.email === 'arisjirat@gmail.com') {
					vm.message = 'Thanks Ariros';
					vm.type = 'success';
				}

				else {
					vm.message = '<b>' + vm.email + '</b>' + ' not registered';
					vm.type = 'error';
				}
		} 

		function loginAuth() {
			check();
			checkAuth();
			var myProp = {
				hideDelay: 3000,
				position: 'top right',
				template: '<md-toast id="my-md-toast" class="md-toast '+ vm.type +'"><span class="md-toast-text" flex>'+ vm.message +'<span></md-toast>'
			};
			$mdToast.show(myProp);
			vm.message = '';
			vm.email ='';
			vm.password='';
		}

	}

})(angular);