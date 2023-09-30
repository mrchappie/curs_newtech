import HandleLocalStorage from './classes/HandleLocalStorage.js';
import Utils from './classes/Utils.js';
import routes from './dataBase/routes.js';

const handleStorage = new HandleLocalStorage();
const utils = new Utils();
const loggedUserId = handleStorage.retriveUsers()?.loggedUser;

// ADD SHIFT / EDIT SHIFT
const newShiftForm = document.getElementById('new__shift__form');

const newShiftNameInput = document.getElementById('new__shift__name');
const newShiftDateInput = document.getElementById('new__shift__date');
const newShiftStartInput = document.getElementById('new__shift__starttime');
const newShiftEndInput = document.getElementById('new__shift__endtime');
const newShiftWageInput = document.getElementById('new__shift__hourly__wage');
const newShiftWorkplaceInput = document.getElementById('new__shift__workplace');
const newShiftProfitInput = document.getElementById('new__shift__profit');
const addShiftButton = document.getElementById('new__shift__button');

const addNewShiftHeading = document.getElementById('add__new__shift__heading');

window.addEventListener('load', () => {
  // checks if a user is logged in, if it's not, it calls redirectToNewPage() function and redirects the user to log in page
  !loggedUserId
    ? utils.redirectToNewPage(routes.logInPage[0], routes.logInPage[1])
    : null;

  // extracts shift Id from URL, if this exists
  const params = new URL(document.location).searchParams;
  const urlShiftId = params.get('shiftId');

  // if user shift exists, this will find that shift and populate the inputs
  // with those values
  const userShift = handleStorage.shiftsDataBase[loggedUserId]?.find(
    (shift) => shift.shiftId === urlShiftId
  );

  if (userShift) {
    newShiftNameInput.value = userShift.shiftName;
    newShiftDateInput.value = userShift.date;
    newShiftStartInput.value = userShift.startTime;
    newShiftEndInput.value = userShift.endTime;
    newShiftWorkplaceInput.value = userShift.shiftPlace;
    newShiftWageInput.value = userShift.hourlyWage;
    newShiftProfitInput.value = userShift.totalProfitPerShift;

    // Change form heading
    addNewShiftHeading.textContent = 'Edit your shift';
    addShiftButton.textContent = 'Save new shift data';

    // Add shift delete option
    const deleteShiftButton = document.createElement('button');
    deleteShiftButton.textContent = 'Delete shift';

    deleteShiftButton.addEventListener('click', (e) => {
      e.preventDefault();
      const shiftDbClone = JSON.parse(
        JSON.stringify(handleStorage.shiftsDataBase[loggedUserId])
      ).filter((shift) => shift.shiftId != urlShiftId);

      handleStorage.shiftsDataBase[loggedUserId].length = 0;
      handleStorage.shiftsDataBase[loggedUserId].push(...shiftDbClone);
      handleStorage.updateShifts();
      utils.redirectToNewPage(routes.homePage[0], routes.homePage[1]);
    });

    newShiftForm.append(deleteShiftButton);
  }

  addShiftButton.addEventListener('click', (e) => {
    e.preventDefault();
    addNewShift(loggedUserId, urlShiftId);
    utils.redirectToNewPage(routes.homePage[0], routes.homePage[1]);
  });
});

/**
 * The function creates a new HTML element with a class name and appends it to a container element,
 * populating it with data from an input object.
 * @param shift - The parameter "shift" is an object that contains the details of a shift.
 */

function calculateTotalProfit() {
  const startTime = newShiftStartInput.value.split(':').map(Number);
  const endTime = newShiftEndInput.value.split(':').map(Number);
  let difference =
    startTime[0] * 60 + startTime[1] - (endTime[0] * 60 + endTime[1]);

  if (difference < 0) {
    difference += 24 * 60;
  }

  return Math.floor((difference * newShiftWageInput.value) / 60);
}

/* The code below is adding an event listener to the `newShiftWageInput` element. This
event listener listens for the 'input' event, which is fired when the value of the input field
changes and sets the shift profit to the `newShiftProfitInput` input value*/
newShiftWageInput.addEventListener('input', () => {
  newShiftProfitInput.value = calculateTotalProfit();
});

function addNewShift(userId, shiftId) {
  const shiftDbClone = JSON.parse(
    JSON.stringify(handleStorage.shiftsDataBase[loggedUserId])
  );

  const newShift = {
    shiftId: !shiftId ? utils.generateId() : shiftId,
    shiftName: newShiftNameInput.value,
    date: newShiftDateInput.value,
    startTime: newShiftStartInput.value,
    endTime: newShiftEndInput.value,
    hourlyWage: newShiftWageInput.value,
    shiftPlace: newShiftWorkplaceInput.value,
    totalProfitPerShift: calculateTotalProfit(),
  };
  //   newShiftProfitInput.value = newShift.totalProfitPerShift;

  if (shiftId) {
    const indexOfShift = shiftDbClone.findIndex(
      (shift) => shift.shiftId === shiftId
    );
    shiftDbClone.splice(indexOfShift, 1, newShift);
  } else {
    shiftDbClone.push(newShift);
  }

  handleStorage.shiftsDataBase[userId].length = 0;
  handleStorage.shiftsDataBase[userId].push(...shiftDbClone);
  handleStorage.updateShifts();
}
