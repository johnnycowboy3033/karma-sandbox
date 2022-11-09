
let suitNameReplaces = "Replaces Fixture";
describe(suitNameReplaces, function () {
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
    let demo;

    beforeEach(function () {
        loadFixtures('replaces_fixture.html');
        demo = $('#demo');
    });

    let case1 = "Check assign of the paragraph tag in the Internal JS script";
    it( case1 , function() {

        console.log("---" + suitNameReplaces + "---" + case1 + "---");

        $("#say").click();

        let demoContainer = demo.html();
        console.log("The content of the demo tag: " +  demoContainer);

        expect( demoContainer ).toEqual("Hello World JOHN !!");
    });


    let case2 = "Check the function sayHello in the Internal JS script";
    it( case2 , function() {

        console.log("---" + suitNameReplaces + "---" + case2 + "---");

        let say = sayHello("Tom");

        console.log("Calling the sayHello function : " +  say);

        expect( say ).toEqual("Hello World TOM !!");
    });


});