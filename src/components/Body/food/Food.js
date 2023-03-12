import React, { useState } from "react";
import "./Food.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Food() {
  const [state, setState] = useState({
    listImg: [
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38",
    ],
  });
  return (
    <>
      <Logosearch />

      <div className="list_food">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card s content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card s content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card s content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/328686359_3178136932479205_7649865675267994708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m9oY7CCXCLIAX8h2uMV&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdSMH93QvnJRlv2VZ_xUhaShlldH_hrpkJNttw5od96Kdg&oe=64297F38"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card s content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

export default Food;
