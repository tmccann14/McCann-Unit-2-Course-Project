import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Iron Man - The Complete Guide' },
            { id: 2, title: 'The Incredible Hulk - The Complete Guide' },
            { id: 3, title: 'Captain America - The Complete Guide' }
                       
        ]
    }

    render () {
        return (
            <div>
                <h1>Marvel Superheros</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link 
                                    key={course.id} 
                                    to={{
                                        pathname: this.props.match.url + '/' + course.id,
                                        search: '?title=' + course.title
                                    }}>
                                    <article className="Course">{course.title}</article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:courseId'} component={Course} />
            </div>
        );
    }
}

export default Courses;