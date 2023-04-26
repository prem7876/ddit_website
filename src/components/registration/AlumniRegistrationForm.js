import React, { useState } from "react";
import Axios from "axios";
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

export default function Registration() {
  const [state, setState] = useState({
    name: "",
    email: "",
    batch: null,
    organization: "",
    designation: "",
    city: "",
  });

  const resetForm = () => {
    setState({
      name: "",
      email: "",
      batch: null,
      organization: "",
      designation: "",
      city: "",
    });
  };

  const handleSubmit = () => {
    // make post request
    Axios.post("http://localhost:5000/register", {
      registrationDetails: state,
    }).then((e) => {
      console.log("handle submit", e);
    });

    console.log("success!!!::", state.email);

    // reset the form
    resetForm();
  };

  return (
    <div>
      <Form
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
            placeholder="Firstname Lastname"
            onChange={(e) => setState({ ...state, name: e.target.value })}
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
              setState({ ...state, email: e.target.value });
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
            onChange={(e) => setState({ ...state, batch: e })}
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
              setState({ ...state, organization: e.target.value })
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
                "Please input your DEsignation in the respective organization!",
            },
          ]}
        >
          <Input
            placeholder="YOur designation in the company"
            onChange={(e) =>
              setState({ ...state, designation: e.target.value })
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
            onChange={(e) => setState({ ...state, city: e.target.value })}
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
