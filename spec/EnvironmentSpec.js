
let suitNameEnvironment = "Environment";
describe(suitNameEnvironment, function () {

    beforeEach(function () {
    });

    let case1 = 'Check if Karma is working';
    it( case1 , function() {

        console.log("---" + suitNameEnvironment + "---"  + case1 + "---");

        let checkValue = true;

        console.log(" The check value is equal to : " + checkValue );

        expect( checkValue).toEqual(checkValue);
    });

    let case2 = 'Checking JQuery Plugin is working';
    it( case2 , function() {

        console.log("---" + suitNameEnvironment + "---"  + case2 + "---");

        console.log( " Checking that the jQuery variable is a function : " + typeof $ );

        expect($).not.toBeNull();
    });

});

