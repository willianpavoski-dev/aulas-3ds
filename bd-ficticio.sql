-- Remove a tabela demo do SQLite DROP TABLE IF EXISTS demo;

-- Criação das tabelas CREATE TABLE Clientes ( id_cliente INTEGER PRIMARY KEY, nome TEXT, email TEXT, status_ativo INTEGER );

CREATE TABLE Produtos ( id_produto INTEGER PRIMARY KEY, nome TEXT, descricao TEXT, preco REAL, estoque INTEGER );

CREATE TABLE Vendas ( id_venda INTEGER PRIMARY KEY, id_cliente INTEGER, id_produto INTEGER, quantidade INTEGER, total REAL, FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente), FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto) );

-- Inserção de dados sem IDs manuais INSERT INTO Clientes (nome, email, status_ativo) VALUES ('Ana', 'ana@gmail.com', 1), ('Bruno', 'bruno@empresa.com', 1), ('Carla', 'carla@yahoo.com', 0), ('Diego', 'diego@empresa.com', 1), ('Eva', 'eva@gmail.com', 1);

INSERT INTO Produtos (nome, descricao, preco, estoque) VALUES ('Laptop Gamer', 'Alta performance para jogos', 2200, 5), ('Smartphone X', 'Promoção especial de verão', 1500, 20), ('Monitor 4K', 'Ideal para gráficos', 1200, 8), ('Teclado Mecânico', 'Promoção teclado gamer', 300, 15), ('Cadeira Escritório', 'Ergonômica corporativa', 800, 2);

INSERT INTO Vendas (id_cliente, id_produto, quantidade, total) VALUES (1, 1, 1, 2200), (2, 2, 2, 3000), (3, 4, 3, 900), (4, 5, 1, 800), (5, 3, 2, 2400), (2, 1, 1, 2200), (1, 2, 1, 1500);

-- Confirma se as inserções de dados funcionaram -- Mostrar todos os clientes SELECT * FROM Clientes;

-- Mostrar todos os produtos SELECT * FROM Produtos;

-- Mostrar todas as vendas SELECT * FROM Vendas;
