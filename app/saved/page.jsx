import React from 'react';
import SavedCourses from '@/components/SavedCourses';
import db from '@/utils/db';

export default function page() {
  const savedCourses = db.courses.filter((course) => course.saved);

  return (
    <div className='text-black'>
      <SavedCourses savedCourses={savedCourses} />
    </div>
  );
}