import React, { useState } from "react";
import Axios from "axios";
import { Button, message, Popconfirm, Steps, theme } from "antd";
import { func } from "prop-types";
import { useMount, useSetState, useUpdateEffect } from "react-use";
import FirstUserChoose from "./FirstUserChoose";
import AlumniStudentForm from "./AlumniStudentForm";
import DisplayForm from "./DisplayForm";

function RegistrationModal(props) {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [state, setState] = useSetState({
    alumniOrStudent: undefined,
    formSubmitted: false,
    alumniFormFields: {
      name: "",
      email: "",
      batch: null,
      organization: "",
      designation: "",
      city: "",
    },
    studentFormFields: {
      name: "",
      email: "",
      dob: "",
      studentId: "",
      batch: null,
    },
  });

  useMount(() => {
    setCurrent(0);
  });

  useUpdateEffect(() => {
    if (current === 0) resetFormFields();
  }, [state.alumniOrStudent]);

  const userChose = (option) => {
    setState({ alumniOrStudent: option });
  };

  const setFormFields = (fieldName, value) => {
    if (state.alumniOrStudent === "Alumni") {
      const alumniFormFields = { ...state.alumniFormFields };
      alumniFormFields[fieldName] = value;
      setState({ alumniFormFields });
    }
    if (state.alumniOrStudent === "Student") {
      const studentFormFields = { ...state.studentFormFields };
      studentFormFields[fieldName] = value;
      setState({ studentFormFields });
    }
  };

  const formSubmitted = (bool) => {
    setState({ formSubmitted: bool });
  };

  const steps = [
    {
      key: 0,
      title: "Choose",
      content: <FirstUserChoose userChose={userChose} />,
    },
    {
      key: 1,
      title: "Registration",
      content: (
        <AlumniStudentForm
          setFormFields={setFormFields}
          alumniFormFields={state.alumniFormFields}
          studentFormFields={state.studentFormFields}
          alumniOrStudent={state.alumniOrStudent}
          formSubmitted={formSubmitted}
        />
      ),
    },
    {
      key: 2,
      title: "Preview",
      content: (
        <DisplayForm
          formFields={
            state.alumniOrStudent === "Alumni"
              ? state.alumniFormFields
              : state.alumniOrStudent === "Student"
              ? state.studentFormFields
              : {}
          }
          alumniOrStudent={state.alumniOrStudent}
        />
      ),
    },
  ];

  const resetFormFields = () => {
    const alumniFormFields = {
      name: "",
      email: "",
      batch: null,
      organization: "",
      designation: "",
      city: "",
    };
    const studentFormFields = {
      name: "",
      email: "",
      dob: "",
      studentId: "",
      batch: "",
    };
    setState({ alumniFormFields, studentFormFields });
  };

  const handleNext = () => {
    setCurrent(current + 1);
  };

  const confirmOk = () => {
    handlePrev();
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };

  const handleDone = () => {
    Axios.post("http://localhost:5000/register", {
      registrationDetails:
        state.alumniOrStudent === "Alumni"
          ? state.alumniFormFields
          : state.alumniOrStudent === "Student"
          ? state.studentFormFields
          : "Data not added!",
    }).then((e) => {
      console.log("handle submit", e);
    });
    props.openRegister(false);
    message.success("Processing complete!");
    setCurrent(0);
    resetFormFields();
  };

  const items = steps.map((item, key) => ({
    key: key,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            disabled={
              (current === 0 && !state.alumniOrStudent) ||
              (!state.formSubmitted && current === 1)
            }
            type="primary"
            onClick={handleNext}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={handleDone}>
            Done
          </Button>
        )}
        {current === 1 && (
          <Popconfirm
            title="Go back to choose Alumni/Student?"
            description="Are you sure? Your progress will be lost."
            onConfirm={confirmOk}
            okText="Yes"
            cancelText="Cancel"
          >
            <Button style={{ margin: "0 8px" }}>Go Back</Button>{" "}
          </Popconfirm>
        )}
        {current === 2 && (
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Edit Form
          </Button>
        )}
      </div>
    </div>
  );
}

RegistrationModal.propTypes = {
  openRegister: func,
};

export default RegistrationModal;
