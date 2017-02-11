/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

﻿var app = {
				
		init: function(){
			this.carousels();
			this.navi();
			this.checkbox();
			this.select($('.select'));
			this.popup($('#login'));
			this.show_hide($('#other'), $('#other_c'));
			this.whois($('.check-but'));
		},


		show_hide: function( obj1, obj2 ){
			if( obj1.length ){
				obj1.click(function(e){
					e.preventDefault();
					obj2.slideToggle();
				});
			}
		},
		
		whois: function( obj ){
			if( obj.length ){
				obj.click(function(e){
					e.preventDefault();
					var name = $('.url-inp').attr('value'),
						domens = $.map( $(":checkbox:checked"), function(el){ return name + '.' + $(el).attr('name'); });;
					
					$.ajax({
					    url: 'whois.php',             // указываем URL и
					    data: "name="+name,
					    dataType : "text",                    // тип загружаемых данных
					    type: "POST",
					    success: function (data, textStatus) { // вешаем свой обработчик на функцию success
					        $('.tooltip-in').html(data);
					        $('.tooltip').show();
					    }               
					});
				});
			}
		},
		
		popup: function( obj ){
			if( obj.length ){
				obj.fancybox();
			}
		},
		
		//Tabs
		tabs: function(obj){
			if( obj.length ){
				obj.tabs();
			}
		},

		select: function( obj ){
			if( typeof cuSel != 'undefined'  ){
				var params = {
						changedEl: obj,
						visRows: 8,
						scrollArrows: true
					}
					cuSel(params);
			}
		},
		
		//checkboxes
		checkbox: function(){
				jQuery(".niceCheck").mousedown(function() {
				     changeCheck(jQuery(this));
				});
	
				jQuery(".niceCheck").each(function() {
				     changeCheckStart(jQuery(this));
				});
			
			function changeCheck(el){
			     var el = el,
			          input = el.find("input").eq(0);
			   	 if(!input.attr("checked")) {
					el.css("background-position","100% 0");	
					input.attr("checked", true)
				} else {
					el.css("background-position","0 0");	
					input.attr("checked", false)
				}
			     return true;
			}

			function changeCheckStart(el){
				var el = el,
					input = el.find("input").eq(0);
			      if(input.attr("checked")) {
					el.css("background-position","100% 0");	
					}
			     return true;
			}
					
		},
		
		//Login block
		navi: function(){
			$('.navi ul').accordion({
				collapsible: true,
				active: false
			});
		},
		
		//Carousels
		carousels: function(){
			
			$('#slider').carouFredSel({
				circular: true,
				infinite: true,
				auto: 5000,
				scroll: {
					items:1
				},
				items: {
					visible: 1
				},
				pagination  : "#bullets"
			});
			$('#tarif').carouFredSel({
				circular: false,
				infinite: false,
				auto: false,
				scroll: {
					items:1
				},
				items: {
					visible: 3
				},
				prev    : {
					        button  : "#prev",
					        key     : "left"
					    },
				next    : {
					        button  : "#next",
					        key     : "right"
					    }

			});
		          			
		},
		
		//to top
		up: function(){
			$("#back-top").hide();
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 50) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				});
				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			});
		}
		
}

jQuery(document).ready(function() {
	app.init();
});

/***/ })
/******/ ]);