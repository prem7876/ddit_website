import React from "react";
import { string } from "prop-types";
import AlumniRegistrationForm from "./AlumniRegistrationForm";
import StudentRegistrationForm from "./StudentRegistrationForm";

function AlumniStudentForm(props) {
  return (
    <div>
      {props.alumniOrStudent === "Alumni" ? (
        <AlumniRegistrationForm />
      ) : props.alumniOrStudent === "Student" ? (
        <StudentRegistrationForm />
      ) : (
        "Something Went Wrong :/"
      )}
    </div>
  );
}

AlumniStudentForm.propType = {
  alumniOrStudent: string,
};

export default AlumniStudentForm;
