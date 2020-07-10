import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import BookList from "../../components/BookList";
import BookListItem from "../../components/BookList";
import { Container, Row, Col } from "../../components/Grid";

function Search() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
    
  };

  useEffect(() =>{
  //  console.log("the books", books, bookSearch);
  })
  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    console.log(books);
    API.getBooks(bookSearch)
      .then(res => {setBooks([res.data.items[0].volumeInfo]);
     // console.log(res.data.items[0].volumeInfo)
    })

      .catch(err => console.log(err));
  };

  return (
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book Here"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <BookList> 
                {books.map( book => {
                  console.log(" in map function =>", book)
                  return (
                    <BookListItem
                      key={book.title}
                      title={book.title}
                      authors={book.authors}
                      href={book.href}
                      description={book.description}
                      thumbnail={book.thumbnail}
                    />
                  );
                })}
              </BookList>
            ): (
              <h1 className="text-center">No Books to Display</h1>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
