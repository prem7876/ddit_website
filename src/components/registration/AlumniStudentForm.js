import React from "react";
import { string, func, object } from "prop-types";
import AlumniRegistrationForm from "./AlumniRegistrationForm";
import StudentRegistrationForm from "./StudentRegistrationForm";

function AlumniStudentForm(props) {
  return (
    <div>
      {props.alumniOrStudent === "Alumni" ? (
        <AlumniRegistrationForm
          setAlumniFormFields={props.setAlumniFormFields}
          alumniFormFields={props.alumniFormFields}
        />
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
  setAlumniFormFields: func,
  alumniFormFields: object,
};

export default AlumniStudentForm;
