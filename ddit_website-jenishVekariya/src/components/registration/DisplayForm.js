import React from "react";
import { object, string } from "prop-types";
import { Form, Card } from "antd";

function DisplayForm(props) {
  return (
    <div>
      <div>
        {props.alumniOrStudent === "Alumni" && (
          <Card>
            <Form.Item label="Name">
              <p>{props.formFields.name}</p>
            </Form.Item>
            <Form.Item label="Email Address">
              <p>{props.formFields.email}</p>
            </Form.Item>
            <Form.Item label="Passing Batch">
              <p>{props.formFields.batch}</p>
            </Form.Item>
            <Form.Item label="Organization">
              <p>{props.formFields.organization}</p>
            </Form.Item>
            <Form.Item label="Designation">
              <p>{props.formFields.designation}</p>
            </Form.Item>
            <Form.Item label="City">
              <p>{props.formFields.city}</p>
            </Form.Item>
          </Card>
        )}
      </div>
      <div>
        {props.alumniOrStudent === "Student" && (
          <Card>
            <Form.Item label="Name">
              <p>{props.formFields.name}</p>
            </Form.Item>
            <Form.Item label="Email Address">
              <p>{props.formFields.email}</p>
            </Form.Item>
            <Form.Item label="Date of Birth">
              <p>{props.formFields.dob}</p>
            </Form.Item>
            <Form.Item label="Student ID">
              <p>{props.formFields.studentId}</p>
            </Form.Item>
            <Form.Item label="Passing Batch">
              <p>{props.formFields.batch}</p>
            </Form.Item>
          </Card>
        )}
      </div>
    </div>
  );
}

DisplayForm.propType = {
  formFields: object,
  alumniOrStudent: string,
};

export default DisplayForm;
