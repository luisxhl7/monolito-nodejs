    -- creando la base de datos
    CREATE DATABASE crudpersonnodejs;

    -- utilizando la base de datos
    use crudpersonnodejs;

    -- creando la TABLESPACE
    CREATE TABLE person (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        documentType VARCHAR(5) NOT NULL,
        documentNumber VARCHAR(15) NOT NULL,
        age NUMERIC(3) NOT NULL,
        cityOfBirth VARCHAR(100) NOT NULL
    );

    -- para mostrar todas las TABLESPACE
    SHOW TABLES;

