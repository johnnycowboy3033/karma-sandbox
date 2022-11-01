
let suitNameNumbers = "Numbers Fixture";
describe(suitNameNumbers, function () {

    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';

    beforeEach(function () {
        loadFixtures('numbers_fixture.html');
    });


    let case1 = "Assign First Numbers on the DOM model";
    it( case1 , function() {

        console.log("---" + suitNameNumbers + "---"  + case1 + "---");

        $('#first').val('1');

        let first = $('#first').val();

        console.log("The assigned number for the first number is : " + first);

        expect( first ).toEqual('1');
    });

    let case2 = "Assign Second Numbers on the DOM model";
    it( case2 , function() {

        console.log("---" + suitNameNumbers + "---"  + case2 + "---");

        $('#second').val('2');

        let second = $('#second').val();

        console.log("The assigned number for the first number is : " + second);

        expect( second ).toEqual('2');
    });

    let case3 = "Check the sum of first and Second Numbers." ;
    it( case3 , function() {

        console.log("---" + suitNameNumbers + "---"  + case3 + "---");

        $('#first').val('1');
        $('#second').val('2');

        $( "#add-numbers" ).click();

        console.log("The TOTAL for adding 1 + 2 is equal to : "  + $('#output').text())

        expect( $('#output').text() ).toEqual('3');
    });


});

