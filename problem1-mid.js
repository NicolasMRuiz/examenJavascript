/* Problema 1 Intermedio */

/* Realizar una función que verifique si un número es múltiplo de 3. No se puede usar el operador
de módulo (%) para comprobar la multiplicidad.
Pista: para cualquier número, si la suma de sus dígitos da como resultado 3, 6 o 9 entonces es
múltiplo de 3. Si la suma posee dos dígitos se repite el procedimiento hasta obtener 3, 6 o 9.
339 => 3 + 3 + 9 = 15 —> 15 => 1 + 5 = 6 */

function multipleOfThree(number) {
    while (number >= 10) {
        let digitSum = 0;
        let num = number;
        while (num > 0) {
            digitSum += num - Math.floor(num / 10) * 10;
            num = Math.floor(num / 10);
        }
        number = digitSum;
    }
    return number === 3 || number === 6 || number === 9;
}

console.log(multipleOfThree(21));