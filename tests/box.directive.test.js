
ngDescribe({
	exposeApi: true,
	name: 'Box Counter directive',
	modules: 'app',
	inject: ['$compile', '$templateRequest', '$templateCache', '$httpBackend'],

	tests: function (deps, describeApi) {

		describe('Big Number', function () {
			beforeEach(function () {
				var resNum;
				deps.$httpBackend.when('GET', './templates/big-number.html').respond(resNum);
				describeApi.setupElement('<box-counter data="vm.content" type="\'big-number\'"></box-counter>	');
			});
			it('should big number', function () {
				var scope = deps.element.isolateScope().type;
				expect(scope).to.be.define;
				expect(scope).to.equal('big-number');
			});
		});

		describe('Big Number Graph', function () {
			beforeEach(function () {
				var resNum;
				deps.$httpBackend.when('GET', './templates/big-number-graph.html').respond(resNum);
				describeApi.setupElement('<box-counter data="vm.content" type="\'big-number-graph\'"></box-counter>	');
			});
			it('should big-number-graph', function () {
				var scope = deps.element.isolateScope().type;
				expect(scope).to.be.define;
				expect(scope).to.equal('big-number-graph');
			});
		});

		describe('Big Number Pencil', function () {
			beforeEach(function () {
				var resNum;
				deps.$httpBackend.when('GET', './templates/big-number-pencil.html').respond(resNum);
				describeApi.setupElement('<box-counter data="vm.content" type="\'big-number-pencil\'"></box-counter>	');
			});
			it('should big-number-pencil', function () {
				var scope = deps.element.isolateScope().type;
				expect(scope).to.be.define;
				expect(scope).to.equal('big-number-pencil');
			});
		});
			
	}
});