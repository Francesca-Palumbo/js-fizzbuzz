// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

    // stampo la lista dei numeri da 1 a 100
for (var i = 1; i < 101; i++) {
    // verifico se il numero è divisibile per 3, cioè se il resto è 0
    var resto_3 = i%3;
    console.log( "resto divisione per 3: " + resto_3 );
    // verifico se il numero è divisibile per 5, cioè se il resto è 0
    var resto_5 = i%5;
    console.log( "resto divisione per 5: " + resto_5 );
    if (( resto_3 !=0 ) && ( resto_5 !=0 )){
        // se il resto è diverso da 0 non è un muliplo di 3 e nemmeno di 5 e quindi stampo il numero
        console.log(i);
    }
        // stampo FizzBuzz nei casi in cui il numero è multiplo sia di 3 che di 5
    else if (( resto_5 == 0 ) && ( resto_3 == 0 )) {
        console.log( "FizzBuzz");
    }
    else if ( resto_5 == 0 )  {
        // se il numero è un multiplo di 5 stampo Buzz
        console.log( "Buzz" );
    }
     else {
        // se il resto è pari a 0 è un multiplo di 3 e de quindi stampo Fizz
        console.log("Fizz");
    }
 }
