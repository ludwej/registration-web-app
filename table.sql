drop table if EXISTS towns, registrationNumbers;
create table towns(
	id serial not null primary key,
	town text not null,
    initial text not null
);

create table registrationNumbers(
	id serial not null primary key,
    town_id int,
	registrationNo int,
	foreign key (town_id) references towns(id)
);

insert into towns (town, initial) values ('Cape Town', 'CA');
insert into towns (town,initial) values ('George', 'CAW');
insert into towns (town,initial) values ('Paarl', 'CJ');
insert into towns (town,initial) values ('Stellenbosch', 'CL');


