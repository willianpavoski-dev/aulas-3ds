-- Criação da Tabela Clientes
CREATE TABLE Clientes (
    ID INT PRIMARY KEY,
    nomeCliente VARCHAR(255),
    emailCliente VARCHAR(255)
);

-- Criação da Tabela Compras
CREATE TABLE Compras (
    CompraID INT PRIMARY KEY,
    ClientID INT,
    NomeLivro VARCHAR(255),
    FOREIGN KEY (ClientID) REFERENCES Clientes(ID)
);




SELECT * FROM Clientes;


SELECT Clientes.nomeCliente, Compras.NomeLivro
FROM Clientes
INNER JOIN Compras ON Clientes.ID = Compras.ClientID;
