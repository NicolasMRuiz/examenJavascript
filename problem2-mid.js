/* Problema 2 Intermedio */

/* Para continuar celebrando el campeonato mundial de Argentina haremos un ejercicio en su
honor. Sabiendo que la fecha en que Argentina ganó la tercera fue el 2022-12-18 haga función
para indicar cuántos días pasaron hasta hoy de manera “humanizada” */

function daysFromTheThird() {
    const thirdVictoryDate = new Date('2022-12-18');
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - thirdVictoryDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = thirdVictoryDate.toLocaleDateString('es-AR', options);

    return `Pasaron ${daysDifference} días desde ${formattedDate}`;
}

console.log(daysFromTheThird());