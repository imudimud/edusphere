import React, { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import axios from 'axios';

    const CourseDetail = () => {
      const { id } = useParams();
      const [course, setCourse] = useState(null);

      useEffect(() => {
        const fetchCourse = async () => {
          const response = await axios.get(`/api/courses/${id}`);
          setCourse(response.data);
        };

        fetchCourse();
      }, [id]);

      if (!course) {
        return <div>Loading...</div>;
      }

      return (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      );
    };

    export default CourseDetail;
