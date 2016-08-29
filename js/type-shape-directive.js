// (function (angular) {

// 	'use strict';

// 	angular
// 		.module('app')
// 		.directive('typeShape', typeShape);

// 	function typeShape() {
// 		return {
// 			restrict: 'E',
// 			link: linkFn,
// 			scope: {
// 				content: '='
// 			},
// 			getTemplate: getTemplate
// 		};

// 		var imageTemplate = `
// 			<div class="entry-photo">
// 			<h2> </h2>
// 			<div class="entry-img"><span><a href="{{rootDirectory}}{{content.data}}"><img ng-src="{{rootDirectory}}{{content.data}}" alt="entry photo"></a></span></div>
// 			<div class="entry-text">
// 			<div class="entry-title">{{content.title}}</div>
// 			<div class="entry-copy">{{content.description}}</div>
// 			</div>
// 			</div>
// 		`;
// 		var videoTemplate = `
// 			<div class="entry-video">
// 			<h2> </h2>
// 			<div class="entry-vid"><iframe ng-src="{{content.data}}" width="280" height="200" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
// 			<div class="entry-text">
// 			<div class="entry-title">{{content.title}}</div>
// 			<div class="entry-copy">{{content.description}}</div>
// 			</div>
// 			</div>			
// 		`;
// 		var noteTemplate = `
// 			<div class="entry-note">
// 			<h2> </h2>
// 			<div class="entry-text">
// 			<div class="entry-title">{{content.title}}</div>
// 			<div class="entry-copy">{{content.data}}</div>
// 			</div>
// 			</div>
// 		`;

// 		function getTemplate(contentType){
// 			var template = '';

// 			switch(contentType) {
// 				case 'image':
// 					template = imageTemplate;
// 					break;
// 				case 'video':
// 					template = videoTemplate;
// 					break;
// 				case 'note':
// 					template = noteTemplate;
// 					break;
// 			}

// 			return template;

// 		}

// 		function linkFn(scope, element, attrs) {
// 			element.html(getTemplate(scope.content.content_type)).show();
// 			$compile(element.contents())(scope);
// 		}

// 	}

// })(angular);