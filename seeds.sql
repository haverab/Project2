INSERT INTO recruiter (firstName, lastName, companyName, email, password) VALUES ('Fabian', 'Byrd', 'Google', 'fbyrd@recruiter.com', 'password1');
INSERT INTO recruiter (firstName, lastName, companyName, email, password) VALUES ('Shawanda', 'Ford', 'Amazon', 'sford@recruiter.com', 'password2');
INSERT INTO recruiter (firstName, lastName, companyName, email, password) VALUES ('Allison', 'Haver', 'Target', 'ahaver@recruiter.com', 'password3');

INSERT INTO USER (firstName, lastName, email, phone, userType)
VALUES ('Tristan', 'Eastman', 'teastman@hireme.com', 201-555-5555, 'recent grad');
INSERT INTO USER (firstName, lastName, email, phone, userType) 
VALUES ('Dallis', 'Conner', 'dconner@hireme.com', 540-555-5555, 'student');
INSERT INTO USER (firstName, lastName, email, phone, userType) 
VALUES ('Sendy', 'Mederos', 'smederos@hireme.com', 201-555-5555, 'recent grad');



INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Jr. Web Developer', 'Charlotte','North Carolina', 'http://www.uncc.edu', NOW(), NOW(), 4);

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Front End Developer', 'Charlotte', 'North Carolina', 'http://www.indeed.com', NOW(), NOW(), 3);

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Full Stack Web Developer', 'Memphis', 'Tennessee', 'http://linkedin.com', NOW(), NOW(), 4);

