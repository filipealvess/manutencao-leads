export function hasMoreThan8Characters(pass) {
  return pass.trim().length >= 8;
}

export function hasSpecialCharacters(pass) {
  const specialCharactersRegex = /[!@#$%&*_\-+=<>:;]/g;

  return specialCharactersRegex.test(pass);
}

export function hasNumbers(pass) {
  const numberRegex = /\d/g;

  return numberRegex.test(pass);
}

export function hasUppercaseAndLowercaseLetters(pass) {
  const uppercaseRegex = /[A-Z]/g;
  const lowercaseRegex = /[a-z]/g;

  return uppercaseRegex.test(pass) && lowercaseRegex.test(pass);
}

export function passwordsAreEquals(pass1, pass2) {
  const notEmpty = pass1.trim().length > 0 && pass2.trim().length > 0;

  return pass1 === pass2 && notEmpty;
}
