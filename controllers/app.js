'use strict';

// 기존에서 제거된 요소ㅓ 'ngRoute'
angular.module('common', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'LocalStorageModule', 'ngTouch'])
	.config(['$compileProvider', function ($compileProvider) {
		//  Default imgSrcSanitizationWhitelist: /^\s*((https?|ftp|file|blob):|data:image\/)/
        //  chrome-extension: will be added to the end of the expression
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|ftp|file|blob|app):|data:image\/)/);
 
	}]);
angular.module('workspace', ['common']);

// 다국어 변경 적용
{
	var user_lang = localStorage.getItem('lang') || 'ko';
	$('head').append('<script src="./bower_components/entryjs/extern/util/' + user_lang + '.js">' + '</script>')
}
