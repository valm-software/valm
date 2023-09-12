# valm

BACK 
CREAR MIGRACTIONS
Add-Migration Inicial -OutputDir Data\Migrations

REVERTIR MIGRATIONS
revierte a la ultima migracion 
Remove-Migration 

CREAR SCRIPTS
 Script-Migration Inicial_02 -o valm-back\Data\Scripts\Sprint_0\Inicial_03.sql

Con este creamos un .sql con todas las migraciones 
Script-Migration -From 0 -To Inicial -Output  Infrastructure\Data\Scripts\Sprint_0\Inicial.sql

REVERTIR DATABASE UPDATE
Para revertir una migración en Entity Framework Core, puedes utilizar el comando Update-Database seguido del nombre de la migración anterior a la que deseas revertir. Por ejemplo, si tienes tres migraciones llamadas InitialCreate, AddNewColumn y AddNewTable, y deseas revertir la migración AddNewTable, puedes utilizar el siguiente comando en la Consola del Administrador de Paquetes:
Update-Database AddNewColumn


Front
Agregar  adroid al proyecto
npx cap add android

Abrir en Android Studio 
npx cap open android
