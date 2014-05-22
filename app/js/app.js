
// Delete existing stuff. We have not gone over routes in Angular so for the time being we are going to make a single page application.

(function(){
  'use strict';

  angular.module('readingList', [ ])
    .controller('ReadingListController', function(){
      this.books = books;
      // this.showForm = false;
      this.genres = genres;


    }) // Note 2
    .directive('bookCover', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/book-cover.html'
      };
    })
    .directive('reviewForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/review-form.html', // Note 3
        controller: function(){
          this.books = books;
          this.book = {genres:{}};
          this.showForm = false;
          this.genres = genres;

          this.addBook = function(book, form){
            console.log(book)
            this.books.push(book);
            form.$setPristine();
            this.book = {genres:{}};

            this.showForm = false;
          };
        },
        controllerAs: 'reviewFormCtrl'
      };
    })
    .directive('bookGenres', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/book-genres.html'
      };
    })
  ;

  var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

  var books = [
    { title: 'Pragmatic Thinking & Learning',
      author: 'Andy Hunt',
      isbn: '1934356050',
      review: "Loved this book!",
      rating: 4,
      genres: { horror: true }
    },
    { title: 'The Age of Spiritual Machines',
      authors: 'Ray Kurzweil',
      isbn: '0140282025',
      review: "Would not read again.",
      rating: 2,
      genres: { fable: true }
    },
    { title: 'Elven Star: The Death Gate Cycle',
      authors: 'Margaret Weiss',
      isbn: '0553290983',
      review: "Best fantasy series EVAR",
      rating: 5,
      genres: { fiction: true, fantasy: true }
    }
  ];
})();
