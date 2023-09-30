const dogsOptions = document.getElementById('dogsBreed');
const imagesContainer = document.getElementById('imagesContainer');
const randomImg = document.getElementById('randomImg');

async function fetchDogsBreed() {
  const dogs = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await dogs.json();
  const breeds = data.message;

  return breeds;
}

async function populateDropDown() {
  const breeds = await fetchDogsBreed();
  for (const breed in breeds) {
    const optionEl = document.createElement('option');
    optionEl.value = breed;
    optionEl.textContent = breed;
    dogsOptions.append(optionEl);
  }
}

async function fetchDogImages(breed) {
  let imagesList = [];
  try {
    const images = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await images.json();
    imagesList = data.message;
  } catch (err) {
    console.error(err);
  }

  return imagesList;
}

dogsOptions.addEventListener('change', async () => {
  const images = await fetchDogImages(dogsOptions.value);
  console.log(images);

  imagesContainer.innerHTML = '';

  images.forEach((image) => {
    const imageEl = document.createElement('img');
    imageEl.src = image;
    imagesContainer.append(imageEl);
  });
});

async function getRandomDogImage() {
  const images = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await images.json();
  return data.message;
}
randomImg.addEventListener('click', async () => {
  imagesContainer.innerHTML = '';
  const image = await getRandomDogImage();
  const imageEl = document.createElement('img');
  imageEl.src = image;
  imagesContainer.append(imageEl);
});

populateDropDown();
