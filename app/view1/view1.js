'use strict';

angular.module('myApp.view1', [

])

.controller('View1Ctrl', [function() {
        this.mult10 = function(number){
            return number * 10;
        };

        this.div10 = function(number){
            return number / 10;
        };

        this.reverse = function(arr){
            var res = [];
            for(var i = arr.length - 1; i >= 0; i--){
                res.push(arr[i]);
            }
            return res;
        }
}]);