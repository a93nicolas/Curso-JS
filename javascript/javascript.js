/*
    Tipos de datos:

    undefined: valor indefinido
    null: valor nulo
    boolean: dos opciones (verdadero o falso)
    string: cadena de caracteres(palabras)
    symbol: 
    number: representar numeros
    object: representar estructura y opciones de un objeto
*/    

// Variables

    var miNombreString = "Nicolas Fernandez"; // si se pone entre comillas es un string

    console.log(miNombreString + " es un string");

    var miEdadNumber = 28; // numeros sin comillas es un number

    console.log(miEdadNumber + " es un numero");

// Asignar valor a variables

    var a = 14; // cuando le damos un valor estamos inicializando la variable
    var b = a;

    var resultado = a + b;

        console.log(resultado + " es tu edad"); 
    
    var resultadoMenosDiez = resultado - 10;
        
        console.log(resultadoMenosDiez + " es tu edad menos 10")

    var resultadoPorTres = resultado * 3;

        console.log(resultadoPorTres + " es tu edad multiplicada por 3")

    var resultadoDivididoDos = resultado / 2;

        console.log(resultadoDivididoDos + " es tu edad dividida por 2")

    // Numeros decimales
        var numeroDecimal = 20.5;
        var numeroDecimalDos = 24.9;

        var resultadoDecimal = numeroDecimal * numeroDecimalDos;

            console.log(resultadoDecimal + " es un resultado decimal");

    // Incrementar el valor de una variable
        var objetosComprados = 100;

            // Opcion 1
                objetosComprados = objetosComprados + 1;

                    console.log(objetosComprados);
            
            //Opcion 2
                objetosComprados++;

                    console.log(objetosComprados);

    // Decrecer el valor de una variable
        var ventasMensuales = 100;

            // Opcion 1
                ventasMensuales = ventasMensuales - 1;
            
                    console.log(ventasMensuales);
            
            // Opcion 2
                ventasMensuales--;

                    console.log(ventasMensuales);
        
    // Asignacion de suma
        var c = 23;
        c += 5; // es el equivalente a hacer c = c+5 (suma el valor de A y 5 para luego devolvernos el resultado de la suma)

            console.log(c);

        // Ejemplo 2
            var totalVentas = 6000;

                console.log(totalVentas);
            
            totalVentas += 500;

                console.log(totalVentas);

    // Asignacion de resta
        var d = 23;
        d -= 3; // misma sintaxis que el ejemplo anterior

            console.log(d);

        // Ejemplo 2
            var totalDeuda = 25000;

                console.log(totalDeuda);

            totalDeuda -= 24000;
                console.log(totalDeuda);

    // Asignacion de multiplicacion
        var f = 23;
        f *= 2; // misma sintaxis del ejemplo anterior

            console.log(f);
        
        // Ejemplo 2
            var salario = 120000;

                console.log(salario);
            
            salario *= 1.45;

                console.log(salario); 
    
    // Asignacion de division
        var g = 40;
        g /= 2; // misma sintaxis del ejemplo anterior

            console.log(g);

        // Ejemplo 2
            var horasTrabajadas = 40;

                console.log(horasTrabajadas);

            horasTrabajadas /= 1.20;

                console.log(horasTrabajadas);

    
    // Variables con cadena de caracteres

        var nombre = "Nicolas";
        var apellido = "Fernandez";

        // Escapar de comillas de caracteres

            var miCadena = "Comilla de caracteres \"con comillas\" de caracteres";

                console.log(miCadena);

                // Opcion 2

                    var miCadenaDos = 'Comilla de caracteres "Ejemplo 2" aplicado';
                        console.log(miCadenaDos);
                
                // Opcion 3

                    var miCadenaTres = "Comilla de caracteres 'Ejemplo 3' aplicado";
                        console.log(miCadenaTres);
                    
        // Secuencia de escape
            /*

                \'  Comilla simple
                \"  Comilla doble
                \\  Barra invertida
                \n  Linea nueva
                \r  Retorno de carro
                \t  Tabulacion
                \b  Retroceso
                \f  Salto de pagina

            */    

                // Ejemplos
                    console.log("Ejemplo de \"comillas dobles\"");
                    console.log("Ejemplo de \\barra invertida");
                    console.log("Ejemplo de \nlinea nueva");
                    console.log("Ejemplo de \rretorno de carro");
                    console.log("Ejemplo de \ttabulacion");
                    console.log("Ejemplo de \bretroceso");
                    console.log("Ejemplo de \fsalto de pagina");
            
        // Concatenar cadena de caracteres
            var nombreCompleto = "Nicolas" + " " + "Fernandez";

                console.log(nombreCompleto);
        
        // Construir cadenas con variables
            var verbo = "programar";
            var mensaje = "Estoy aprendiendo a " + verbo + " " + "con free code camp español";

                console.log(mensaje);
        
        // Agregar variables a cadena de caracteres
            var mensajeCompleto = "Estoy aprendiendo a programar "
            var parteFinal = "en mi ultimo intento";

                console.log(mensajeCompleto);

                mensajeCompleto += parteFinal;

                    console.log(mensajeCompleto)

        // Longitud de una cadena de caracteres
            var longitudCadena = "A BC!1@48";
                console.log(longitudCadena.length); // cuenta la cantidad de caracteres en la variable

        // Notacion de corchetes primer caracter
            /*
                Cadena:     J a v a s c r i p t
                Indices:    0 1 2 3 4 5 6 7 8 9
            */
            var lenguajeProgramacion = "Javascript";    

                console.log(lenguajeProgramacion[0]);

        // Inmutabilidad de cadena de caracteres
            /*
                mutables = se puede cambiar
                inmutables = no se puede cambiar
            */

            // Manera incorrecta
                var mensajeMalo = "Jola mundo";

                    console.log(mensajeMalo);

                mensajeMalo[0] = "H";   // Esto no cambiara el mensaje, las cadenas son inmutables

                    console.log(mensajeMalo);

            // Manera correcta
                mensajeMalo = "Hola mundo"; // Se tiene que reasginar el valor de la cadena

                    console.log(mensajeMalo);
            
        // Notacion de corchetes: Enesimo caracter
            /*
                Cadena:     J a v a s c r i p t
                Indices:    0 1 2 3 4 5 6 7 8 9
            */
                console.log(lenguajeProgramacion[0]); // J
                console.log(lenguajeProgramacion[1]); // a

            // Ejemplo de colocar un indice que no esta asignado
                console.log(lenguajeProgramacion[10]); // undefined (aplica para nros negativos y decimales)
        
        //  Notacion de corchetes: Ultimo caracter
            /*
                El ultimo indice siempres es la longitud 
                dela cadena -1 porque comenzamosa contar 
                desde 0

                Cadena:     J a v a s c r i p t
                Indices:    0 1 2 3 4 5 6 7 8 9
            */
                console.log(lenguajeProgramacion[lenguajeProgramacion.length - 1]);
            
        //  Notacion de corchetes: De derecha a izquierda

            /*
                El penultimo indice es longitud - 2 porque 
                comenzamos a contar desde 0

                Cadena:     J a v a s c r i p t
                Indices:    0 1 2 3 4 5 6 7 8 9
            */
                var n = 2;
                    console.log(lenguajeProgramacion[lenguajeProgramacion.length - n]); //  3 4 5 etc empezaria a contar de derecha a izquierda

        //  Palabras en blanco
               
            var palabrasEnBlanco = "El " + lenguajeProgramacion + " " + "me gusta";

                console.log(palabrasEnBlanco);
          
        //  Arreglos o arrays
            
            /*
                Nos permiten almacenar multiples valores en una estructura
                ejemplo: una lista
            */
                var miArray = ["Nico", "Fernandez", 28]

                    console.log(miArray);

                var estudiantes = ["Nico", "Athi", "Juampi", "Mati"];

                    console.log(estudiantes);
                
                var notas = [10, 9, 10, 8];

                    console.log(notas);
        
        //  Arreglos anidados
            
            /*
                Arreglos con arreglos dentro
            */

                var listaDeEstudiantes = [["Nico", 10], ["Athi", 9], ["juampi", 10], ["Mati", 8]];

                    console.log(listaDeEstudiantes);

                var listaDePrecios = [["Camisa", 100, "CA01"], ["JEAN", 120, "JN01"], ["REMERA", 50, "RE01"]];

                    console.log(listaDePrecios);

        // Acceder a elementos de un arreglo

            /*
                nota =      [10, 9, 10, 8];
                indices =     0  1   2  3
            */

                console.log(notas[0]); // obtenemos elemento 10
                console.log(notas[1]); // obtenemos elemento  9

            var suma = notas[1] + notas[3];

                console.log(suma);

        // Modificar elementos de un arreglo

            notas[3] = 9; // Se le podria asignar un string tambien

                console.log(notas[3])

            notas[1] = [9, 10];

                console.log(notas[1]);

        //acceder a arreglos multidimensionales

            /*
                listaDePrecios   = [["Camisa", 100, "CA01"], ["JEAN", 120, "JN01"], ["REMERA", 50, "RE01"]];
                indices          =              0                       1                       2           
                indices internos =       0      1       2        0      1       2       0       1       2   
            
            */

                console.log(listaDePrecios[1]);     // ["JEAN", 120, "JN01"]
                console.log(listaDePrecios[1][0]);  // "JEAN"

        // .push()

            /*
                Sirve para agregar elementos al final de un array
            */

                    listaDePrecios.push(["CAMPERA", 150, "CM01"]); // agregara ["CAMPERA", 150, "CM01"] a la listaDePrecios

                        console.log(listaDePrecios);

        // .pop()

            /*
                Sirve para remover el ultimo elemento de un arreglo
            */

                listaDePrecios.pop();

                    console.log(listaDePrecios);  // elimina el ultimo elemento que seria ["CAMPERA", 150, "CM01"] de la listaDePrecios

                var sinStock = listaDePrecios.pop();  // elimina el ultimo elemento y lo asigna a la variabel sinStock

                    console.log(sinStock);

        // .shift()

            /*
                Sirve para remover el primer elemento de un array
            */

                listaDePrecios.shift();

                    console.log(listaDePrecios); // Remueve el elemento ["Camisa", 100, "CA01"]

        // .unshift()

            /*
                Sirve para agregar un elemnto al principio de un arreglo
            */

                listaDePrecios.unshift(["Camisa", 100, "CA01"]);

                    console.log(listaDePrecios);

        // Lista de compras

            /*
                Concatenar cadena de caracteres con elementos de un array
            */

            var listaDeCompras = [["leche", 3], ["queso", 1], ["jabon", 2], ["detergente", 1]];

                console.log("voy a comprar " + listaDeCompras[0][1] + " unidades de " + listaDeCompras[0][0])

        //  Funciones

            function mostrarMensaje(){
                console.log("Esto es una funcion");
            }

            mostrarMensaje();

        // Argumentos

            /*
                capacidad de recibir valores cuando la llamamos
                (a, b) son los parametros que se van a sumar
            */

                function sumar(a, b){
                    var sumaDeFuncion = a + b;
                    console.log(" El resultado de " + a + " + " + b + " es: " + sumaDeFuncion);
                }
                // aca solo se define la funcion

                    sumar(15, 15); // aca se llama a la funcion
                    sumar(26, 24); // se puede reutilizar ahorrando tiempo y codigo
        
                var k = 23;
                var u = 58;

                    sumar(k, u);

                function sumarCadenas(msj1, msj2, msj3){
                    console.log(msj1 + " " + msj2 + " " + msj3);
                }

                    sumarCadenas("Hola", "soy", "Nico");

        //  Ambito global

            //Variables globales: se pueden usar, definir y modificar en cualquier 
            // del programa, por ende se puede usar en console.log / function

                var miVariableGlobal = 5;

                    console.log(miVariableGlobal);

                function variableGlobal() {
                    console.log(miVariableGlobal + " es mi variable global");
                };

                    variableGlobal();

            // Variable local : son variables que se definen en una funcion y solo
            // funcionan alli

                function miFuncionLocal(){
                    var miVariableLocal = 7;
                    console.log(miVariableLocal);
                }

                    miFuncionLocal();

                //    console.log(miVariableLocal);  // Va a salir que no esta definida
        
        // Ambito global vs ambito local
            
            /*
                Ganara la variable local que esta en la funcion, pero 
                cuando se la llame fuera de la funcion, aparecera la global 
            */
                var miNombre = "Nico F";

                    function mostrarMiNombre(){
                        var miNombre = "Cosme F";
                        console.log(miNombre);
                    };

                        mostrarMiNombre();
                        console.log(miNombre);

        // Retornar un valor
            
            /*
                Retorna un resultado
            */

                function sumarDos(a, b){
                    return a + b;
                };
                 
                console.log(sumarDos(5, 3));

        //  Undefined
            
            function sumarTres(a, b){
                console.log(a + b);
            }

                console.log(sumarTres(5, 3));

        //  Asignar un valor retornado
         
            var resultadoDos = sumarDos(5, 31);

                console.log(resultadoDos);

            function Meta(lenguajeProgramacion){
                return "Mi meta es aprender " + lenguajeProgramacion;
            }

            var miMeta = Meta("Javascript");

                console.log(miMeta);

        // Permanece en fila

            /*
                Añadir los nuevos elementos al final de la cola y remover
                los previos que se encuentran al principio de la misma.
                paso 1: agregar un numero al final del arreglo
                paso 2: remover el primer elemento del arreglo
                paso 3: la funcion debe retornar el elemento removido
            */
                function proximoEnLaFila(arreglo, elemento){
                    arreglo.push(elemento); // agrega al final del arreglo
                    return arreglo.shift();        // remueve el primer elemento y muestra el elemento removido
                }
                    var miArreglo = [1, 2, 3, 4, 5];

                        console.log("Antes: " + JSON.stringify(miArreglo)); // JSON.stringify permite presentar el arreglo en la consola(lo convierte en una cadena de caracteres)
            
                    console.log(proximoEnLaFila(miArreglo, 6));

                    console.log("Despues: " + JSON.stringify(miArreglo));

        // Valores booleanos
            
            /*
                Un booleano se refiere a dos valores con los que
                se trabaja en javascript, True y False.
            */

                console.log(false); 
                console.log(true); // para que funcione, debe ser minuscula y su color es azul
                // console.log(True);  lo toma como una variable y da not defined

        // Operador de igualdad
                
            /*
                Compara de manera estricta (===) para evaluar que un numero sea
                exactamente el mismo numero y no un string. Y no tan estricta (==)
                dando lugar a igualdad de un numero por mas que uno se trate
                de un string
            */

                console.log( 5 == 5);           // true
                console.log( 5 == 6);           // false
                console.log( "Cuatro" == 4);    // false
                console.log( "Hola" == "hola"); // false
                console.log("4" == 4);          // true
                console.log("4" === 4);         // false

                console.log([1, 2, 3] == [1, 2, 3]); /// false porque cuando se aplica al arreglo no compara los elemntos, compara si representan el mismo obj

        // Operador de desiguakdad

            /*
                Opuesto a la explicacion anterior, si es desigual retorna true
                y si es igual retorna false
            */

                console.log( 9 != 6);               // true
                console.log( 9 != 9);               // false
                console.log( "Chau" != "chau");     // true
                console.log( 10 !== "10");          // true

                console.log([1, 2, 3] != [1, 2, 3]); // true


        // Operador mayor que o menor que

            /*
                Logica de mayor que o menor que
            */

                console.log( 6 > 5);            // true
                console.log( 6 < 5);            // false

                console.log( "B" > "A");        // true , porque B es mas grande que la A en el abcdario
                console.log( "ACB" < "ABC");    // true , define en forma de cadena, si el primero no define los hara el segundo o el que le siga

                console.log( "AB" > "A");       // true

        // Operador mayor o igual que

            /*
                Se representa de la misma forma que > pero con un = y
                 va a corroborar de comprar que el primer valor sea
                 mayor/igual o menor/igual que el segundo valor
                ej:  6 >= 5
                     6 <= 5

            */

                console.log( 6 >= 5); // true
                console.log( 6 >= 6); // true
                console.log( 6 >= 7); // false

                console.log( 6 <= 5); // false
                console.log( 6 <= 6); // true
                console.log( 6 <= 7); // true

        // Operador logico "and"
            
            /*
                Nos permiten combinar distintas expresiones para 
                formar condiciones mas complejas y se expresa asi 
                a && b

                    Tabla de verdad operador AND:

                        T T = T
                        T F = F
                        F T = F
                        F F = F
            */

                console.log( 6 >= 5 && 6 <= 6); // true
                console.log( 6 <= 5 && 6 >= 7); // false
                console.log( 6 <= 6 && 6 <= 5); // false

        // Operador "ot"

            /*
                El operador OR (||) lo que busca es que una sola condicion
                sea verdadera para retornar true, en el caso de que las
                dos condiciones retornen false, este nos devolvera false como
                resultado

                    Tabla de verdad del operador OR ||:

                        T T = T
                        T F = T
                        F T = T
                        F F = F
            */

                console.log( 6 >= 5 || 5 <= 6); // true
                console.log( 7 <= 6 || 6 <= 5); // false

        // Operdor "not"

            /*
                El operador not (!) se usa para negar una condicion
                en el caso que la negacion sea true, retornara true

                    Tabla de verdad del operador NOT !:

                        X !X
                        T F 
                        F T
            */

                    console.log(!true);  // false
                    console.log(!false); // true

                    console.log(!( 7 > 5)); // !(true)  --> false
                    console.log(!(6 <= 5)); // !(false) --> true

        // Sentencias condicionales
            
            /*
                Nos permiten decidir si un codigo se ejecuta o no
            */

                if(true) {
                    console.log("La condicion es verdadera");
                }

                if(lenguajeProgramacion == "Javascript"){
                    console.log("Estas aprendiendo " + lenguajeProgramacion)
                }

                

                if(miNombreString == "Nicolas Fernandez" && lenguajeProgramacion == "Javascript") {
                    console.log( miNombreString + " " + "esta aprendiendo " + lenguajeProgramacion);
                }

        // Clausula "else"

            /*
                Es una segunda opcion en el caso de que la primner condicion
                sea falsa
            */

                if(miNombreString == "Algun pasivo"){
                    console.log( "Hola " + miNombreString);
                } else {
                    console.log( "Ponete a estudia, vago!");
                }

                if(!(miNombreString == "Algun pasivo")) {
                    console.log("Mentira loco, echale ganas que lo vas a lograr")
                }

                if(!(miNombreString == "Nicolas Fernandez") || lenguajeProgramacion == "Javascript"){  // (!(true) || true) --> true
                    console.log("Bien chabon, estas aprendiendo " + lenguajeProgramacion);
                }

        // Clausula "else if"

            /*
                Nos permite manejar condiciones alternativas
            */

                function clasificarValor(valor){
                    if(valor % 2 == 0){
                        console.log("Divisible entre 2");
                    } else if(valor % 3 == 0){
                        console.log("Divisible entre 3");
                    } else {
                        console.log("No es divisible entre las opciones");
                    }
                }

                clasificarValor(20);
                clasificarValor(39);
                clasificarValor(103);

        // Condicionales: ordenen logico

                function clasificarValorDos(valor){
                    if(valor < 5){
                        console.log("Menor que 5");
                    }else if(valor < 10){
                        console.log("Menor que 10");
                    }else{
                            console.log("Es mayor o igual a 10");
                    }
                }    
                clasificarValorDos(2);    
                clasificarValorDos(7); 
                clasificarValorDos(11); 

        // Codigo de Golf
                
            /*
                Simula un partido de Golf, teniendo en cuenta que tu funcion tomara
                los argumentos par y golpes. 

                    Golpes          Retornar

                    1               "Hole-in-one"
                    <= par - 2      "Eagle"
                    par - 1         "Birdie"
                    par             "Par"
                    par + 1         "Bogey"
                    par + 2         "Double Bogey"
                    >= par + 3      "Go Home!"

            */

                function juegoDeGolf(par, golpes){
                    if(golpes == 1){
                        return "Hole-in-one";
                    } else if(golpes <= par - 2){
                        return "Eagle";
                    } else if(golpes == par - 1){
                        return "Birdie"
                    } else if(golpes == par ){
                        return "Par"
                    } else if(golpes == par + 1){
                        return "Bogey"
                    } else if(golpes == par + 2){
                        return "Double Bogey"
                    } else if(golpes >= par + 3){
                        return "Go Home!"
                    }
                }

                console.log(juegoDeGolf(4, 1));
                console.log(juegoDeGolf(4, 2));
                console.log(juegoDeGolf(4, 3));
                console.log(juegoDeGolf(4, 4));
                console.log(juegoDeGolf(4, 5));
                console.log(juegoDeGolf(4, 6));
                console.log(juegoDeGolf(4, 7));

        // Sentencia Switch
            
            /*
                Es una forma de reemplazar los condicionales
                Nos permite a partir de un valor decidir que va a pasar
                en base a ese valor. Es un condicional mas espesifico
                Ej: Si valor es = a 1
                    se ejecusa el case 1

                    si valor es = a 2
                    se ejecuta el case 2

                    break detiene el proceso de ejecucion cuando un case
                    termina siendo verdadero, por lo tanto ignora a los que
                    le siguen
                
                    El return con la respuesta va fuera del switch
            */
                function clasificarValorTres(valor){
                    let respuesta;

                    switch (valor) {
                        case 1:
                            respuesta = "alpha";
                            break;
                        case 2:
                            respuesta = "beta";
                            break;
                        case 3:
                            respuesta = "gamma";
                            break;
                        case 4:
                            respuesta = "delta";
                            break;
                    }
                    return respuesta;
                }

                    console.log(clasificarValorTres(1));
                    console.log(clasificarValorTres(2));
                    console.log(clasificarValorTres(3));
                    console.log(clasificarValorTres(4));

                var horasDeEstudio = "Dos Horas";

                function contenidoEstudiado(horasDeEstudio){

                    switch (horasDeEstudio) {
                        case "Una hora":
                            console.log("No vas a llegar a aprender");
                            break;
                        case "Dos Horas":
                            console.log("Vas a llegar justo");
                            break;
                        case "Tres Horas":
                            console.log("Llegas tranquilo");
                            break;
                    }

                }  

                    contenidoEstudiado(horasDeEstudio);
        // Sentencias switch: opcion predeterminada

            /*
                Se ejecutara si ninguno de los valores es el valor de la variable
            */

                function seleccionarIdioma(valor){
                    var idioma;

                        switch(valor) {
                            case 1: 
                                idioma = "Paraguayo";
                                break;
                            case 2: 
                                idioma = "Argentino";
                                break;
                            case 3: 
                                idioma = "Chileno";
                                break;
                            default:
                                idioma = "Castellano";
                                break;

                        }
                        return idioma;
                }

                    console.log(seleccionarIdioma("Español"));

        // Sentencia switch: multiples casos
            
           /*
                Se le puede asignar el mismo valor a multiples casos
           */

                function clasificarVolumen(valor){ 
                    var volumen;

                    switch (valor) {
                        case 1:
                            volumen = "Bajo";
                            break;
                        case 2:
                        case 3:
                            volumen = "Intermedio";
                            break;
                        case 4:
                        case 5:
                        case 6:
                            volumen = "Alto"
                            break;
                    }
                    return volumen;
                }

                    console.log(clasificarVolumen(1));
                    console.log(clasificarVolumen(2));
                    console.log(clasificarVolumen(3));
                    console.log(clasificarVolumen(4));
                    console.log(clasificarVolumen(5));
                    console.log(clasificarVolumen(6));


        // Retornar valores booleanos

            function esMenorQue(a, b){
                return a < b;
            }
                
                console.log(esMenorQue(4, 5));
                console.log(esMenorQue(6, 5));

        // Patron de retorno anticipado

            function miFuncionPrueba(num){
                if (num < 0){
                    return undefined;
                }
                return Math.sqrt(num);
            }

                console.log(miFuncionPrueba(25));
                console.log(miFuncionPrueba(-5));

        // Conteo de cartas

            /*
                Sacar ventaja en el BlackJack llevando registro
                de las cartas altas y bajas que hay en la baraja
                Tener cartas altas en la baraja es ventajoso para el jugador

                Cuando el conteo es positivo, el jugador deberia apostar alto
                Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo

                    Cambio del conteo   Cartas
                    +1                  2, 3, 4, 5, 6
                    0                   7, 8, 9
                    -1                  10, 'J', 'Q', 'K', 'A'

                La meta es definir una funcion para contar cartas
                La funcion de tomar un parametro CARTA (num o string) y luego
                aumentar o reducir el valor de la variable global CONTEO de 
                acuerdo al valor de la carta (observa la tabla)

                La funcion debe retornar una cadena de caracteres con el conteo actual
                y la cadena:

                    "Apostar" si el conteo es positivo
                    "Esperar" si el conteo es cero o negativo

                El conteo actual y la decision del jugador
                ("Apostar" o "Esperar") deben estar separados por un espacio
            */
                var conteo = 0;

                    function conteoDeCartas(carta){
                        let decision;

                        switch(carta){
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                                conteo++;
                                break;
                            case 10:
                            case "J":
                            case "K":
                            case "Q":
                            case "A": 
                                conteo--;
                                break;
                        }
                        if(conteo > 0){
                            decision = "Apostar";
                        } else{
                            decision = "Esperar";
                        }
                        return decision;
                    }

                        console.log(conteoDeCartas(3));
                        console.log(conteoDeCartas(6));
                        console.log(conteoDeCartas(8));

                        console.log(conteo);

                        console.log(conteoDeCartas(10));
                        console.log(conteoDeCartas("Q"));

                        console.log(conteo);

        // Crear objetos
                    
            /*
                Permiten guardar una secuencia o un con junto de propiedades que estan
                relacionadas con sus correspondientes valores

                    izquierda   derecha

                    propiedad   valor
            */

                var miPerro = {
                    "nombre" : "Miyagui",
                    "edad"   : 7,
                    "peso"   : 10,
                    "raza"   : "Mestizo",
                    "fecha de nacimiento" : "26/12/2016",
                };

        // Acceder a propiedades notacion de punto
            
            /*
                Se puede acceder a las propiedades del objeto escribiendo
                el nombre del objeto seguido de un punto (.) y luego la
                propiedad que se necesita saber
            */

                console.log(miPerro.nombre);
                console.log(miPerro.raza);

        // Acceder a propiedades notacion de corchetes

            /*
                Los corchetes son usados para llamar propiedades que
                estan separadas por un espacio (" ")
            */

               console.log(miPerro["fecha de nacimiento"]);

        // Acceder a propiedades variables

            
                var resultadosCompetencia = {
                    1: "Martin",
                    2: "Fran",
                    3: "Lucas",
                    4: "Nico",
                };

                var posicion = 4;

                console.log(resultadosCompetencia[posicion]);

        // Actualizar propiedades

            var mochila = {
                "color" : "azul",
                "tamaño": "mediano",
                "contenido" : ["botella", "cuadernos", "billetera"],

            };

                console.log(mochila.color);
                mochila.color = "verde";
                console.log(mochila.color);

                mochila.contenido.push("arma");
                console.log(mochila.contenido);

        // Agregar propiedades

            mochila.marca = "Generica";
            mochila["peso"] = 0.5;
            console.log(mochila.marca);
            console.log(mochila.peso);

        // Eliminar propiedades

            delete mochila.marca;
            console.log(mochila);

        // Objetos para busquedas

            function buscarMadera(prefijo) {
                let madera = {
                    "WA" : "WATAMBU",
                    "MA" : "MAPLE",
                    "QU" : "QUEBRACHO",
                };

                
                return madera[prefijo];
            }

                console.log(buscarMadera("WA"));
                console.log(buscarMadera("MA"));
                console.log(buscarMadera("QU"));
            
        // Verificar propiedades

            /*
                Existe una funcion llamada .hasOwnProperty() que se
                utiliza para saber si un objeto tiene determinada propiedad 
                o no
            */

            console.log(mochila.hasOwnProperty("peso"));  // true
            console.log(mochila.hasOwnProperty("marca")); // false

            function verificarPropiedad(obj, propiedad){
                if(obj.hasOwnProperty(propiedad)){
                    return "Propiedad: " + obj[propiedad];
                } else {
                    return "El objeto no tiene esta propiedad";
                }
            }

                console.log(verificarPropiedad(mochila, "peso"));
                console.log(verificarPropiedad(mochila, "marca"));

        // Objetos completos

            /*

            */

                var ordenesDeTablas = [
                    {
                        "marca" : "brothers",
                        "madera": "maple",
                        "medida": 8.50,
                        "precio": 20000,
                        "envio" : true,
                    },
                    {
                        "marca" : "woodoo",
                        "madera": "maple",
                        "medida": 8.25,
                        "precio": 18000,
                        "envio" : true,
                    },
                    {
                        "marca" : "fun",
                        "madera": "watambu",
                        "medida": 7.75,
                        "precio": 9000,
                        "envio" : false,
                    },
                    {
                        "marca" : "averno",
                        "madera": "watambu",
                        "medida": 8.25,
                        "precio": 8000,
                        "envio" : true,
                    },
                ];

                console.log(ordenesDeTablas[0]);
                console.log(ordenesDeTablas[1]);

                console.log(ordenesDeTablas[2].madera);
                console.log(ordenesDeTablas[3]["precio"]);

        // Objetos anidados

            var miReceta = {
                "nombre" : "chocotorta",
                "costo": 1500,
                "ingredientes": {
                    "chocolinas" : {
                        "bañado": "300 ml de decafe",
                        "adicional": "whisky",
                        },
                    "relleno": {
                        "casancrem": "1 pote",
                        "dulceDeLeche": "1 pote"
                        },
                    
                },
            }

                console.log(miReceta.ingredientes.chocolinas.bañado);
                console.log(miReceta.ingredientes.chocolinas["adicional"]);
                console.log(miReceta.ingredientes["relleno"].casancrem);

        // Arreglos anidados
            
            var misPlantas = [
                {
                    tipo: "cannabis",
                    lista: [
                        "ak-47",
                        "black-44",
                        "gorila-blue",
                        "og-kush",
                    ]
                },
                {
                    tipo: "hongos",
                    lista: [
                        "amanita-muscaria",
                        "girolas",
                    ]
                },
                {
                    tipo: "arboles",
                    lista: [
                        "pino",
                        "sauce",
                        "cerezo",
                        "naranjo",
                    ]
                },
            ];

            console.log(misPlantas[0].lista[0]);
            console.log(misPlantas[1].lista[1]);

        // Coleccion de discos

            var miColeccionDeDiscos = {
                001: {
                    tituloAlbum : "Algo mal escrito",
                    artista : "Asking Alexandria",
                    canciones : [
                        "A prophecy", "Not the american average"
                    ]
                },
                002: {
                    tituloAlbum : "Enema of the state",
                },
                003: {
                    artista : "The story so far",
                    canciones : [
                        "Nerve", "Solo" 
                    ]
                },
            }
            /*
                Cada album tiene un numero ID junto con otras propiedades
                No todos los albumes tienen la info completa
                Nuestro objeto representa parte de una coleccion de albumes
            
                Define una funcion actualizarDiscos parametros:
                    -discos
                    -id
                    -propiedad ("artista" o "canciones")
                    -valor

                Completar la funcion para modificar el obj inicial:

                    -si "valor" es una cadena vacia, elimina la propiedad
                    del album correspondiente

                    -si "propiedad" es igual a la cadena de caracteres "canciones"
                    pero el album no tiene una promiedad llamada "canciones", crea
                    un arreglo vacio y agrega "valor" a ese arreglo

                    -si "propiedad" es igual a la cadena de caracteres "canciones"
                    y "valor" no es una cadena vacia, agrega "valor" al final del arreglo
                    vacio y agregar "valor" a ese arreglo
                    
                    -si "valor" no es una cadena vacia y "propiedades" no es igual a
                    "canciones", asigna el valor del parametro "valor" a la propiedad
                    si la propiedad no existe, debes crearla y asignar este valor

            */

                function actualizarDiscos(discos,id,propiedad,valor){
                    if (valor === ""){
                        delete discos[id][propiedad];
                    } else if(propiedad === "canciones"){
                        discos[id][propiedad] = discos[id][propiedad] || [];
                        discos[id][propiedad].push(valor);
                    } else {
                        discos[id][propiedad] = valor;
                    }
                }

                console.log(miColeccionDeDiscos[001].tituloAlbum);

                actualizarDiscos(miColeccionDeDiscos, 001,"tituloAlbum", "");

                console.log(miColeccionDeDiscos[001]);

                actualizarDiscos(miColeccionDeDiscos, 001, "tituloAlbum", "Stand up and scream");

                console.log(miColeccionDeDiscos[001]);

                actualizarDiscos(miColeccionDeDiscos, 002, "artista", "Blink-182");

                console.log(miColeccionDeDiscos[002]);

        // Ciclos o bucles

            /*
                Los ciclos o bucles nos permiten repetir una secuencia de
                instrucciones un numero especifico de veces (while o for)
            */

                // While

                    /*
                        Se usan cuando no tenemos un numero especifico de iteraciones (repeticion de bloque
                        de codigo)
                    */

                    var conteoDeMsj = 0;
                    
                    while(conteoDeMsj <= 5){
                        console.log("Se repitio " + conteoDeMsj + " veces");
                        conteoDeMsj++;
                    };
                    

                // For

                    /*
                        Se usa cuando sabemos cuantas iteraciones van a ser necesarias
                    */

                    var forArray = [];

                    for (var i = 0; i < 10; i++){
                        forArray.push(i);
                    }

                    console.log(forArray);

                    // Numero impares

                        var forArrayImpar = [];

                        for (var i = 1; i < 20; i += 2){
                            forArrayImpar.push(i);
                        }

                            console.log(forArrayImpar);

                    // Contar hacia atras
                        
                        for ( var i = 15; i >= 10; i-- ){
                            console.log(i);
                        }

                        var conteoReverso = [];

                        for (var i = 10; i > 0; i--) {
                            conteoReverso.push(i);
                        }

                        console.log(conteoReverso);

                    // Interactuar sobre un arreglo 

                        var arregloEjemplo = [4, 5, 6, 10];
                        var totalArreglo = 0;

                        for (var i = 0; i < arregloEjemplo.length; i++){
                            totalArreglo += arregloEjemplo[i];
                        }

                        console.log(totalArreglo);

                    
                        var multiplesLenguaje = ["Javascript", "Python", "Java", "C++"];

                            for (var i = 0; i < multiplesLenguaje.length; i++){
                                console.log(multiplesLenguaje[i].toUpperCase());
                            }
                            

                        function contarNumerosPares(arreglo){
                            let total = 0;

                            for (var i = 0; i < arreglo.length; i++){
                                if(arreglo[i] % 2 == 0){
                                    total++;
                                }
                            }
                            return total;
                        }

                            console.log(contarNumerosPares(arregloEjemplo));

                    // Ciclos for anidados

                        var arregloConArreglos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

                        for (var i = 0; i < arregloConArreglos.length; i++){
                            var arregloAnidado = arregloConArreglos[i];

                            for (var j = 0; j < arregloAnidado.length; j++){
                                console.log(arregloAnidado[j]);
                            }
                        }

                    // Do while

                        /*
                            Hacer mientras una condicion es verdadera, ejecuta la iteracion
                            y luego evalua la condicion, si es true se vuelve a ejecutar la iteracion,
                            caso contrario se rompe
                        */

                            var x;

                            x = 5;

                                do{
                                    console.log(x);
                                    x++;
                                } while (x < 10);

                            
                    // Busqueda de perfil

                        var contactos = [
                            {
                                "nombre": "nicolas",
                                "apellido": "fernandez",
                                "numero": "1123799002",
                                "gustos": ["skate", "bateria", "programacion"],
                            },
                            {
                                "nombre": "tina",
                                "apellido": "siyannis",
                                "numero": "1142533195",
                                "gustos": ["fonoaudiologia", "80s", "gimnasia"],
                            },
                            {
                                "nombre": "rosana",
                                "apellido": "polo",
                                "numero": "1144225533",
                                "gustos": ["vacacionar", "teatro", "piano"],
                            }
                        ];

                        /*
                            crear una funcion que tome un NOMBRE y PROPIEDAD como parametro
                            propiedad puede ser igual a apellido, numero, gustos.
                        */

                            function buscarPerfil(nombre, propiedad){
                                for ( var i = 0; i < contactos.length; i++){
                                    if(contactos[i].nombre === nombre){
                                        return contactos[i][propiedad] || "La propiedad no existe"; // en ese caso se aplica el operador logico OR (retorna la propiedad o el msj )
                                    }
                                }
                                return "El contacto no esta en la lista"; // retornara este msj en el caso de que el parametro NOMBRE no pertenezca a ningun objeto
                            }

                            console.log(buscarPerfil("rosana", "gustos"));

            // Numeros aleatorios

                /*
                    Math.random() genera numeros aleatorios entre 0 y 1(no incluye el 1 en los resultados)
                */

                    console.log(Math.random());

            // Numeros enteros aleatorios

                /*
                    Math.floor() redondea los numero fraccionales
                */

                    var numeroAleatorio0Y19 = Math.floor(Math.random() * 20);
            
                    console.log(numeroAleatorio0Y19);


                function generarEnteroAleatorio(limiteSuperior){
                    return Math.floor(Math.random() * limiteSuperior);
                }

                for (var i = 0; i < 10; i++){
                    console.log(generarEnteroAleatorio(15));
                }

            // Numero enteros aleatorios en un rango

                /*

                */

                    function rangoAleatorio(limiteInferior, limiteSuperior){
                        return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
                    }

                    for (var i = 0; i < 10; i++){
                        console.log(rangoAleatorio(3, 8));
                    }

            // Funcion parseInt()

                /*
                    Sirve para convertir una cadena de caracteres "5" en numero 5
                */
    
                    console.log(parseInt("50"));


            // Funcion parseInt() con una base

                    console.log(parseInt("110111", 2)); // Cuenta el primer parametro como un numero individual, el segundo multiplica la cantidad de veces que aparecera
                
                    console.log(parseInt("3E0A", 16));

            // Operador condicional (ternario)

                    /*
                        Rempleaza el If y el Else
                        Return x < y...

                        ? = Retornar la X
                        : = caso contrario retornar la Y
                    */

                /*
                    function retornarMinimo(x,y){
                        if(x < y){
                            return x;
                        } else{
                            return y;
                        }
                    }

                */

                    function retornarMinimo(x,y) {
                        return x < y ? x : y;
                    }

                    console.log(retornarMinimo(10,11));
                    console.log(retornarMinimo(15,11));

            // Multiples operadores condicionales

            function compararNumeros(a, b){
                return a == b ? "a y b son iguiales" 
                    :  a < b ? "a es menor que b"
                    :  "a es mayor que b";
            }


                    console.log(compararNumeros(5, 5));
                    console.log(compararNumeros(5, 51));
                    console.log(compararNumeros(155, 5));

        // Var vs let

            /*
                Cuando se utiliza Var, se puede declarar multiples veces, con Let no
                Let se usa en el ambito local de alguna funcion o ciclo, si se usa la variable let fuera de este, dara indefinido

            /*

        // Const

            /*
                const es una constante que no puede ser cambiado, no se puede declarar de nuevo
                ni reasignar su valor
                las constantes se escriben const MI_CONSTANTE = 10;

            */

                function calcularAreaCirculo (radio){
                    const PI = 3.14;

                    if (radio < 0){
                        return undefined
                    }

                    return PI * (radio ** 2);
                }

                    console.log(calcularAreaCirculo(10));

            // Mutar arreglo declarado con const

                /*
                    Los array echos con const, no pueden ser modificados
                    en el sentido de agregar numeros, pero si se puden cambiar

                */

                const MI_ARREGLO = [1, 2, 3, 4];

                    MI_ARREGLO[0] = 0;
                    MI_ARREGLO[1] = 1;
                    MI_ARREGLO[2] = 2;
                    MI_ARREGLO[3] = 3;

                    console.log(MI_ARREGLO);

            // Crear un objeto inmutable

                /*
                    No queremos que se agreguen ni se cambien los valores
                    con freeze
                */

                let colores = {
                    "verde" : "#10e04b",
                    "azul"  : "#1b50e0",
                    "negro" : "#000000",
                    "blanco": "#ffffff",
                };

                    Object.freeze(colores);

                    colores.amarillo = "#fff044";
                    colores.verde = "#45ff45";

                console.log(colores);

        // Funciones flecha

            /*
                Son un tipo mas compacto de funciones para escribir
                en javascript, son usadas para hacer funciones anonimas
            
                const fecha = function(){
                    return new Date();
                }

                => se traduce como un "return"
            */

                const FECHA = () => new Date();

            // Funciones flecha con parametros

                /*
                
                    const sumarTres = function(x){
                        return x + 3;
                    };

                */

                    const SUMAR_TRES = (x) => x + 3;

                        console.log(SUMAR_TRES(4));

                /*        
                    const CONCATENAR = function (arr1, arr2){
                        return arr1.concat(arr2);
                    };
                */

                    const CONCATENAR = (arr1, arr2) => arr1.concat(arr2);

                        console.log(CONCATENAR("Hola ","Wachin"));

                    /*
                        const SUMAR = function(a, b){
                            let num = 6;
                            return a + b + num;
                        };
                    */

                        const SUMAR = (a, b) => {
                            let num = 6;
                            return a + b + num;
                        };

                            console.log(SUMAR(1, 1));







