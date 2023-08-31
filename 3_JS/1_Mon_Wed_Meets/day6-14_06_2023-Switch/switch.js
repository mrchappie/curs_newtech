function checkSwitch() {
  const value = parseInt(prompt('Insert a number:'));

  switch (value) {
    case 1:
      console.log('UNU');
      break;
    case 2:
    case 'two':
      console.log('DOI');
      break;
    case 3:
      console.log('TREI');
      break;
    default:
      console.log('Error');
  }
}
