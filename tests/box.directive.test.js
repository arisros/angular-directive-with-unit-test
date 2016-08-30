
ngDescribe({
	exposeApi: true,
	name: 'Box Counter directive',
	modules: 'app',
	// element: '<box-counter type="\'bigNumber\'"></box-counter>',
	inject: ['$compile', '$templateRequest', '$templateCache'],

	tests: function (deps, describeApi) {

		describe('Big Number', function () {
			beforeEach(function () {
				describeApi.setupElement('<box-counter type="\'bigNumber\'"></box-counter>');
			});
			it('should bigNumber', function () {
				var scope = deps.element.isolateScope().type;
				expect(scope).to.be.define;
				expect(scope).to.equal('bigNumber');
			});
		});


		describe('Big Number Graph', function () {
			beforeEach(function () {
				describeApi.setupElement('<box-counter type="\'bigNumberGraph\'"></box-counter>');
			});
			it('should bigNumber', function () {
				var scope = deps.element.isolateScope().type;
				expect(scope).to.be.define;
				expect(scope).to.equal('bigNumberGraph');
			});
		});

		describe('Big Number Pencil', function () {
			beforeEach(function () {
				describeApi.setupElement('<box-counter type="\'bigNumberPencil\'"></box-counter>');
			});
			it('should bigNumberPencil', function () {
				var scope = deps.element.isolateScope().type;
				expect(scope).to.be.define;
				expect(scope).to.equal('bigNumberPencil');
			});
		});
			
	}
});