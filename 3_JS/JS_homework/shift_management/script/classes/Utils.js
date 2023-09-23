class Utils {
  generateId() {
    const { v4: uuidv4 } = window.uuid;
    return uuidv4();
  }

  encryptPassword(password) {
    return password + '1';
  }

  decryptPassword(password) {
    return password.slice(0, password.length - 1);
  }

  validateUserInput(inputType, inputValue, inputParentElement) {
    const regexValidation = {
      /** This regex pattern checks for a basic email format. It allows for letters, digits, dots,
       * and hyphens in the local part, followed by an "@" symbol, followed by the domain
       * name (letters, digits, dots, and hyphens), and a top-level domain (e.g., com, org, net)
       * with at least two characters. */
      email: /^[\w\.-]+@[a-z\d\.-]+\.[a-z]{2,}$/i,

      /**
       * This regex pattern allows for alphabetic characters only.
       * It matches a single word (the first name) or two words separated by
       * a space (the first and last names).
       */
      text: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/,

      /**
       * This regular expression pattern ensures that the username consists
       * of two parts separated by a dot, with each part containing one or
       * more alphabetic characters.
       */
      username: /^[a-zA-Z]+\.[a-zA-Z]+$/,

      /** This regex pattern matches positive integers greater than 17,
       * which could be used for validating age. */
      number: /^(1[89]|[2-9]\d|\d{3,})$/,

      /** This regex pattern enforces that the password must be at least 8 characters
       * long and include at least one uppercase letter, one digit, and one special
       * character (from the set [@$!%*?&]). */
      password: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    };

    //! BUG validation for username not working properly
    if (regexValidation['username'].test(inputValue)) {
      inputParentElement.style.border = '2px solid green';
      return true;
    }

    if (regexValidation[inputType].test(inputValue)) {
      inputParentElement.style.border = '2px solid green';
      return true;
    } else {
      inputParentElement.style.border = '2px solid red';
      return false;
    }
  }

  redirectToNewPage(path, pageRef) {
    location.href = location.origin + `${path}/${pageRef}.html`;
    // location.replace(location.origin + `${path}/${pageRef}.html`);
  }
}

export default Utils;
