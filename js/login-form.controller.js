(function (angular) {
	'use strict';

	angular
		.module('app')
		.controller('LoginFormController', LoginFormController);

	LoginFormController.$inject = ['$mdToast'];

	function LoginFormController($mdToast) {
		var vm = this;
		vm.checkLogin = checkLogin;
		vm.loginAuth = loginAuth;
		vm.message = '';
		vm.email ='';
		vm.password='';

		function checkLogin() {
			vm.message = '';
			vm.error = '';
			
			// checkLogin empty
			if (!vm.email) {
				vm.message = 'email is empty';
				vm.error = true;
			}

			else if (!vm.password) {
				vm.message = 'password is empty';
				vm.error = true;
			}

			else {
				vm.error = false;
			}

			// Get Type
			if (!vm.error) {
				vm.type = 'success';
				vm.message = 'Welcome back, ' + vm.email + '!';
			}
			else { vm.type = 'error'; }

		}

		/**
		 * Run checkLogin and show the mdToast
		 */
		function loginAuth() {
			checkLogin();
			var myProp = {
				hideDelay: 3000,
				position: 'top right',
				template: '<md-toast class="md-toast '+ vm.type +'"><span id="md-toast-text" class="md-toast-text" flex>'+ vm.message +'<span></md-toast>'
			};
			$mdToast.show(myProp);
			vm.message = '';
			vm.email ='';
			vm.password='';
		}

	}

})(angular);