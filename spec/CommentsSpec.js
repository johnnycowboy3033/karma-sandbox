
let suitNameComments = "Comments Fixture";
describe(suitNameComments , function () {
    jasmine.getFixtures().fixturesPath = 'base/spec/javascripts/fixtures';
    let comments;

    beforeEach(function () {
        loadFixtures('comments_fixture.html');
        comments = $('#comments');

    });

    let case1 = "Check if pull data off DOM model in comment div";
    it(case1, function () {
        console.log("---" + suitNameComments + "---" + case1 + "---");

        let commentsHtml = comments.html()
        console.log("The comments is : " + commentsHtml);

        expect(commentsHtml).toEqual('Be the first to add a comment....');

    });

    let case3 = "Add function that change the text of the DIV tag";
    it(case3, function () {
        console.log("---" + suitNameComments + "---"  + case3 + "---");

        $( "#views" ).click();

        let htmlContain = comments.html();

        console.log( " DIV contain tag : " + htmlContain);

        expect(htmlContain).toEqual('Tom Smith - Great Job !!');

    });

});