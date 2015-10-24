'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

    it('should multiply by 10', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
          expect(ctrl.mult10(10)).toBe(100);
        }));
    });

    it('should divide by 10', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
        expect(ctrl.div10(10)).toBe(1);
      }));

    it('should reverse', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
        expect(ctrl.reverse([1, 10, 100])).toEqual([100, 10, 1]);
      }));

    it('should multiply by 10', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.mult10(1230)).toBe(12300);
    }));

    it('should multiply by 10', inject(function($controller){
      var ctrl = $controller('View1Ctrl');
      expect(ctrl.reverse([])).toEqual([]);
    }));
});