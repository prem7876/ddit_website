import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { func } from "prop-types";
import { useSetState } from "react-use";
import FirstUserChoose from "./FirstUserChoose";
import AlumniStudentForm from "./AlumniStudentForm";

// const steps = [
//   {
//     title: "First",
//     content: "First-content",
//   },
//   {
//     title: "Second",
//     content: "Second-content",
//   },
//   {
//     title: "Last",
//     content: "Last-content",
//   },
// ];

const RegistrationModal = (props) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [state, setState] = useSetState({
    alumniOrStudent: undefined,
  });

  const userChose = (option) => {
    setState({ alumniOrStudent: option });
  };

  const steps = [
    {
      key: 0,
      title: "Choose",
      content: <FirstUserChoose userChose={userChose} />,
    },
    {
      key: 1,
      title: "Registration  ",
      content: <AlumniStudentForm alumniOrStudent={state.alumniOrStudent} />,
    },
    {
      key: 2,
      title: "Last",
      content: "Last-content",
    },
  ];

  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };

  const handleDone = () => {
    props.openRegister(false);
    message.success("Processing complete!");
    setCurrent(0);
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
            disabled={!state.alumniOrStudent}
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
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

RegistrationModal.propTypes = {
  openRegister: func,
};

export default RegistrationModal;
