function palindrome(str) {
  const strToLowerCase = str.toLowerCase().match(/[a-z0-9]/g);

  if (strToLowerCase.join('') === strToLowerCase.reverse().join('')) {
    return true;
  } else {
    return false;
  }

}

palindrome("A man, a plan, a canal. Panama");
