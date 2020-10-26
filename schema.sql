
use codeConnection;

select * from users;
select * from gigs;
select * from recruiters;

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Jr. Web Developer', 'Charlotte','North Carolina', 'http://www.uncc.edu', NOW(), NOW(), 4);

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Front End Developer', 'Charlotte', 'North Carolina', 'http://www.indeed.com', NOW(), NOW(), 3);

INSERT INTO gigs (jobTitle, city, state, jobURL, createdAt, updatedAt, UserId)
VALUES('Full Stack Web Developer', 'Memphis', 'Tennessee', 'http://linkedin.com', NOW(), NOW(), 4);





