const text =
  'An online book is a resource in book-like form that is only available to read on the Internet. It differs from the common idea of an e-book, which is usually available for users to download and read locally on a computer, smartphone or on an e-reader'
    .toLowerCase()
    .split(' ');

/**
 * Intoarce un map cu literele din alfabet ca chei
 * si o lista cu toate cuvintele din text care incep cu litera respectiva,
 * fara duplicate.
 *
 * Ex: ana are mere si pere => {
 *  "a" => ["ana", "are"]
 *  "m" => ["mere"]
 *  "s" => ["si"]
 *  "p" => ["pere"]
 * }
 *
 * @param {string} text
 *
 * @returns {Map<string, Set<string>>}
 */
function getGlossary(text) {
  const newMap = new Map();

  for (let i = 0; i < text.length; i++) {
    const firstLetter = text[i].charAt(0);

    const words = Array.from(
      new Set(text.filter((word) => word.charAt(0) === firstLetter))
    );

    newMap.set(firstLetter, words);

    // if (!newMap.get(firstLetter)) {
    //   newMap.set(firstLetter, words);
    // } else {
    //   newMap.set(firstLetter, words);
    // }
  }

  return newMap;
}

/**
 * Afiseaza un glosar (getGlossary) in formatul de mai jos,
 * in ordine alfabetica (atat chei cat si cuvinte)
 *
 * Ex: printGlossary(getGlossary("ana are mere si pere"))
 * =>
 * a
 *  ana
 *  are
 * m
 *  mere
 * p
 *  pere
 * s
 *  si
 */
function printGlossary(glossary) {
  glossary.forEach((value, key) => {
    console.log(key);
    value.forEach((elem) => console.log('  ' + elem));
  });
}

printGlossary(getGlossary(text));
