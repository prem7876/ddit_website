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
  const [regForm] = Form.useForm();

  const handleSubmit = () => {
    console.log("success!!!::", props.alumniFormFields.email);
    Axios.post("http://localhost:5000/register", {
      registrationDetails: props.alumniFormFields,
    }).then((e) => {
      console.log("handle submit", e);
    });
    props.formSubmitted(true);
  };

  useMount(() => {
    props.formSubmitted(false);
    regForm.setFieldsValue({
      name: props.alumniFormFields.name,
      email: props.alumniFormFields.email,
      batch: props.alumniFormFields.batch,
      organization: props.alumniFormFields.organization,
      designation: props.alumniFormFields.designation,
      city: props.alumniFormFields.city,
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
            // value={props.alumniFormFields.name}
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
            name="email"
            value={props.alumniFormFields.email}
            placeholder="enter email address"
            onChange={(e) => {
              props.setFormFields("email", e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Passing Batch"
          name="batch"
          rules={[{ required: true, message: "Please input your Batch year!" }]}
        >
          <Select
            name="batch"
            // value={props.alumniFormFields.batch}
            style={{ width: 120 }}
            onChange={(e) => props.setFormFields("batch", e)}
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
            // name="organization"
            value={props.alumniFormFields.organization}
            placeholder="Current company name"
            onChange={(e) =>
              props.setFormFields("organization", e.target.value)
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
            // name="designation"
            // value={props.alumniFormFields.designation}
            placeholder="YOur designation in the company"
            onChange={(e) => props.setFormFields("designation", e.target.value)}
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
            // name="city"
            // value={props.alumniFormFields.city}
            placeholder="Enter current city of work"
            onChange={(e) => props.setFormFields("city", e.target.value)}
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
  setFormFields: func,
  formSubmitted: func,
};

export default AlumniRegistrationForm;
