function removeWovels(string) {
  return string.replace(/aeiou/g, '').join('');
}
console.log(removeWovels('This website is for losers LOL'));
