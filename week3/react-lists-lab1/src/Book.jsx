

function Book({ book }) {
  return (
    <div className="book">
      <h2 className="book-title">{book.title}</h2>
      <ul><strong>Author:</strong> {book.author}</ul>
      <ul><strong>Genre:</strong> {book.genre}</ul>
      <ul><strong>Year:</strong> {book.year}</ul>
    </div>
  );
}

export default Book;