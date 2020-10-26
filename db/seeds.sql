
use codeConnection;

INSERT INTO user (firstName, lastName, phone, email, password, userType, createdAt, updatedAt)
VALUES ('Tristan', 'Eastman', 201-555-5555, 'tires@hireme.com','password1', 'recent grad',NOW(), NOW());
INSERT INTO user (firstName, lastName, phone, email, password, userType, createdAt, updatedAt)
VALUES ('Dallis', 'Conner', '540-555-5555', 'dconner@hireme.com', 'password2', 'student', NOW(), NOW());
INSERT INTO user (firstName, lastName, phone, email, password, userType, createdAt, updatedAt)
VALUES ('Sendy', 'Mederos', '201-555-5555','smederos@hireme.com', 'password3', 'recent grad', NOW(), NOW());

INSERT INTO recruiters (firstName, lastName, companyName, email, password, createdAt, updatedAt) 
VALUES ('Bob', 'Doe', 'Walmart', 'bdoe@recruiter.com', 'password1',NOW(), NOW());

INSERT INTO recruiters (firstName, lastName, companyName, email, password, createdAt, updatedAt)
VALUES ('Shawanda', 'Ford', 'Amazon', 'sford@recruiter.com', 'password2',NOW(), NOW());

INSERT INTO recruiters (firstName, lastName, companyName, email, password, createdAt, updatedAt) 
VALUES ('Allison', 'Haver', 'Target', 'ahaver@recruiter.com', 'password3',NOW(), NOW());



INSERT INTO gigs (recruiterId, jobTitle, city, state, jobURL, createdAt, updatedAt)
VALUES (1,'Jr. Web Developer','Charlotte', 'North Carolina','www.careercenter.com' ,NOW(), NOW());
INSERT INTO gigs (recruiterId, jobTitle, city, state, jobURL, createdAt, updatedAt)
VALUES (2,'Front End Developer','Charlotte', 'North Carolina', 'www.testcenter.com',NOW(),NOW());
INSERT INTO gigs (recruiterId, jobTitle, city, state, jobURL, createdAt, updatedAt)
VALUES (3,'Full Stack Web Developer','Charlotte', 'North Carolina','www.uncc.edu',NOW(),NOW());


