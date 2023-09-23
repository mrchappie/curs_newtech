const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const encryptedText = document.getElementById('encryptedText');
const decryptedText = document.getElementById('decryptedText');

let decryptionKey = '';
const ENCRYPTED_CHAR_LENGTH = 4;

function encryptText(text) {
  decryptionKey = '';
  let encrypteText = '';

  const encryptionKey = '!@#$%^&*?~';

  for (let i = 0; i < text.length; i++) {
    const textCharCode = text.charCodeAt(i).toString();
    let newCode = textCharCode;
    for (let j = textCharCode.length; j < ENCRYPTED_CHAR_LENGTH; j++) {
      newCode += '0';
    }
    decryptionKey += ENCRYPTED_CHAR_LENGTH - textCharCode.length;
    encrypteText += newCode;
  }

  return encrypteText
    .split('')
    .map((char) => {
      return (char = encryptionKey[char]);
    })
    .join('');
}

function decryptText(text) {
  const decryptedText = [];
  const regexPattern = new RegExp(`.{1,${ENCRYPTED_CHAR_LENGTH}}`, 'g');
  const arrayOfChars = text.match(regexPattern);
  const encryptionKey = '!@#$%^&*?~';

  for (let i = 0; i < arrayOfChars.length; i++) {
    const char = arrayOfChars[i].slice(
      0,
      arrayOfChars[i].length - decryptionKey[i]
    );
    let decryptedChar = '';

    for (let j = 0; j < char.length; j++) {
      decryptedChar += encryptionKey.indexOf(char[j]);
    }
    decryptedText.push(decryptedChar);
  }

  return decryptedText.map((char) => String.fromCharCode(char)).join('');
}

encrypt.addEventListener('click', () => {
  if (userInput.value) encryptedText.textContent = encryptText(userInput.value);
});

decrypt.addEventListener('click', () => {
  // if (userInput.value)
  decryptedText.textContent = decryptText(encryptedText.textContent);
});
