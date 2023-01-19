// A mock function to mimic making an async request for data

const randomAnimalCards = {
    0: {
        title: 'Shrimp can create sonic booms!',
        message: 'The Pistol Shrimp is capable of snapping its claw shut so rapidly, that it creates a bubble which collapses to produce a sonic blast, louder than a Concorde’s sonic boom.'
    },
    1: {
        title: 'Otters are amazing!',
        message: 'Otters “hold hands” while sleeping, so they don’t float away from each other.'
    },
    2: {
        title: 'The Inland Taipan is terrifying!',
        message: 'The Inland Taipan (also known as, the Western Taipan) is the most venomous snake in the world. A single bite contains enough venom to kill at least 100 fully grown men, and can kill within just 30 minutes, if left untreated.'
    },
    3: {
        title: 'The short lives of mayflies.',
        message: 'The shortest living animal in the world is the Mayfly. Its entire adult lifespan is just 24hrs.'
    },
    4: {
        title: 'What is a flock a parrots called?',
        message: 'A pandemonium.'
    },
    5: {
        title: 'Why do blue whales have a hard time holding their tongue?',
        message: 'A Blue Whales tongue can weigh as much as a car, or a small adult elephant, weighing around 2,720-3,630 Kg.'
    },
    6: {
        title: 'The self-comfort of baby elephants.',
        message: 'Baby elephants suck their trunks for comfort.'
    },
    7: {
        title: 'Spiders are everywhere!',
        message: 'There is an average of 50,000 spiders per acre in green areas.'
    },
    8: {
        title: 'Ostrich means business!',
        message: 'An ostrich legs are so powerful that their kicks can kill a lion.'
    },
    9: {
        title: 'Skunks have a wild odor.',
        message: 'The smell of a skunk is powerful enough for a human to smell it up to 5.6 km away.'
    }
}

export function fetchCard() {
    return new Promise((resolve) =>
      setTimeout(() => resolve(randomAnimalCards[Math.floor(Math.random() * 10)]), 1000)
    );
  }