import React from "react";
import { useMount } from "react-use";
import Axios from "axios";
import { object, func } from "prop-types";
import { Button, DatePicker, Form, Input, Select } from "antd";

let batchYears = [];

const latestBatch =
  new Date().getMonth() >= 4
    ? new Date().getFullYear()
    : new Date().getFullYear() - 1;

for (let index = 1989; index <= latestBatch; index++) {
  const tempYear = { value: index, label: index };
  batchYears.push(tempYear);
}

function StudentRegistrationForm(props) {
  const [regForm] = Form.useForm();

  const handleSubmit = () => {
    console.log("success!!!::", props.studentFormFields.email);
    Axios.post("http://localhost:5000/register", {
      registrationDetails: props.studentFormFields,
    }).then((e) => {
      console.log("handle submit", e);
    });
    props.formSubmitted(true);
  };

  useMount(() => {
    props.formSubmitted(false);
    regForm.setFieldsValue({
      name: props.studentFormFields.name,
      email: props.studentFormFields.email,
      dob: props.studentFormFields.dob,
      studentId: props.studentFormFields.studentId,
      batch: props.studentFormFields.batch,
    });
  });

  return (
    <div>
      <Form
        form={regForm}
        // name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        // initialValues={{ remember: true }}
        // autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            // name="name"
            value={props.studentFormFields.name}
            placeholder="Firstname Lastname"
            onChange={(e) => props.setFormFields("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email Address!",
            },
            {
              type: "email",
              message: "Please enter valid email ID",
            },
          ]}
        >
          <Input
            // name="email"
            // value={props.studentFormFields.email}
            placeholder="enter email address"
            onChange={(e) => {
              props.setFormFields("email", e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please select your birth date",
            },
          ]}
        >
          <DatePicker onChange={(value) => props.setFormFields("dob", value)} />
        </Form.Item>

        <Form.Item
          label="Student ID"
          name="studentId"
          rules={[
            {
              required: true,
              message:
                "Please input your Student ID in the respective organization!",
            },
          ]}
        >
          <Input
            // name="designation"
            // value={props.studentFormFields.designation}
            placeholder="ie: 00ICXXX000"
            onChange={(e) => props.setFormFields("studentId", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Passing Batch"
          name="batch"
          rules={[{ required: true, message: "Please input your Batch year!" }]}
        >
          <Select
            // name="batch"
            // value={props.studentFormFields.batch}
            style={{ width: 120 }}
            onChange={(e) => props.setFormFields("batch", e)}
            options={batchYears}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

StudentRegistrationForm.propTypes = {
  studentFormFields: object,
  setFormFields: func,
  formSubmitted: func,
};

export default StudentRegistrationForm;
