
let suitNameComments = "Comments Fixture";
describe(suitNameComments , function () {
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
    let comments;
    let options;
    let dataComments = [];


    beforeEach(function () {
        loadFixtures('comments_fixture.html');
        comments = $('#comments');

        let initComments = {
            message :"Great Job !!",
            name : "Tom Smith"
        }

        dataComments.push(initComments);

        options = {
            data: dataComments
        };

    });

    let case1 = "Check if pull data off DOM model in comment div";
    it(case1, function () {
        console.log("---" + suitNameComments + "---" + case1 + "---");

        let commentsHtml = comments.html()
        console.log("The comments is : " + commentsHtml);

        expect(commentsHtml).toEqual('Be the first to add a comment....');

    });

    let case2 = "Check the comment array is initialized with object";
    it(case2, function () {
        console.log("---" + suitNameComments + "---"  + case2 + "---");

        let countObject = dataComments.length;

        console.log("Number of object in the dataComment array is : " + countObject);

        expect(countObject).toEqual(1);


    });

    let case3 = "Add function that change the text of the DIV tag";
    it(case3, function () {
        console.log("---" + suitNameComments + "---"  + case3 + "---");

       comments.jQComments(options);

        let htmlContain = comments.html();

        console.log( " DIV contain tag : " + htmlContain);

        expect(htmlContain).toEqual('Tom Smith - Great Job !!');



    });

});