import React from "react";
import { useSetState } from "react-use";
import "../styles/Card.css";
import { Modal, Button } from "antd";
import photo from "../assets/gears.gif";
import RegistrationModal from "./registration/RegistrationModal";

function Card() {
  const [state, setState] = useSetState({
    onRegister: false,
  });

  const openRegister = (bool) => {
    setState({ onRegister: bool });
  };
  return (
    <div className="card">
      <div className="left">
        <h1 className="txth1">Connect with</h1>
        <h1 className="txth1" id="ddu" data-text=" DDU Instrumentation">
          DDU Instrumentation
        </h1>
        <h1 className="txth1">Community</h1>

        <Button className="btn" onClick={() => openRegister(true)}>
          Register
        </Button>
        <Modal
          title="Hi, Please choose an appropreate option to proceed further"
          open={state.onRegister}
        >
          <RegistrationModal openRegister={openRegister} />
        </Modal>
      </div>

      <div className="right">
        <img src={photo} width="400" alt="img" />
      </div>
    </div>
  );
}

export default Card;
