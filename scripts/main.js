
angular.module('link', [])
	.directive('activeLink', ['$location', function(location) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs, controller) {
				var clazz = attrs.activeLink;
				var path = attrs.href;
				path = path.substring(1); //hack because path does not return including hashbang
				scope.location = location;
				scope.$watch('location.path()', function(newPath) {
					if (path === newPath) {
						element.addClass(clazz);
					} else {
						element.removeClass(clazz);
					}
				});
			}
		};
	}]);


var rebelLeaguesApp = angular.module('rebelLeaguesApp', [
	'ngRoute',
	'ngAnimate',
	'rebelLeaguesControllers',
	'link'
]);


rebelLeaguesApp.config([
	'$routeProvider',
	function ($routeProvider) {
	
		$routeProvider
			.when('/gamesHistory', {
				templateUrl: 'partials/gamesHistory.html',
				controller: 'gamesHistoryCtrl'
			})
			
			.when('/playersRanking', {
				templateUrl: 'partials/playersRanking.html',
				controller: 'playersRankingCtrl'
			})
			
			.otherwise({
				redirectTo: '/gamesHistory'
			});
	}
]);

