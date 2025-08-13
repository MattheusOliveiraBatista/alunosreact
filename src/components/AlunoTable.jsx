import React from "react";

const AlunoTable = ({ alunos, onEditar, onExcluir }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>EMAIL</th>
        <th>IDADE</th>
        <th>OPERAÇÃO</th>
      </tr>
    </thead>
    <tbody>
      {alunos.map((aluno) => (
        <tr key={aluno.id}>
          <td>{aluno.id}</td>
          <td>{aluno.nome}</td>
          <td>{aluno.email}</td>
          <td>{aluno.idade}</td>
          <td>
            <button className="btn btn-warning" onClick={() => onEditar(aluno)}>
              Editar
            </button>
            <button className="btn btn-danger" onClick={() => onExcluir(aluno)}>
              Excluir
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AlunoTable;
