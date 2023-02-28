create database students;
use students;
create table student
(
	id int auto_increment primary key,
    first_name nvarchar(30),
    last_name nvarchar(30),
    email nvarchar(30),
    ussername nvarchar(30),
    passwords nvarchar(30)
);
create table product(
	id int auto_increment primary key,
    tenSp nvarchar(200),
    soLuong int,
    thongTinSp nvarchar(200),
    nhaSX nvarchar(200),
    giaSP double
);
create table news(
	id int auto_increment primary key,
    title nvarchar(100),
    noidung nvarchar(255),
    ngay datetime
);
create table OrderDetail(
	id int auto_increment primary key,
    
);
insert into student (first_name,last_name,email,ussername,passwords) values(N'Nguyen  Van',N'Duong',N'099899ba@gmail.com',N'thudiep',N'myduyen123');
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'khanhly1';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION