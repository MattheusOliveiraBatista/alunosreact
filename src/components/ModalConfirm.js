import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalConfirm({ isOpen, onConfirm, onCancel, mensagem }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Confirmação</ModalHeader>
      <ModalBody>{mensagem}</ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={onConfirm}>
          Confirmar
        </button>
        <button className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalConfirm;
