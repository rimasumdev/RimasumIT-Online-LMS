import React, { useState } from 'react';
import './Content.css';
import allcourse from '../../coursedata/allcourses';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';


const Content = () => {

    const [courses, setCourses] = useState(allcourse);
    const [cart, setCart] = useState([]);

    const enrollBtn = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (

        <div className="container">
            <div className="course-container">
                <div className="all-course">
                    {
                        courses.map(crs => <Course
                            enroll={enrollBtn}
                            courseName={crs}
                        ></Course>)

                    }
                </div>
                <div className="course-cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>



    );
};

export default Content;