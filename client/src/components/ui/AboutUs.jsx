import React from "react";

export const AboutUs = () => {
  return (
    <section className="my-16 flex items-center justify-center gap-6 flex-col">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary">About Us</h2>
        <p className="my-3">
          Join thousands who have transformed their grading process
        </p>
      </div>

      <div className="p-12 shadow-xl">
        <p>
          Our web application is designed to simplify and automate the student
          marks management process for faculty members. From internal
          assessments to final scores, the system enables accurate and efficient
          handling of marks through features like bulk uploads, subject-wise
          entry, and real-time calculation. Built with an intuitive interface,
          it helps educators save time, reduce manual errors, and maintain
          organized academic records — all in one centralized platform.
        </p>
      </div>
    </section>
  );
};
