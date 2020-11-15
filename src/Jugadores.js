db.Jugadores.insertMany([
    {
        _id: 1,
        Nombre: "Lebron",
        Apellidos: "James",
        FechaNac: new Date("1984-12-30"),
        FechaDeb: new Date("2003-10-23"),
        Fisico: [ 
            { Altura: 206}, { Envergadura: 214}, { Peso: 113}
        ],
        Sano: true,
        Posiciones: [
            "Alero", "Base", "Ala-Pivot"
        ],
        Salario: 37440000,
        NumPremios: 50 
    },
    {
        _id: 2,
        Nombre: "James",
        Apellidos: "Harden",
        FechaNac: new Date("1989-08-26"),
        FechaDeb: new Date("2009-10-29"),
        Fisico: [ 
            { Altura: 196}, { Envergadura: 210}, { Peso: 102}
        ],
        Sano: true,
        Posiciones: [
            "Escolta", "Base"
        ],
        Salario: 38200000,
        NumPremios: 37
    },
    {
        _id: 3 ,
        Nombre: "Anthony",
        Apellidos: "Davis",
        FechaNac: new Date("1993-03-11"),
        FechaDeb: new Date("2012-10-07"),
        Fisico: [ 
            { Altura: 208}, { Envergadura: 227}, { Peso: 115}
        ],
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Pivot"
        ],
        Salario: 27090000,
        NumPremios: 26
    },
    {
        _id:4 ,
        Nombre: "Marc",
        Apellidos: "Gasol",
        FechaNac: new Date("1985-01-29"),
        FechaDeb: new Date("2008-10-30"),
        Fisico: [ 
            { Altura: 216}, { Envergadura: 224}, { Peso: 116}
        ],
        Sano: true,
        Posiciones: [
            "Pivot", "Ala-Pivot"
        ],
        Salario: 19690000,
        NumPremios: 34
    },
    {
        _id:5 ,
        Nombre: "Pau",
        Apellidos: "Gasol",
        FechaNac: new Date("1980-07-06"),
        FechaDeb: new Date(""),
        Fisico: [ 
            { Altura: 214}, { Envergadura: 226}, { Peso: 114}
        ],
        Sano: false,
        Posiciones: [
            "Pivot", "Ala-Pivot"
        ],
        Salario: 7449000,
        NumPremios: 29
    },
    {
        _id:6 ,
        Nombre: "Stephen",
        Apellidos: "Curry",
        FechaNac: new Date("1988-03-14"),
        FechaDeb: new Date("2009-10-29"),
        Fisico: [ 
            { Altura: 191}, { Envergadura: 192}, { Peso: 86}
        ],
        Sano: false,
        Posiciones: [
            "Base", "Escolta"
        ],
        Salario: 40230000,
        NumPremios: 28
    },
    {
        _id:7 ,
        Nombre: "Domantas",
        Apellidos: "Sabonis",
        FechaNac: new Date("1996-05-03"),
        FechaDeb: new Date("2016-10-03"),
        Fisico: [ 
            { Altura: 211}, { Envergadura: 210}, { Peso: 108}
        ],
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Pivot"
        ],
        Salario: 2440000,
        NumPremios: 13
    },
    {
        _id:8 ,
        Nombre: "Kevin",
        Apellidos: "Durant",
        FechaNac: new Date("1988-09-29"),
        FechaDeb: new Date("2007-11-01"),
        Fisico: [ 
            { Altura: 208}, { Envergadura: 225}, { Peso: 109}
        ],
        Sano: false,
        Posiciones: [
            "Alero", "Ala-Pivot", "Pivot"
        ],
        Salario: 26540000,
        NumPremios: 31
    },
    {
        _id:9 ,
        Nombre: "Kyrie",
        Apellidos: "Irving",
        FechaNac: new Date("1992-03-23"),
        FechaDeb: new Date("2011-12-27"),
        Fisico: [ 
            { Altura: 188}, { Envergadura: 193}, { Peso: 88}
        ],
        Sano: false,
        Posiciones: [
            "Base", "Escolta"
        ],
        Salario: 20100000,
        NumPremios: 16
    },
    {
        _id:10 ,
        Nombre: "Julius",
        Apellidos: "Randle",
        FechaNac: new Date("1994-11-29"),
        FechaDeb: new Date("104-10-07"),
        Fisico: [ 
            { Altura: 203}, { Envergadura: 213}, { Peso: 113}
        ],
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Pivot", "Alero"
        ],
        Salario: 3267000,
        NumPremios: 8
    },
    {
        _id:11 ,
        Nombre: "Zach",
        Apellidos: "Lavine",
        FechaNac: new Date("1995-03-10"),
        FechaDeb: new Date("2014-10-08"),
        Fisico: [ 
            { Altura: 196}, { Envergadura: 203}, { Peso: 92}
        ],
        Sano: true,
        Posiciones: [
            "Escolta", "Alero", "Base"
        ],
        Salario: 3202000,
        NumPremios: 10
    },
    {
        _id:12 ,
        Nombre: "Blake",
        Apellidos: "Griffin",
        FechaNac: new Date("1989-03-16"),
        FechaDeb: new Date("2009-10-28"),
        Fisico: [ 
            { Altura: 206}, { Envergadura: 211}, { Peso: 113}
        ],
        Sano: false,
        Posiciones: [
            "Ala-Pivot", "Pivot"
        ],
        Salario: 29700000,
        NumPremios: 14
    },
    {
        _id:13 ,
        Nombre: "Danny",
        Apellidos: "Green",
        FechaNac: new Date("1987-06-22"),
        FechaDeb: new Date("2009-11-13"),
        Fisico: [ 
            { Altura: 198}, { Envergadura: 208}, { Peso: 94}
        ],
        Sano: true,
        Posiciones: [
            "Escolta", "Alero"
        ],
        Salario: 14630000,
        NumPremios: 5
    },
    {
        _id:14 ,
        Nombre: "JaMychal",
        Apellidos: "Green",
        FechaNac: new Date("1990-06-21"),
        FechaDeb: new Date("2014-10-11"),
        Fisico: [ 
            { Altura: 203}, { Envergadura: 219}, { Peso: 103}
        ],
        Sano: true,
        Posiciones: [
            "Ala-Pivot", "Alero"
        ],
        Salario: 490180,
        NumPremios: 3
    },
    {
        _id:15 ,
        Nombre: "Klay",
        Apellidos: "Thompson",
        FechaNac: new Date("1990-02-08"),
        FechaDeb: new Date("2012-12-26"),
        Fisico: [ 
            { Altura: 201}, { Envergadura: 206}, { Peso: 98}
        ],
        Sano: false,
        Posiciones: [
            "Escolta", "Alero"
        ],
        Salario: 32740000,
        NumPremios: 18 
    },
])