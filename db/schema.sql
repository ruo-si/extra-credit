DROP DATABASE IF EXISTS extra_credit_db;
CREATE DATABASE extra_credit_db;

USE extra_credit_db;

-- SEARCH HISTORY --
CREATE TABLE search_history(
    id INT NOT NULL AUTO_INCREMENT,
    search_price INTEGER,
    PRIMARY KEY (id)
);

-- WALLET --
CREATE TABLE wallet (
  id INT NOT NULL AUTO_INCREMENT,
  cc_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

-- FACTS --
CREATE TABLE facts_library (
  id INT NOT NULL AUTO_INCREMENT,
  fact VARCHAR(400) NOT NULL,
  PRIMARY KEY (id)
);
