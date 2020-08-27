import React from 'react';
import { container, Card, Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { name, instructor, price, duration, img } = props.courseName;
    return (
        <div>
            <Card className="course">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h3>{name}</h3>
                    <h5>Instructor : {instructor}</h5>
                    <h6>Duration : {duration} Hours</h6>
                    <h6>Price : Tk.{price}</h6>
                    <Card.Text>

                    </Card.Text>
                    <Button className="mainBtn" variant="primary"
                        onClick={() => props.enroll(props.courseName)}
                    >Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;