(function(){
  'use strict';

  angular.module('readingList', [ ]).
    controller('BooksController', function(){
      this.books = books;
      this.genres  = genres;
    });

  var genres = ['Fiction', 'Programming'];

  var books = [{
    title: 'A Game of Thrones',
    author: 'George R R Martin',
    review: 'Excellent book!',
    rating: 5,
    genre: genres[0]
  },
  {
    title: 'PHP for Dummies',
    author: 'Rasmus Lerdorf',
    review: 'Boring...',
    rating: 1,
    genre: genres[1]
  }

  ];
})();
