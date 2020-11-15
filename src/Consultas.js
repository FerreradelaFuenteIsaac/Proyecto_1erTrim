/* 
Jugadores que tengan una altura inferior a 210, 
la primera posición sea base y 
los premios sean menores o iguales a 30
*/
db.Jugadores.find(
    {
        $and: [
            { "Fisico.Altura": { $lt: 210}}, 
            { Posiciones: "Base"},
            { NumPremios: { $lte: 30}}
        ]
    }
).pretty()

/* 
Jugadores que hayan nacido a partir de 1990 o 
que hayan debutado antes de 2011 y
que no estén lesionados o no tengan en su primera y
segunda posición "Ala-Pivot" y "Pivot"
*/ 
db.Jugadores.find(
{ 
    $and: [   
    {
        $or: [
            { FechaNac: { $gt: ISODate("1990-01-01")}},
            { FechaDeb: { $lte: ISODate("2011-01-01")}}
        ]    
    },
    {
        $nor: [
            { Sano: false},
            { Posiciones: [ "Ala-Pivot", "Pivot"]}
        ]
    }
]
}    
).pretty()

/*
Jugadores que midan mas de 210 cuyo nombre no empiece por m y 
que tengan una fecha de debut anterior a 2010
*/
db.Jugadores.find(
{
    $and: [
        { "Fisico.Altura": { $gt: 210}},
        { Nombre: { $not: { $regex: "^M"}}},
        { FechaDeb: { $lt: ISODate("2010-01-01")}}
    ]
}
).pretty() 

/*
Jugadores que tengan una altura entre 200 y 220 
o un peso entre 90 y 120 y que estén lesionados
*/
db.Jugadores.find(
{
    $and: [    
    {
        $or: [
            { Fisico: 
                { $elemMatch: 
                    { Altura: { $gte: 200, $lte: 220}}}},
            { Fisico: 
                { $elemMatch: 
                    { Peso: { $gte: 90, $lte: 120}}}}
]
},
    {
        Sano: false
    }
]}    
).pretty()

/*
Jugadores que tengan una altura entre 200 y 210,
una envergadura entre 210 y 230 y que juegue en 3 posiciones
o que tenga un numero de premios superior a 35
*/
db.Jugadores.find(
    {
        $or: [
            {
                $and: [
                    { Fisico: 
                        { $elemMatch: 
                            { Altura: { $gte: 200, $lte: 210}}}},
                    { Fisico: 
                        { $elemMatch: 
                            { Envergadura: { $gte: 210, $lte: 230}}}},
                    { Posiciones: { $size: 3}}                
                ]
            },
            {
                NumPremios: { $gt: 35}
            }
        ]
    }
).pretty()

/*
Jugadores que no tengan un peso superior a 100,
o que no tengan una altura entre 200 y 220 y que
tengan en sus posiciones base y escolta, teniendo
solo 2 posiciones y un salario no inferior a 20000000
*/
db.Jugadores.find(
{
    $and: [
        {
            $nor: [
                { "Fisico.Peso": { $gte: 100}},
                { Fisico: 
                    { $elemMatch: 
                        { Altura: { $gte: 200, $lte: 220}}}}
            ]
        },
        { Posiciones: { $all: [ "Base", "Escolta"]}},
        { Posiciones: { $size: 2}},
        { Salario: { $gte: 20000000}}
    ]
}
).pretty()
