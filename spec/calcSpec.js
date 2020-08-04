describe("Calculator", function(){

    beforeEach(function() {
        calc = new Calculator;
    });

    /*Refactoring */
   /* var calc = new Calculator;*/

    describe("Addition test", function (){
        it ("should return 42", function(){ 
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it ("should return 26", function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it ("should return error if we don´t supply two numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
        /*Spies and Programming Defensive

        it ("should return error if we don´t supply two numbers", function(){
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide")
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })*/
        
        /*
        Programming Defensive
        
        it ("should return error if we don´t supply two numbers", function(){
            expect(addition("Hitchhickers", "Guide")).toBe("Error!");
        })*/
    });
});