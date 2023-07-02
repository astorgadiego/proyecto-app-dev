//VAMOS A DEFINIR FUNCIONES PAR QUE INCIE UNA BASE DE DATOS, UNA NUEVA UBICACION, Y PARA OBTENER LAS UBICACIONA YA GUARDADAS

import * as SQlite from 'expo-sqlite'

const db = SQlite.openDatabase("direcciones.db") //--> metodo para crear una nueva base de datos. le podemos indicar el nombre de dicha base

//FUNCION PARA LA INICIARLA AL MOMENTO DE INCIAR LA APP

export const init = () => {

    const promesa = new Promise((resolve, reject) => {

        db.transaction(tx => {
            tx.executeSql("create table if not exists TablaAdress (id integer primary key not null,direccion text not null,latitud real not null,longitud real not null);",
                [],
                () => {
                    resolve();
                },
                (_, err) => { reject(err) }
            )
        }) //--> FALATARIA AGREGAR LA IMAGEN image text not null
    } )

    return promesa
}


//FUNCION PARA AGREGAR UNA DIRECCION A MI  BASE DE DATOS
export const insertDireccion = ( latitud, longitud, direccion_exacta ) => { //-->ME FALTA EL TITTLE Y EL IMAGE
    const promesa = new Promise( (resolve,reject) => { 
        db.transaction(tx=>{
            tx.executeSql("insert into TablaAdress (latitud,longitud,direccion) VALUES (?,?,?);",//-->ME FALTA EL TITTLE Y EL IMAGE.
            [latitud,longitud,direccion_exacta], //--> VA A REEMPLAZAR A LOS SIGNOS DE PREGUNTA POR LOS VALORES DE ESTOS PARAMETROS 
            (_,result)=>resolve(result),
            (_,err) => reject(err)
            )
        })
     })

     return promesa
}

//FUNCION PARA RECUPERAR LAS DIRECCIONES GUARDADAS EN MI BASE DE DATOS

export const fetchDireccion = ()=>{
    const promesa = new Promise ( (resolve,reject) => {
        db.transaction(tx => { 
            tx.executeSql("SELECT * FROM TablaAdress",
            [],//--> ACA VAN LOS PARAMETROS, EN CASO DE QUE SE ENVIEN
            (_,result)=>resolve(result),
            (_,err) => reject(err)
            )
         })
    })

    return promesa
}