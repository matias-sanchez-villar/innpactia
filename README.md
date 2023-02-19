# innpactia aplicacion Back End

## **ENV**

>**PORT** Puerto local

>**HOST** MYSQL

>**USER** MYSQL

>**PASSWORD** MYSQL

>**DATABASE** MYSQL


## **PUNTO 1**

>Poder acceder a la aplicación con un sencillo sistema de login (usuario y clave), que permita restringir el acceso no autorizado a la aplicación y que mantenga la sesión iniciada.

#### POST

```
http://localhost:8080/api/usuario/login
```

#### PARAM JSON 

```
{
    "usuario": "Matias@SanchezVillar.com",
    "clave": "Pa_sSw0rdnE_W"
}
```

## **PUNTO 2**

>Poder ver un listado de los clientes de la tienda.

#### GET

```
http://localhost:8080/api/cliente/all
```

#### PARAM JSON 

```
{
    
}
```

## **PUNTO 3**

>Poder ver un listado de los teléfonos por cliente.

#### GET

```
http://localhost:8080/api/telefonos/telefonos_clientes/:idCliente
```

#### PARAM JSON 

```
{
    "idCliente": 1,
    "numero" : "29235033429"
}
```

## **PUNTO 4**

>Poder ver las reparaciones realizadas a un teléfono.

#### GET

```
http://localhost:8080/api/reparaciones/reparaciones_telefono/:idTelefono
```

#### PARAM JSON 

```
{
    "idTelefono" : "29235033429"
}
```

## **PUNTO 5**

>Ingresar un nuevo cliente.

#### POST

```
http://localhost:8080/api/cliente/create
```

#### PARAM JSON 

```
{
    "nombre" : "matias",
    "apellido" : "Sanchez"
}
```

## **PUNTO 6**

>Ingresar un nuevo teléfono de un cliente.

#### POST

```
http://localhost:8080/api/telefonos/create
```

#### PARAM JSON 

```
{
    "numero" : "29235033429",
    "idCliente" : "1"
}
```

## **PUNTO 7**

>Ingresar una nueva reparación a un teléfono.

#### POST

```
http://localhost:8080/api/reparaciones/create
```

#### PARAM JSON 

```
{
    "idTelefono" : "29235033429",
    "titulo" : "titulo"
    "descripcion" : "descripcion" 
    "fecha" : "2022/07/31"
}
```

## **PUNTO 8**

>Ver un listado de todas las reparaciones realizadas ordenadas por fechas, de la más reciente a la más antigua.

#### POST

```
http://localhost:8080/api/reparaciones/all
```

#### PARAM JSON 

```
{

}
```
