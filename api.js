


const words = {
    easy: ["CASAS", "PELOS", "MANOS", "GATOS", "PERRO", "MESAS", "SILLA", "AGUAS", "BOCAS", "DEDOS"],
    medium: ["ÁRBOL", "COCHE", "PLAYA", "RELOJ", "FLORA", "LECHE", "FUEGO", "HIELO", "HUEVO", "QUESO"],
    hard: ["ÁCIDO", "GOTAS", "ÁTOMO", "BUQUE", "CÉNIT", "CUÓRUM", "DÚCTIL", "ÉXITO", "FÚTIL", "GNOMO"]
};


export function getRandomWord(difficulty) {
    return words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
}


export function addWords(difficulty, newWords) {
    if (words[difficulty]) {
        words[difficulty].push(...newWords);
    }
}
