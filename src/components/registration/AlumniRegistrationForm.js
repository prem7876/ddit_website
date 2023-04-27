import React from "react";
import { useMount } from "react-use";
import Axios from "axios";
import { object, func } from "prop-types";
import { Button, Form, Input, Select } from "antd";

let batchYears = [];

const latestBatch =
  new Date().getMonth() >= 4
    ? new Date().getFullYear()
    : new Date().getFullYear() - 1;

for (let index = 1989; index <= latestBatch; index++) {
  const tempYear = { value: index, label: index };
  batchYears.push(tempYear);
}

function AlumniRegistrationForm(props) {
  // const [regForm] = Form.useForm();

  const handleSubmit = () => {
    // make post request
    Axios.post("http://localhost:5000/register", {
      registrationDetails: props.alumniFormFields,
    }).then((e) => {
      console.log("handle submit", e);
    });

    console.log("success!!!::", props.alumniFormFields.email);

    // reset the form
    // regForm.resetFields();
  };

  useMount(() => {
    console.log("from Alumni form: ", props.alumniFormFields);
  });

  return (
    <div>
      <Form
        // form={regForm}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            value={props.alumniFormFields.name}
            placeholder="Firstname Lastname"
            onChange={(e) => props.setAlumniFormFields("name", e.target.value)}
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
            placeholder="enter email address"
            onChange={(e) => {
              props.setAlumniFormFields("email", e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Passing Batch"
          name="batch"
          rules={[{ required: true, message: "Please input your Batch year!" }]}
        >
          <Select
            style={{ width: 120 }}
            onChange={(e) => props.setAlumniFormFields("batch", e)}
            options={batchYears}
          />
        </Form.Item>

        <Form.Item
          label="Organization"
          name="organization"
          rules={[
            {
              required: true,
              message: "Please input your Organization/Company name!",
            },
          ]}
        >
          <Input
            placeholder="Current company name"
            onChange={(e) =>
              props.setAlumniFormFields("organization", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="Designation"
          name="designation"
          rules={[
            {
              required: true,
              message:
                "Please input your Designation in the respective organization!",
            },
          ]}
        >
          <Input
            placeholder="YOur designation in the company"
            onChange={(e) =>
              props.setAlumniFormFields("designationn", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[
            { required: true, message: "Please input your Current city!" },
          ]}
        >
          <Input
            placeholder="Enter current city of work"
            onChange={(e) => props.setAlumniFormFields("city", e.target.value)}
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

AlumniRegistrationForm.propTypes = {
  alumniFormFields: object,
  setAlumniFormFields: func,
};

export default AlumniRegistrationForm;
