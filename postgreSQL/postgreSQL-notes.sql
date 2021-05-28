/*CONNECT TO THE POSTGRESQL DATABASE SERVER VIA PSQL
** In PostgreSQL, a user account is referred to as a role. By default, PostgreSQL uses ident authentication.
** It means that PostgreSQL will associate its roles with the system accounts of Linux. 
** If a role exists in PostgreSQL, the same Linux user account with the same name is able to log in as that role.
** When you installed PostgreSQL, the installation process created a user account called postgres associated with the default postgres role.
*/
-- To connect to PostgreSQL using the postgres role, you switch over to the postgres account on your server by typing:
	sudo -i -u postgres
-- Then, you can access the PostgreSQL using the psql by typing the following command:
	psql
-- You’ll access the postgres prompt like this, and From here, you can interact with the PostgreSQL like issuing a query.
	postgres=#

/*
There are four levels of organisation in Pg:

^ Cluster - controlled by the postmaster, accepts connections on a given IP/port combo, contains one or more databases including the built-in template0, template1 and postgres databases. Controlled by postgresql.conf and pg_hba.conf. Your DB cluster is often created for you by an installer or package. Not to be confused with the normal meaning of cluster as a compute cluster or the general english language meaning.

^ Database - contains one or more schemata or schemas. You connect to a specific database when connecting to Pg.

^ Schema - contains objects including relations. If you do not specify otherwise, anything user-created goes into the public schema. Queries can reference objects in multiple schema explicitly or, via search_path, implicitly.

^ Objects - Somewhat PostgreSQL specific, anything (including a relation) that exists in a schema.

    + Relations - Things that look and behave like tables, like views and tables
    + Other objects also reside in schemas, like functions, casts, indexes, sequences, operators, aggregates, etc.
*/

--OTHER
  --display all roles: 
    \du
  
  --toggle on/of extended display (it shows the record downward)
    \x

  --help
    \?


    

--DATABASE:
  --crete
	CREATE DATABASE test;

  --delete
	DROP DATABASE test;

  --display database list
	\l 

  --move around databse
	\c database_name

  --exit from database
	\q



--TABLE 
  --display 
	\d              --display all relations
	\d person       --display the structure of person table
	\dt 			--display only the table

   --CREATE TABLE (with person referencing car)
        CREATE TABLE car (
            id BIGINT NOT NULL PRIMARY KEY,
            make VARCHAR(100) NOT NULL,
            model VARCHAR(100) NOT NULL,
            price NUMERIC(19, 2) NOT NULL
        );

        CREATE TABLE person (
            id BIGSERIAL NOT NULL PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            gender VARCHAR(7) NOT NULL,
            email VARCHAR(100),
            date_of_birth DATE NOT NULL,
            country_of_birth VARCHAR(50) NOT NULL,
            car_id BIGINT REFERENCES car (id),
            UNIQUE(car_id)
        );

    --DELETE a TABLE:
        DROP TABLE person; 

    --RENAME a TABLE:
        ALTER TABLE employee RENAME TO employee2;

    --RENAME COLUMN name:
        ALTER TABLE employee2 RENAME COLUMN e_salary TO employee_salary;

    --CHANGE COLUMN DATA TYPE:
        ALTER TABLE employee2
            ALTER COLUMN employee_salary SET DATA TYPE int;
       

--ENTITY/RECORD 
    --INSERT INTO TABLE:
        INSERT INTO person (first_name, last_name, gender, date_of_birth)
        VALUES ('Anne', 'Smith', 'Female', DATE '1988-01-09');

    --READ FROM TABLE:
        SELECT * FROM person;					    --select every single column from this table
        SELECT first_name, last_name FROM person; 	--select some columns only


    --delete a record
        DELETE FROM people WHERE id = 1;

    --UPDATE 
        UPDATE people SET email = 'emilyFirstSecond@gmail.com' WHERE id = 4;
        UPDATE people SET first_name = 'Ally', last_name = 'nuttmeg' WHERE id =4;

--CREATE TABLE & RECORD from a file
	    \i specific_file_location_with_file_name_and_extension   




        
--SORT:
   -- read and sort in the ascending order
        SELECT * FROM person ORDER BY country_of_birth ASC;		
        SELECT * FROM person ORDER BY country_of_birth;		

   --read and sort in descending order
        SELECT * FROM person ORDER BY date DESC;

   --use DISTINCT to remove duplicate value of column 
        SELECT DISTINCT country_of_birth FROM person ORDER BY country_of_birth;   


--WHERE filter
   --where is used to filter based on column value, it can be combined with AND & OR
        SELECT * FROM person WHERE gender = 'Male';			 
        SELECT * FROM person WHERE gender = 'Male' AND country_of_birth = 'Poland';
        SELECT * FROM person WHERE gender = 'Male' AND (country_of_birth = 'Poland' OR country_of_birth = 'China');

   --IN can be used to help us write less code, it is similar to using OR
        SELECT * FROM person WHERE country_of_birth = 'China' OR country_of_birth = 'Poland';
        SELECT * FROM person WHERE country_of_birth IN ('China', 'Poland');         

   --use the combination of BETWEEN & AND to select from a certain range
        SELECT * FROM people WHERE date_of_birth BETWEEN DATE '1960-01-01' AND '2000-01-01';      
    
   --filters all emails that ends in .com;  % is the wildcard character
        SELECT * FROM people WHERE email LIKE '%.com';        

   --filters all emails that use google domain from any country
        SELECT * FROM people WHERE email LIKE '%@google.%';   

   --filters all emails that has 5 characters before @ and anything after @
        SELECT * FROM people WHERE email LIKE '_____@%';      

   --this is similar to using LIKE, it is just using insensitive case
        SELECT * FROM people WHERE country_of_birth ILIKE 'p%';     


--LIMIT & OFFSET
   --this limit the result to the first 10 rows only
        SELECT * FROM person LIMIT 10;           

   --this skip the first 5 rows and show the next 5 rows (show row 6-10)
        SELECT * FROM person OFFSET 5 LIMIT 5;   

   --this is similar to the above, it is just this is the official sql way
        SELECT * FROM person OFFSET 5 FETCH FIRST 5 ROW ONLY; 

   --this skip the first 5 rows and show the remaining rows (show row 6-1000)
        SELECT * FROM person OFFSET 5;           



--aggregate function: COUNT, MAX, MIN, AVG, SUM with GROUP BY column
   --showing total number of a column_value 
        SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth;  

   --total number of a column_value & sort it
        SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth ORDER BY country_of_birth; 

   --total number of a column_value must be bigger than sth & sort it
        SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 5 ORDER BY country_of_birth; 

   --show the max value of price_column
        SELECT MAX(price) FROM car; 

   --show the min value of price_column
        SELECT MIN(price) FROM car; 

   --show the average value of price_column
        SELECT AVG(price) FROM car; 

   --show the average value of price_column, and round the decimal
        SELECT ROUND(AVG(price)) FROM car; 

   --show the min value of price_column for each make and model
        SELECT make, model, MIN(price) FROM car GROUP BY make, model; 

   --show the max value of price_column for each make and model
        SELECT make, model, MAX(price) FROM car GROUP BY make, model; 

   --total price of all
        SELECT SUM(price) FROM car; 

   --sum by the actual car make
        SELECT make, SUM(price) FROM car GROUP BY make; 





--Arithamic operation, these operations below can be used in the where clause
   --result in t
        SELECT 1 <> 2; 

   --result in t
        SELECT 1 >= 0; 

   --result in f
        SELECT 'code'='CODE'; 

   --calculation
        SELECT 10/2;
        SELECT 10-2;
        SELECT 10+2;
        SELECT 10*2;
        SELECT 10^2;
        SELECT 5!;
        SELECT 10%3;

   --usage in real life situation
     --car table has column of id, make, model, price        
        SELECT * FROM car;                                      
        SELECT id, make, model, price, price* 0.10 FROM car;        

     --round the numbers into 2 decimals
        SELECT id, make, model, price, ROUND(price* 0.10, 2) FROM car;        
        SELECT id, make, model, price, ROUND(price* 0.10, 2), ROUND(price - (price*0.10),2) FROM car;

     --giving ALIAS to columns
        SELECT id, make, model, price AS original_price, ROUND(price*0.10, 2) AS discount, ROUND(price - (price*0.10),2) AS discounted_price FROM car;
        


--COALESCE
    --COALESCE takes integer as input
    --this returns column of COALESCE with the value of 1
        SELECT COALESCE(1);

    --all of these below return column name of number (we give alias to it) with the value of 1
        SELECT COALESCE(1) AS number;
        SELECT COALESCE(null, 1) AS number;
        SELECT COALESCE(null, null, 1) AS number;
        SELECT COALESCE(null, null, 1, 10) AS number;

    --filling all empty emails with '-' 
        SELECT COALESCE(email, '-') FROM person;



--NULLIF: this helps avoid division by 0; it takes 2 arguments(number). if the 1st = 2nd, the result is null, else it returns the 1st argument
    --this will throw error
        SELECT 10/0;

    --this will not throw error, it returns null
        SELECT 10 / NULL;
        SELECT 10 / NULLIF(0,0);

    --real life scenario, where we give default value of 0, for any divison by 0 that does not throw error using COALESCE
        SELECT COALESCE(10 / NULLIF(0,0), 0);



--DATE & TIMESTAMP
        SELECT NOW();
        SELECT NOW()::DATE;
        SELECT NOW()::TIME;
        SELECT NOW() - INTERVAL '1 YEAR';
        SELECT NOW() - INTERVAL '10 YEARS';  --u can write year or years, and this applies to other time too
        SELECT NOW() - INTERVAL '10 MONTHS';
        SELECT NOW() + INTERVAL '10 DAY';
        
    --output only a certain part
        SELECT NOW()::TIME + INTERVAL '10 HOURS';
        SELECT (NOW() + INTERVAL '3 MONTHS')::DATE;

    --extract specific value from date
        SELECT EXTRACT(YEAR FROM NOW());
        SELECT EXTRACT(DOW FROM NOW()));  --DOW is day of the week
        SELECT EXTRACT(CENTURY FROM NOW());



--CONSTRAINT 
    --Drop unique constraint;  unique constraint allow us to have a unique value per column  
        ALTER TABLE people DROP CONSTRAINT constraint_name;

    --Add primary key with id as its argument; the primary key constraint is used to uniquely indentifies each record in a table 
        ALTER TABLE people ADD PRIMARY KEY(id);
        
    --Add unique constraint with email as its argument
        ALTER TABLE people ADD CONSTRAINT unique_email_address UNIQUE (email);
        ALTER TABLE people ADD UNIQUE (email);  --the constraint name is automatically given by postgreSQL

    --CHECK CONSTRAINT: give restriction to the value of column. For e.g. only give the value of male or female inside gender column
        ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');


        
--ON CONFLICT
    --DO NOTHING : do this for columns that have constraint, i.e. primary key or unique constraint
        INSERT INTO people (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) 
        VALUES (20, 'Joaquin','Badham', 'jbadhamj@delicousdays.com', 'Male', '1984-11-04', 'Albania')
        ON CONFLICT (id) DO NOTHING;

    --DO UPDATE : take the latest change 
        INSERT INTO people (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) 
        VALUES (20, 'Joaquin','Badham', 'jbadhamj@delicousdays.com', 'Male', '1984-11-04', 'Albania')
        ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;

        INSERT INTO people (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) 
        VALUES (20, 'Joaquin','Badham', 'jbadhamj@delicousdays.com', 'Male', '1984-11-04', 'Albania')
        ON CONFLICT (id) DO UPDATE SET first_name = EXCLUDED.first_name, last_name = EXCLUEDED.last_name, email = EXCLUDED.email, date_of_birth = EXCLUDED.date_of_birth, country_of_birth = EXCLUDED.country_of_birth;



--JOIN
     --INNER JOIN: select records that have matching values in both tables
        SELECT * FROM person JOIN car ON person.car_id = car.id;
        SELECT person.first_name, car.make, car.model, car.price FROM person JOIN CAR ON person.car_id = car.id;

    --LEFT JOIN: select all records from left table and the matched records (if exist, else it shows null) from right table
        SELECT * FROM person LEFT JOIN car ON person.car_id = car.id;
        SELECT * FROM person LEFT JOIN car ON car.id = person.car_id WHERE car.* IS NULL;  --show records which every columns from car table is null

    --How to DELETE a record in right table which is referenced by a record in left table
       --1. delete a record from left table that has foreign key constraint in it, and delete matching record from the right table
       --2. update the foreign key value in that record to be null, and delete matching record from the right table
        

--EXPORT TO FILE
        \copy (SELECT * FROM person LEFT JOIN car on car.id = person.car_id ORDER BY person.id) TO '/home/ikram/Programming/SQL-postgreSQL-mySQL/exported.csv' DELIMITER ',' CSV HEADER;




--SEQUENCE
    --move to the next sequence
        SELECT nextval('person_id_seq'::regclass);
        SELECT nextval('person_id_seq');

    --show current sequence
        SELECT * FROM person_id_seq;

    --ALTER SEQUENCE
        ALTER SEQUENCE person_id_seq RESTART WITH 10;



--CRUD APP 
    --CREATE  
        INSERT INTO todo (description) VALUES('Something');
        INSERT INTO todo (description) VALUES(14331) RETURNING *; --returning our latest inputted data in crud application
    --READ 
        SELECT * FROM todo;
        SELECT * FROM todo WHERE todo_id = 343;
    --UPDATE
        UPDATE todo SET description = 'doing sth' WHERE todo_id = 4;
    --DELETE 
        DELETE FROM todo WHERE todo_id = 3;



--EXTENSION
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";




--TRANSACTION: a unit of work containing one or more SQL statements, where either all succeed or fail (if any of the sql queries hits error, then all queries will fail)
    --start transaction
        begin;

    --save changes to the db (choose 1 from below)
        end transaction;
        commit;

    --undo changes
        rollback;

    --undo changes to a certain point
        savepoint my_savepoint;
        .
        .
        .
        rollback to my_savepoint;
