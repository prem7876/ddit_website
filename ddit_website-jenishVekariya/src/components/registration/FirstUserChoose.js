import { Button } from "antd";
import { func } from "prop-types";
import React from "react";

function FirstUserChoose(props) {
  return (
    <div>
      <Button onClick={() => props.userChose("Alumni")}>I'm an Alumni</Button>
      <Button onClick={() => props.userChose("Student")}>I'm a Student</Button>
    </div>
  );
}

FirstUserChoose.propTypes = {
  userChose: func,
};

export default FirstUserChoose;
