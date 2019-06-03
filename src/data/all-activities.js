const ideas = [
  'Take a class/start a new course',
  'Visit a new resturant',
  'Do Yoga',
  'Meditate',
  'Get a massage',
  'Ride a bike or motorcycle',
  'Cook something new',
  'See a live music show',
  'Travel somewhere new closeby',
  'Camp under the stars',
  'Rearrange furniture in your house',
  'Find a local Meetup and join',
  'Go fishing',
  'Play a board game',
  'Take pictures of a beautiful place',
  'Try to draw something or someone',
  'Try a new sport',
  'Visit a new grocery store',
  'Go for a nature walk',
  'Try birdwatching',
  'Go to Karoke with friends',
  'Write someone you care about a nice letter',
  'Donate to a charity',
  'Help out a neighbor',
  'Volunteer at a local charity',
  'Clean up your favorite nature spot',
  'Start a journal',
  'See a new movie',
  'Find and watch a classic movie',
  'Watch a movie from your childhood',
  'Go to a dog park',
  'Visit a local business and buy one thing',
  'Write a poem',
  'Find a random wikipedia article and read it',
  'Ask for criticism on your latest project',
  'Learn about a different culture',
  'Read about a different religion',
  'Create a youtube video',
  'Relax in a coffee shop',
  'Take a long relaxing bath',
  'Plan a spontaneous vacation',
  'Sew or repair an old pair of clothes',
  'Visit a flea market and find something cool to buy',
  'Compliment a friend or stranger on their attire',
  'Visit a different town and go for a walk',
  'Take a road trip using a physical map, not your phone',
  'Buy a lottery ticket or scratch off',
  'Buy an outfit that is outside your style',
  'Get a haircut or make-over',
  'Go bowling'
]

export function generateIdea(activities) {
  let seed = Math.floor(Math.random() * ideas.length)
  let idea = ideas[seed]
  const activitiesRepeat = activities.some(el => {
    return el === idea
  })
  if (!activitiesRepeat) {
    return idea
  } else {
    return null
  }
}
