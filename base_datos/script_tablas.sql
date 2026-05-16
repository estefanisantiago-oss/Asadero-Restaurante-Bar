CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT,
    genero VARCHAR(50),
    telefono VARCHAR(50),
    rol VARCHAR(50),
    horario VARCHAR(100),
    password VARCHAR(255)
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mesa INT,
    productos TEXT,
    tipo VARCHAR(50),
    estado VARCHAR(50),
    total DECIMAL(10,2),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    fecha DATE,
    hora TIME,
    personas INT,
    telefono VARCHAR(50),
    tipo VARCHAR(100),
    preferencias TEXT,
    confirmacion VARCHAR(100),
    condiciones TEXT
);

CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mesa INT,
    total DECIMAL(10,2),
    metodo_pago VARCHAR(50),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios(
 id INT AUTO_INCREMENT PRIMARY KEY,
 usuario VARCHAR(50),
 password VARCHAR(100),
 rol VARCHAR(50)
);