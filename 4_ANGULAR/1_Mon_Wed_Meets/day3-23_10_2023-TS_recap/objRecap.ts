type Pet = Dog | Cat;

type Dog = {
  species: 'dog';
  breed: string;
  size: 'small' | 'medium' | 'large';
  bark: () => void;
};

type Cat = {
  species: 'cat';
  breed: string;
  fur: 'short' | 'medium' | 'long';
  purr: () => void;
};

const animal: Pet = {
  species: 'dog',
  breed: 'African',
  size: 'small',
  bark() {
    console.log('Bark');
  },
};

function isDog(pet: Pet): pet is Dog {
  return 'bark' in pet;
}

function barkIfAble(pet: Pet) {
  //   if (isDog(pet)) {
  //     pet.bark();
  //   }
  if (pet.species === 'dog') {
    pet.bark();
  }
}
