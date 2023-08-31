const user = {
  id: 1,
  username: 'DragonSlayer',
  email: 'dragonslayer@example.com',
  character: {
    name: 'Alduin',
    race: 'Elf',
    class: 'Mage',
    level: 45,
    skills: {
      fireball: 5, // Level of the skill
      teleport: 4,
      invisibility: 3,
    },
    equipment: {
      head: 'Dragon Crown',
      body: 'Mage Robe',
      weapon: 'Crystal Staff',
    },
    inventory: [
      { name: 'Health Potion', quantity: 5 },
      { name: 'Mana Potion', quantity: 3 },
      { name: 'Elixir of Strength', quantity: 1 },
    ],
  },
  achievements: ['Dragon Slayer', 'Master Alchemist', 'Legendary Hero'],
  guild: {
    name: 'The Defenders of the Realm',
    role: 'Member',
    members: 50,
  },
  gameStats: {
    totalKills: 2345,
    totalDeaths: 178,
    questsCompleted: 120,
    totalTimePlayed: 345000, // in seconds
  },
};

function getName() {
  return user.username;
}
console.log(getName());

function getInventory() {
  return user.character.inventory;
}
console.log(getInventory());

function getNumberOfPotions() {
  const potion = user.character.inventory;
  //   let sum = 0;

  //   for (let i = 0; i < potion.length; i++) {
  //     sum += potion[i].quantity;
  //   }

  //   return sum;

  const totalPotions = potion.reduce((total, accumulator) => {
    return total + accumulator.quantity;
  }, 0);

  return totalPotions;
}

console.log(getNumberOfPotions());

function attackEnemy() {
  const randomNumber = Math.floor(Math.random() * 2);

  return randomNumber;
}

console.log(attackEnemy());
