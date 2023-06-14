

 let boucles = prompt("il existe plusieurs type de boucles dont:\n1.For \n2.For...in \n3.For...of \n4.While \n5.Do...while",)



 if (boucles == 1) {
   alert(`l'instruction for crée une boucle composée de trois expressions optionnelles séparées par des points-virgules et encadrées entre des parenthèses qui sont suivies par une instruction (généralement une instruction de bloc) à exécuter dans la boucle.exemple:let str = '';

   for (let i = 0; i < 9; i++) {
     str = str + i;
   }
  
   console.log(str);
    Expected output: "012345678"`)

 }  if (boucles == 2) {
   alert(`L'instruction for...in permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles. Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un bloc d'instructions).Exemple
   const object = { a: 1, b: 2, c: 3 };

 for (const property in object) {
   console.log( property + ":" + object[property]);
 }

  Expected output:
  "a: 1"
  "b: 2"
  "c: 3"
 `)

 } else if (boucles == 3) {
   alert(`L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété. Exemple:
   const array1 = ['a', 'b', 'c'];

 for (const element of array1) {
   console.log(element);
 }

 Expected output: "a"
 Expected output: "b"
 Expected output: "c"`)

 } else if (boucles == 4) {
   alert(`L'instruction while permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle. Exemple:
   let n = 0;

   while (n < 3) {
     n++;
   }
  
   console.log(n);
  Expected output: 3 `)

 } else if (boucles == 5) {
   alert(`L'instruction do...while crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée. La condition est testée après que l'instruction soit exécutée, le bloc d'instructions défini dans la boucle est donc exécuté au moins une fois.Exemple:
   let result = '';
 let i = 0;

 do {
   i = i + 1;
   result = result + i;
 } while (i < 5);

 console.log(result);
Expected output: "12345"
 `)

 };
      //  For
         let n = parseInt(prompt("entrer un entier"));

         
      if(n){

        for (let i = 1; i <= 10; i++) {
          document.getElementById("produit").innerHTML +=
          `<tr>
          <td > ${n} </td>
          <td> ${i}</td>
          <td> ${n*i} </td>
           </tr>`
         };
         
        document.write(`</table>`)
      }else{
        prompt("veuillez saisir un nombre entier")
        

      }
     
          // Do...While

//  if(n){
//    var i = 0;
//  do {
//     i += 1;

//     document.write(`<td>${i} * ${n} = ${i*n}</td>`);
//  } while (i <= 10 )        
//  }else{
//    prompt("veuillez saisir un nombre entier")

//  }

 
 




 