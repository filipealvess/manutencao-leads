import {
  hasMoreThan8Characters,
  hasNumbers,
  hasSpecialCharacters,
  hasUppercaseAndLowercaseLetters,
  passwordsAreEquals
} from "../validators/passwordValidators";

const passwordRules = [
  {
    id: 0,
    rule: 'Possui pelo menos 8 caracteres',
    validator: hasMoreThan8Characters
  },
  {
    id: 1,
    rule: 'Possui caracteres especiais',
    validator: hasSpecialCharacters
  },
  {
    id: 2,
    rule: 'Possui números',
    validator: hasNumbers
  },
  {
    id: 3,
    rule: 'Possui letras maiúsculas e minúsculas',
    validator: hasUppercaseAndLowercaseLetters
  },
  {
    id: 4,
    rule: 'A senha e a confirmação são iguais',
    validator: passwordsAreEquals
  },
];

export default passwordRules;
