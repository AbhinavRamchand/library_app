import React, { useEffect, useState } from 'react'
import { CardBody, CardFooter, CardHeader } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Table, Card, Form, Row, Col, FormControl } from 'react-bootstrap'

const Addbook = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [bookList, setBookList] = useState([])
    const [addbook, setAddbook] = useState('')
    const [book, setBook] = useState({
        BooksTitle: "",
        BooksAuthor: "",
        BooksQuatity: "",
        BooksGenre: "",
        BooksYOP: "",
        BooksEdition: "",
        BooksPrice: "",
        BookCoverType: "",
        BooksImage: ""
    })

    // Handle change for input fields
    function handleChange(event) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setBookList([...bookList, book]);

        // Reset the form after adding the book
        setBook({
            BooksTitle: "",
            BooksAuthor: "",
            BooksQuatity: "",
            BooksGenre: "",
            BooksYOP: "",
            BooksEdition: "",
            BooksPrice: "",
            BookCoverType: "",
            BooksImage: ""
        });

        setAddbook("Book Added Successfully!!");
        setTimeout(() => {
            setAddbook("");
        }, 3000);
    }

    // Fetch book list from the location state
    useEffect(() => {
        setBookList(location.state === null ? [] : location.state.allbook)
    }, [location.state]);

    function handleBack() {
        navigate('/Dashboard', {
            state: {
                allBooks: bookList
            }
        })
    }

    return (
        <>
            <div className="container mt-5">
                <Card className="shadow">
                    <CardHeader >
                        <h2>
                            <i className="bi bi-arrow-left-short" onClick={handleBack}></i> Add New Book
                        </h2>
                    </CardHeader>
                    <Form onSubmit={handleSubmit}>
                        <CardBody>
                            <Row className="mb-3">
                                <Col md={12}>
                                    <Form.Control
                                        placeholder="Enter Book Title"
                                        value={book.BooksTitle}
                                        name='BooksTitle'
                                        onChange={handleChange}
                                    />
                                </Col>

                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        type="url"
                                        placeholder="Input Image URL"
                                        name="BooksImage"
                                        onChange={handleChange}
                                        value={book.BooksImage}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control
                                        placeholder="Enter Book Author"
                                        value={book.BooksAuthor}
                                        name='BooksAuthor'
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        placeholder="Enter Book Quantity"
                                        value={book.BooksQuatity}
                                        name='BooksQuatity'
                                        type='number'
                                        min= '0'
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col md={6}>
                                <Form.Control
                                            as="select" 
                                            value={book.BooksGenre} 
                                            name="BooksGenre" 
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Book Genre</option>
                                            <option value="Fiction">Fiction</option>
                                            <option value="Non-Fiction">Non-Fiction</option>
                                            <option value="Mystery">Mystery</option>
                                            <option value="Adventure">Adventure</option>
                                            <option value="Science Fiction">Science Fiction</option>
                                            <option value="Fantasy">Fantasy</option>
                                            <option value="Romance">Romance</option>
                                            <option value="Historical Fiction">Historical Fiction</option>
                                            <option value="Biography">Biography</option>
                                            <option value="Self-Help">Self-Help</option>
                                            <option value="Horror">Horror</option>
                                        </Form.Control>

                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        placeholder="Enter Year of Publication"
                                        value={book.BooksYOP}
                                        type='number'
                                        min='1990'
                                        name='BooksYOP'
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Control
                                        placeholder="Enter Book Edition"
                                        value={book.BooksEdition}
                                        name='BooksEdition'
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        placeholder="Enter Book Price"
                                        value={book.BooksPrice}
                                        name='BooksPrice'
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col md={6}>
                                <Form.Control
                                        as="select"
                                        value={book.BookCoverType}
                                        name="BookCoverType"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Cover Type</option>
                                        <option value="Hardcover">Hardcover</option>
                                        <option value="Paperback">Paperback</option>
                                        <option value="E-book">E-book</option>
                                        <option value="Audiobook">Audiobook</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-between align-items-center">
                            <p className="text-success m-0">{addbook}</p>
                            <Button variant="primary" type="submit">
                                Add Book
                            </Button>
                        </CardFooter>
                    </Form>
                </Card>
            </div>
        </>
    )
}

export default Addbook;
