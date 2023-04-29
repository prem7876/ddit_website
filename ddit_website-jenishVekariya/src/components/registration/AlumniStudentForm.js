import React from "react";
import { string, func, object } from "prop-types";
import AlumniRegistrationForm from "./AlumniRegistrationForm";
import StudentRegistrationForm from "./StudentRegistrationForm";

function AlumniStudentForm(props) {
  const setFormFields = (fieldName, value) => {
    props.setFormFields(fieldName, value);
  };
  const formSubmitted = (bool) => {
    props.formSubmitted(bool);
  };

  return (
    <div>
      {props.alumniOrStudent === "Alumni" ? (
        <AlumniRegistrationForm
          setFormFields={setFormFields}
          alumniFormFields={props.alumniFormFields}
          formSubmitted={formSubmitted}
        />
      ) : props.alumniOrStudent === "Student" ? (
        <StudentRegistrationForm
          setFormFields={setFormFields}
          studentFormFields={props.studentFormFields}
          formSubmitted={formSubmitted}
        />
      ) : (
        "Something Went Wrong :/"
      )}
    </div>
  );
}

AlumniStudentForm.propType = {
  alumniOrStudent: string,
  setFormFields: func,
  formSubmitted: func,
  alumniFormFields: object,
  studentFormFields: object,
};

export default AlumniStudentForm;
