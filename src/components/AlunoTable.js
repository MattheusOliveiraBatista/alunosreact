import React from "react";

function AlunoTable({ alunos, onEditar, onExcluir }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
          <th style={{ width: 160 }}>Operações</th>
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
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEditar(aluno)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onExcluir(aluno)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AlunoTable;
