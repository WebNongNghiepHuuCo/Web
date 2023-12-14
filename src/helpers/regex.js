export const REGEX = {
  PASSWORD: /^[a-zA-Z0-9]{6,14}$/,
  NOT_WHITESPACE: /^(?!.*[\s])/,
  SPECIAL_CHARACTERS: /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/,
  NOT_WHITESPACE_START: /^[^\s].*/,
  INT_NUMBER: /^[0-9]+$/,
  PHONE_NUMBER: /^[0-9 -]+$/,
}
