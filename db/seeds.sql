
use codeConnection;

INSERT INTO user (firstName, lastName, phone, message, email, password, userType, imgUrl, createdAt, updatedAt)
VALUES ('Allison', 'Haver', '201-555-5555', 'Motivated Web Developer','ahaver@hireme.com', '$2a$10$IwBEFLyPNqutwwMUtN2pe.4iPxeLCtbqFwtTZ5VH1z93AxOpHFUFK', 'student','https://avatars0.githubusercontent.com/u/67609357?s=460&u=5bb680c7d7a97bcb81e8015ac0787d75408f8b79&v=4', NOW(0), NOW(0));

INSERT INTO user (firstName, lastName, phone, message, email, password, userType, imgUrl, createdAt, updatedAt)
VALUES ('Tristan', 'Eastman', '777-777-7777', 'Coding Rocks!','teastman@hireme.com', '$2a$10$qqxNQfN8PsWUTONcbM5JeOUDmshhChY2YJsbV2cwNC.juQFFxqx4q', 'student','https://avatars3.githubusercontent.com/u/66699557?s=460&u=c21888aadf2909380d83c4dd5d8578869d5c9e42&v=4', NOW(0), NOW(0));

INSERT INTO user (firstName, lastName, phone, message, email, password, userType, imgUrl, createdAt, updatedAt)
VALUES ('Sendy', 'Mederos', '999-999-9999', 'Future Web Designer! Lets Build together!','smederos@hireme.com', '$2a$10$aJUoCl8aTDijE5C4L6/tluYSDtWKYr42nQf9MIaWqGo0PS/YszEBy', 'student','https://avatars0.githubusercontent.com/u/64746704?s=460&u=db6f4ac60520fa97ee7e9098c248755e1787c6b2&v=4', NOW(0), NOW(0));

INSERT INTO user (firstName, lastName, phone, message, email, password, userType, imgUrl, createdAt, updatedAt)
VALUES ('Emily', 'Armstrong', '787-958-3625', 'NULL','earmstrong@recruiter.com', '$2a$10$Ni30LbzWUpDWPw9IVU1qYuTOgn5n3QHlTlK/QZzEtRJkzKbLH.M0a', 'recruiter','https://avatars3.githubusercontent.com/u/6422952?s=460&u=64b572b73aa7a82b330469aa7b08fecd589cedb9&v=4', NOW(0), NOW(0));

INSERT INTO user (firstName, lastName, phone, message, email, password, userType, imgUrl, createdAt, updatedAt)
VALUES ('Fabian', 'Byrd', '333-333-3333', 'NULL','fbyrd@recruiter.com', '$2a$10$ze9MQqp/7FFFvwPJxz1D.uTqD5gI0F73bN.D8h.sNogFEjLHtWR8C', 'recruiter','https://avatars1.githubusercontent.com/u/29986440?s=460&u=5db63f3f5430a5aea348759932da25a74df9e7e9&v=4', NOW(0), NOW(0));


INSERT INTO users (firstName, lastName, phone, message, email, password, userType, imgUrl, createdAt, updatedAt)
VALUES ('Pat', 'Howard', '222-958-7894', 'NULL','phoward@recruiter.com', '$2a$10$G0INudpMl46NVrKAXZwRJ.3yw83ohzd4ZtPqnW5rrASVMF/OGX56u', 'recruiter','https://avatars1.githubusercontent.com/u/7431751?s=460&u=e4d442718cd813e911c010b57b4953000967252a&v=4', NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('Jr. Web Developer','Charlotte', 'North Carolina', 'http://www.monster.com', 4, NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('Front End Developer','Charlotte', 'North Carolina', 'http://www.techjobs.com',4,NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('Full Stack Web Developer','Charlotte', 'North Carolina', 'http://www.hired.com',5, NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('Backend Developer','Louisville', 'Kentucky', 'http://www.monster.com', 4, NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('IT Business Analyst','Louisville', 'Kentucky', 'http://www.techjobs.com',6,NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('Full Stack Developer','Orlando', 'Florida', 'http://www.hired.com',5, NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('Full Stack Developer', 'Memphis', 'Tennessee', 'http://www.hired.com',4, NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('IT Specialist','Memphis', 'Tennessee', 'http://www.hired.com', 6, NOW(0), NOW(0));
INSERT INTO gigs (jobTitle, city, state, jobURL, UserId, createdAt, updatedAt)
VALUES ('IT Specialist', 'Memphis', 'Tennessee', 'http://www.hired.com', 5, NOW(0), NOW(0));

select * from gigs;
select * from users;


