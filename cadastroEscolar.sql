-- 1. Limpeza inicial
DROP TABLE IF EXISTS demo;

-- 2. Criação das Tabelas (DDL)
CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);

CREATE TABLE Professor (
    id_professor INT PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(11)
);

CREATE TABLE Escola (
    id_escola INT PRIMARY KEY,
    nome_escola VARCHAR(100),
    cidade VARCHAR(50)
);

-- 3. Inserção de Dados (DML)
INSERT INTO Aluno (id_aluno, nome, idade) VALUES
(1, 'Ana Costa', 18), (2, 'João Silva', 20), (3, 'Maria Oliveira', 19), 
(4, 'Carlos Souza', 21), (5, 'Beatriz Santos', 22);

INSERT INTO Professor (id_professor, nome, cpf) VALUES
(1, 'Ricardo Aris', '12345678901'), (2, 'Fernanda Lima', '98765432100'), (3, 'Roberto Gomes', '11122233344');

INSERT INTO Escola (id_escola, nome_escola, cidade) VALUES
(1, 'Escola Alpha', 'São Paulo'), (2, 'Colégio Beta', 'Rio de Janeiro'), (3, 'Instituto Gamma', 'Curitiba');

-- 4. Consulta Final (DQL)
SELECT * FROM Aluno;
