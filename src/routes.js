const {
  addBook,
  getAllBooks,
  getABookWithId,
  updateBookWithId,
  deleteBook,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getABookWithId,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookWithId,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBook,
  },
];

module.exports = routes;
