
INSERT INTO users (firstName, lastName, phone, email, password, userType, createdAt, updatedAt)
VALUES ('Tristan', 'Eastman', 201-555-5555, 'teastman@hireme.com', 'tireuser', 'recent grad', NOW(0), NOW(0));
INSERT INTO users (firstName, lastName, phone, email, password, userType, createdAt, updatedAt) 
VALUES ('Dallis', 'Connor', 540-555-5555, 'dconnor@hireme.com', 'user2', 'recent grad', NOW(0), NOW(0));
INSERT INTO users (firstName, lastName, phone, email, password, userType, createdAt, updatedAt)
VALUES ('Sendy', 'Mederos', 704-555-5555, 'smederos@hireme.com', 'user3', 'recent grad', NOW(0), NOW(0));


INSERT INTO gigs (recruiterID, jobTitle, city, state, jobURL, createdAt, updatedAt)
VALUES (1,'Jr. Web Developer','Charlotte', 'North Carolina', 'www.monster.com', NOW(0), NOW(0));
INSERT INTO gigs (recruiterID, jobTitle, city, state, jobURL, createdAt, updatedAt)
VALUES (2, 'Front End Developer','Charlotte', 'North Carolina', 'www.techjobs.com',NOW(0), NOW(0));
INSERT INTO gigs (recruiterID, jobTitle, city, state, jobURL, createdAt, updatedAt)
VALUES (3, 'Full Stack Web Developer','Charlotte', 'North Carolina', 'www.hired.com', NOW(0), NOW(0));
VALUES (3, 'Full Stack Web Developer','Charlotte', 'North Carolina', 'www.hired.com', NOW(0), NOW(0));



INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Jr. Web Developer', 'Charlotte','North Carolina', 'http://www.uncc.edu', NOW(), NOW(), 4);

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Front End Developer', 'Charlotte', 'North Carolina', 'http://www.indeed.com', NOW(), NOW(), 3);

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Full Stack Web Developer', 'Memphis', 'Tennessee', 'http://linkedin.com', NOW(), NOW(), 4);


