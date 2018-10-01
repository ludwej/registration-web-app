drop table if EXISTS towns, registrationNumbers;
create table towns(
	id serial not null primary key,
	town text not null,
    initial text not null
);

create table registrationNumbers(
	id serial not null primary key,
    town_id int,
	registrationNo text,
	foreign key (town_id) references towns(id)
);

insert into towns (town, initial) values ('Cape Town', 'ca');
insert into towns (town,initial) values ('George', 'caw');
insert into towns (town,initial) values ('Paarl', 'cj');
insert into towns (town,initial) values ('Stellenbosch', 'cl');

