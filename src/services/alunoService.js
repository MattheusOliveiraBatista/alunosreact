import axios from "axios";

const API_URL = "https://localhost:7076/api";

export const getAlunos = async () => {
  const { data } = await axios.get(`${API_URL}/Alunos`);
  return data;
};

export const adicionarAluno = async (aluno) => {
  const { data } = await axios.post(`${API_URL}/AdicionarAluno`, aluno);
  return data;
};

export const editarAluno = async (aluno) => {
  await axios.put(`${API_URL}/EditarAluno/${aluno.id}`, aluno);
};

export const excluirAluno = async (id) => {
  await axios.delete(`${API_URL}/ExcluirAluno/${id}`);
};
