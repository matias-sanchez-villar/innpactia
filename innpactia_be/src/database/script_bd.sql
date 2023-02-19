create database innpactia;
use innpactia;
create table usuarios(
		id int primary key not null auto_increment,
        usuario nvarchar(50) not null,
        clave nvarchar(50) not null
);
create table clientes(
		id int primary key not null auto_increment,
        nombre nvarchar(50) not null,
        apellido nvarchar(50) not null
);
create table Telefonos_Clientes(
		numero nvarchar(50) primary key not null,
        idCliente int not null,
        foreign key (idCliente) references clientes(id)
);
create table Reparaciones_Telefonos(
		id int primary key not null auto_increment,
        idTelefono nvarchar(15) not null,
        titulo nvarchar(50) null,
        descripcion nvarchar(50) null,
		fecha date not null, 
        foreign key (idTelefono) references Telefonos_Clientes(numero)
);