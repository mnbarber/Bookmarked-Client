import { useState } from "react";
import axios from 'axios';
import { create } from "../../services/bookService";

function BookSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchBooks = async () => {
        try {
            const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
            const data = await res.json();
            setResults(data.docs.slice(0, 10));
        } catch (err) {
            console.error('Search error:', err);
        }
    };

    return (
        <div className="book-search">
            <input
                type="text"
                placeholder="Search book title here!"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchBooks}>Search</button>

            <ul>
                {results.map((book) => (
                    <li key={book.key}>
                        <strong>{book.title}</strong> by {book.author_name?.join(', ') || 'Unknown'}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookSearch;