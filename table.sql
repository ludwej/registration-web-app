DROP TABLE IF EXISTS users;

create table towns(
	id serial not null primary key,
	towns VARCHAR(50) not null,
    initial VARCHAR(50) not null
);

create table registrationNumbers(
	id serial not null primary key,
    town_id serial not null,
	registrationNo VARCHAR(50) not null,
	foreign key (town_id) references towns(id)
);

insert into towns (towns, town_id) values ('Cape Town', 'CA');
insert into towns (towns,town_id) values ('George', 'CAW');
insert into towns (towns,town_id) values ('Paarl', 'CJ');
insert into towns (towns,town_id) values ('Stellenbosch', 'CL');


