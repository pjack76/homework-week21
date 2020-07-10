import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";



//BookListItem renders a bootstrap list item containing data from the book api call
function BookListItem({
  thumbnail,
  title,
  authors,
  description,
  href
}) {
  return (
    <li className="list-group-item">
      <h1>MY LIST ITEM</h1>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h1>I AM WORKING</h1>
            <h3>{title}</h3>
            <h3>{authors}</h3>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default BookListItem;