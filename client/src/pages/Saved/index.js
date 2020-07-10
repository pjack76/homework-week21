import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import BookList from "../../components/BookList";
import BookListItem from "../../components/BookList";
import { Container, Row, Col } from "../../components/Grid";

function Saved() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Nav />
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
                      placeholder="Search For a Book here"
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
              <h1 className="text-center">No Books to Display</h1>
            ) : (
       
               
                    <BookListItem
                      key={book.title}
                      title={book.title}
                      href={book.href}
                      description={book.description}
                      thumbnail={book.thumbnail}
                    />
                 
               
             
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
