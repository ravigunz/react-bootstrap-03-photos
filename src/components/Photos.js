import React from 'react'
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

export default function Users({
  id, title, url, thumbnailUrl
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{id} - {title}
        </Card.Title>
        <Card.Text>
        {url} <br />
        <Image src={thumbnailUrl} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

