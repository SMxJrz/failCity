'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('Test 1', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
          expect(ctrl.mult10(10)).toBe(1000);
        }));
    });

    it('Test 2', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
        expect(ctrl.div10(10)).toBe(10);
      }));

    it('Test 3', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
        expect(ctrl.reverse([1, 10, 100])).toEqual([1, 10, 1]);
      }));

    it('Test 4', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.mult10(1230)).toBe(0);
    }));

    it('Test 5', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.reverse([])).toEqual([0]);
    }));

    it('Test 6', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.mult10(9)).toBe(900);
    }));

    it('Test 7', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.div10(230)).toBe(230);
    }));

    it('Test 8', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.reverse([31, 3, 34])).toEqual([34, 3, 301]);
    }));

    it('Test 9', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.mult10(1230)).toBe(123000);
    }));

    it('Test 10', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.reverse([])).toEqual([0]);
    }));
});