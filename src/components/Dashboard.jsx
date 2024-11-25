import React, { useEffect, useState } from 'react'
import { Button, Table, Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const  names = location.state.dash

    const [book, setBook] = useState({})
    const [bookList, setBookList] = useState(
        [
            {
                "BooksTitle": "The Great Gatsby",
                "BooksAuthor": "F. Scott Fitzgerald",
                "BooksQuatity": "50",
                "BooksGenre": "Fiction",
                "BooksYOP": "1925",
                "BooksEdition": "1st Edition",
                "BooksPrice": "$10.99",
                "BookCoverType": "Hardcover",
                "BooksImage": "https://m.media-amazon.com/images/I/81KaBxCWhbL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                "BooksTitle": "To Kill a Mockingbird",
                "BooksAuthor": "Harper Lee",
                "BooksQuatity": "30",
                "BooksGenre": "Classic, Fiction",
                "BooksYOP": "1960",
                "BooksEdition": "50th Anniversary Edition",
                "BooksPrice": "$12.99",
                "BookCoverType": "Paperback",
                "BooksImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
            },
            {
                "BooksTitle": "1984",
                "BooksAuthor": "George Orwell",
                "BooksQuatity": "100",
                "BooksGenre": "Dystopian, Science Fiction",
                "BooksYOP": "1949",
                "BooksEdition": "Revised Edition",
                "BooksPrice": "$14.99",
                "BookCoverType": "Paperback",
                "BooksImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY7h4heMUfi3Xw3Q2u-ZGsHRzpeLXTriOvw&s"
            }
        ]
    )

    function change() {
        navigate('/Editbook', {
            state: {
                chan: bookList
            }
        })
    }

    function logOut() {
        navigate('/', {
            state: {
                log: "aby"
            }
        })
    }

        
    useEffect(() => {
        if (location.state !== null) {
            if (location.state.allBooks) {
                setBookList(location.state.allBooks);
            }
        }
    }, [location.state]);

    function addBook() {
        navigate('/Addbook', {
            state: {
                allbook: bookList
            }
        })
    }

    return (
        <>
            <Container className="container w-35" style={{ marginTop: "10px" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="mb-0">Hi {names},Here is the Book List</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Button variant="primary" onClick={addBook}>Add Book</Button>
                        <Button variant="success" onClick={change}>Edit book</Button>
                        <Button variant="danger" onClick={logOut}>Logout</Button>
                    </div>
                </div>
                <Table bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Book Image</th>
                            <th>Books Title</th>
                            <th>Book Author</th>
                            <th>Book Quantity</th>
                            <th>Book Genre</th>
                            <th>Book YOP</th>
                            <th>Book Edition</th>
                            <th>Book Price</th>
                            <th>Book Cover Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={book.BooksImage} alt="book" style={{ height: "100px" }} />
                                    </td>
                                    <td>{book.BooksTitle}</td>
                                    <td>{book.BooksAuthor}</td>
                                    <td>{book.BooksQuatity}</td>
                                    <td>{book.BooksGenre}</td>
                                    <td>{book.BooksYOP}</td>
                                    <td>{book.BooksEdition}</td>
                                    <td>{book.BooksPrice}</td>
                                    <td>{book.BookCoverType}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Dashboard;
