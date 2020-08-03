describe("Calculator", function(){
    describe("Addition test", function (){
        it ("should return 42", function(){ 
            expect(addition(20, 22)).toBe(42);
        });
        it ("should return 26", function(){
            expect(addition(7, 19)).toBe(26);
        });
        it ("should return error if we don´t supply two numbers", function(){
            expect(addition("Hitchhickers", "Guide")).toBe("Error!");
        })
    });
});