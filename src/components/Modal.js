import React from "react";
import { CloseOutlined } from "@material-ui/icons";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "20px",
  zIndex: 1000,
  borderRadius: "10px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <CloseOutlined onClick={onClose} style={{ cursor: "pointer" }} />
        {children}
      </div>
    </>
  );
};

export default Modal;
