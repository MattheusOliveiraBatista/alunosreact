import React, { useState, useEffect } from "react";
import logoCadastro from "./assets/cadastro.png";
import { getAlunos, adicionarAluno, editarAluno, excluirAluno } from "./services/alunoService";
import AlunoForm from "./components/AlunoForm";
import AlunoTable from "./components/AlunoTable";
import ModalConfirm from "./components/ModalConfirm";

function App() {
  const [dados, setDados] = useState([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [modal, setModal] = useState({ tipo: "", aberto: false });

  const carregarDados = async () => {
    const lista = await getAlunos();
    setDados(lista);
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const handleSalvar = async (aluno) => {
    if (aluno.id) {
      await editarAluno(aluno);
    } else {
      await adicionarAluno(aluno);
    }
    setModal({ tipo: "", aberto: false });
    carregarDados();
  };

  const handleExcluir = async () => {
    await excluirAluno(alunoSelecionado.id);
    setModal({ tipo: "", aberto: false });
    carregarDados();
  };

  return (
    <div className="App">
      <header className="d-flex align-items-center gap-3 mb-4">
        <img src={logoCadastro} alt="Cadastro" width="50" />
        <h3>Cadastro de Alunos</h3>
        <button
          className="btn btn-primary ms-auto"
          onClick={() => {
            setAlunoSelecionado(null);
            setModal({ tipo: "form", aberto: true });
          }}
        >
          Incluir Novo Aluno
        </button>
      </header>

      <AlunoTable
        alunos={dados}
        onEditar={(aluno) => {
          setAlunoSelecionado(aluno);
          setModal({ tipo: "form", aberto: true });
        }}
        onExcluir={(aluno) => {
          setAlunoSelecionado(aluno);
          setModal({ tipo: "confirm", aberto: true });
        }}
      />

      {modal.tipo === "form" && (
        <AlunoForm
          aluno={alunoSelecionado}
          isOpen={modal.aberto}
          onClose={() => setModal({ tipo: "", aberto: false })}
          onSalvar={handleSalvar}
        />
      )}

      {modal.tipo === "confirm" && (
        <ModalConfirm
          isOpen={modal.aberto}
          onConfirm={handleExcluir}
          onCancel={() => setModal({ tipo: "", aberto: false })}
          mensagem={`Deseja excluir ${alunoSelecionado?.nome}?`}
        />
      )}
    </div>
  );
}

export default App;
