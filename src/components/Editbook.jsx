import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Row, Table, Button, FormControl } from 'react-bootstrap'

const Editbook = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [bookList, setBookList] = useState([])
    const [deleteIndex, setDeleteIndex] = useState()
    const [indexToBeEdited, setIndexToBeEdited] = useState({})
    const [bookToBeEdit, setBookToBeEdit] = useState({
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

    useEffect(() => {
        setBookList(location.state === null ? [] : location.state.chan)
        console.log(bookList)
    }, [])

    function handleSave() {
        const updateBook = bookList.map((bk, index) => {
            if (index === indexToBeEdited) {
                return bookToBeEdit
            } else {
                return bk
            }
        })
        setBookList(updateBook)
        setIndexToBeEdited()
    }

    function handleEdit(bk, id) {
        setIndexToBeEdited(id)
        setBookToBeEdit(bk)
    }

    function handleDelete(id) {
        if (window.confirm('Are you sure you want to delete this book?')) {
            setDeleteIndex(id)
            const deleIndexVal = bookList.filter((bk, index) => {
                if (id !== index) {
                    return bk
                }
            })
            setBookList(deleIndexVal)
            setDeleteIndex()
        }
    }

    function handleChange(event) {
        setBookToBeEdit({ ...bookToBeEdit, [event.target.name]: event.target.value })
        console.log(bookToBeEdit)
    }

    function handleBack() {
        navigate('/Dashboard', {
            state: {
                ed: bookList
            }
        })
    }

    return (
        <>
            <div className="container w-35" style={{ marginTop: "10px" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1>Edit Books</h1>
                    <Button onClick={handleBack} variant='success' style={{ marginLeft: "72%" }}>
                        <i className="bi bi-caret-left-square"></i>
                    </Button><h3>Back</h3>
                </div>

                <Table bordered hover>
                    <thead>
                        <tr>
                            {/* Move S.No to the First */}
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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookList.map((std, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ width: "100px" }}>{index + 1}</td>

                                    <td>
                                        {indexToBeEdited === index ?
                                            <FormControl type="url" onChange={handleChange} name="BooksImage" /> :
                                            <img src={std.BooksImage} alt="book" style={{ height: "100px" }} />
                                        }
                                    </td>

                                    {/* Display Other Book Details */}
                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksTitle} name="BooksTitle" /> :
                                        std.BooksTitle}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksAuthor} name="BooksAuthor" /> :
                                        std.BooksAuthor}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksQuatity} name="BooksQuatity" /> :
                                        std.BooksQuatity}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksGenre} name="BooksGenre" /> :
                                        std.BooksGenre}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksYOP} name="BooksYOP" /> :
                                        std.BooksYOP}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksEdition} name="BooksEdition" /> :
                                        std.BooksEdition}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BooksPrice} name="BooksPrice" /> :
                                        std.BooksPrice}
                                    </td>

                                    <td>{indexToBeEdited === index ?
                                        <FormControl onChange={handleChange} value={bookToBeEdit.BookCoverType} name="BookCoverType" /> :
                                        std.BookCoverType}
                                    </td>

                                    {/* Edit and Delete Buttons */}
                                    <td>
                                        {indexToBeEdited === index ?
                                            <Button onClick={handleSave}><i className='bi bi-floppy'></i></Button> :
                                            <Button onClick={() => handleEdit(std, index)}><i className='bi bi-pencil'></i></Button>
                                        }
                                    </td>

                                    <td>
                                        <Button variant='danger' onClick={() => handleDelete(index)}>
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Editbook;
