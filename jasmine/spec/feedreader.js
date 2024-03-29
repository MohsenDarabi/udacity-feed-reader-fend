/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

          it('has an URL defined and not empty', function() {
            for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(Feed.url.length).not.toBe(0);
            };
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    

   /* it('name is defined, is not empty', function() {
        for (i = 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].name).toBeDefined();
          expect(allFeeds[i].name.length).not.toBe(0);
        }
      }); */

      // concised code
      it('name is defined, is not empty', function() {
        for(feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(Feed.name.length).not.toBe(0);
        };
    });

 });

    /* TODO: Write a new test suite named "The menu" */

    describe('menu', function() {

      let body = document.getElementsByTagName('body')[0];

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
          expect(body.hasClass('menu-hidden')).toBeTruthy();
      });
         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
         it('change visibility when the icon is clicked', function() {
          let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);

          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
      });
  });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        describe('Initial Entries', function() {

          beforeEach(function(done) {
              loadFeed(0, done);
          });
 
          it('are loaded within the .feed container', function() {
  
              let feedEntries = document.querySelector('.feed').querySelectorAll('.entry');
              expect(feedEntries.length).toBeGreaterThan(0);
          });
      });

        // Test suite to check page refresh when new feed set is selected
        describe('New Feed Selection', function() {
          let oldFeeds;
          let newFeeds;
  
          // As before we should start the test when the contents are loaded
          beforeEach(function(done) {
              // Load the first set of feeds
              loadFeed(0, function() {
  
                  // Store the HTML content into oldFeeds variable
                  oldFeeds = document.getElementsByClassName('feed')[0].innerHTML;
  
                  // Load the second set of feeds
                  loadFeed(1, function() {
  
                      // Store the HTML of the new feeds into newFeeds variable
                      newFeeds = document.getElementsByClassName('feed')[0].innerHTML;
                      done();
                  });
              });
          });
                  // The test compare the content of two variables: oldFeeds and newFeeds.
        // If the feed content has correctly changed after the new set was loaded
        // then also the HTML content must change so the variables should be
        // different
        it('is correctly loaded within .feed container', function() {
          expect(newFeeds).not.toEqual(oldFeeds);
      });
  });
  
}());
