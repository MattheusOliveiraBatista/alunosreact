import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function AlunoForm({ aluno, isOpen, onClose, onSalvar }) {
  const [formData, setFormData] = useState({ nome: "", email: "", idade: "" });

  useEffect(() => {
    if (aluno) setFormData(aluno);
  }, [aluno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSalvar({ ...formData, idade: parseInt(formData.idade) });
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>{aluno ? "Editar Aluno" : "Incluir Aluno"}</ModalHeader>
      <ModalBody>
        <input
          type="text"
          name="nome"
          className="form-control mb-2"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="idade"
          className="form-control"
          placeholder="Idade"
          value={formData.idade}
          onChange={handleChange}
        />
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" onClick={handleSubmit}>
          Salvar
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default AlunoForm;
