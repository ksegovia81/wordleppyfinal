


const words = {
    easy: ["CASA", "PELO", "MANO", "GATO", "PERRO", "MESA", "SILLA", "AGUA", "BOCA", "DEDO"],
    medium: ["ÁRBOL", "COCHE", "PLAYA", "RELOJ", "FLOR", "LECHE", "FUEGO", "HIELO", "HUEVO", "QUESO"],
    hard: ["ÁCIDO", "ÁGIL", "ÁTOMO", "BUQUE", "CÉNIT", "CUÓRUM", "DÚCTIL", "ÉXITO", "FÚTIL", "GNOMO"]
};


export function getRandomWord(difficulty) {
    return words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
}


export function addWords(difficulty, newWords) {
    if (words[difficulty]) {
        words[difficulty].push(...newWords);
    }
}
