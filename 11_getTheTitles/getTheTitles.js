const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (para) {
  const { title } = {
    title: books.map((x) => x.title),
  };
  return title;
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
