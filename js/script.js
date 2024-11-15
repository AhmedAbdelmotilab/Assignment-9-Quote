var quotes = [
  {
    quote: 'The only limit to our realization of tomorrow is our doubts of today.',
    authorName: 'Franklin D. Roosevelt',
  },
  { quote: 'In the middle of every difficulty lies opportunity.', authorName: 'Albert Einstein' },
  { quote: 'Do what you can, with what you have, where you are.', authorName: 'Theodore Roosevelt' },
  {
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    authorName: 'Winston Churchill',
  },
  { quote: 'The future belongs to those who believe in the beauty of their dreams.', authorName: 'Eleanor Roosevelt' },
  { quote: 'It is never too late to be what you might have been.', authorName: 'George Eliot' },
  { quote: 'You must be the change you wish to see in the world.', authorName: 'Mahatma Gandhi' },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    authorName: 'Ralph Waldo Emerson',
  },
  { quote: 'The only way to do great work is to love what you do.', authorName: 'Steve Jobs' },
  { quote: 'Life is what happens when you’re busy making other plans.', authorName: 'John Lennon' },
  {
    quote: 'Success is not how high you have climbed, but how you make a positive difference to the world.',
    authorName: 'Roy T. Bennett',
  },
  { quote: 'Happiness is not something ready-made. It comes from your own actions.', authorName: 'Dalai Lama' },
  { quote: 'It always seems impossible until it’s done.', authorName: 'Nelson Mandela' },
  {
    quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    authorName: 'Chinese Proverb',
  },
  { quote: 'It does not matter how slowly you go as long as you do not stop.', authorName: 'Confucius' },
  { quote: 'Everything you can imagine is real.', authorName: 'Pablo Picasso' },
  { quote: 'The only impossible journey is the one you never begin.', authorName: 'Tony Robbins' },
  {
    quote: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    authorName: 'Zig Zigzag',
  },
  { quote: 'Act as if what you do makes a difference. It does.', authorName: 'William James' },
  { quote: 'You must do the things you think you cannot do.', authorName: 'Eleanor Roosevelt' },
  { quote: 'Don’t watch the clock; do what it does. Keep going.', authorName: 'Sam Leven' },
  { quote: 'The best way to predict your future is to create it.', authorName: 'Abraham Lincoln' },
  {
    quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
    authorName: 'Christopher Columbus',
  },
  {
    quote: 'Our lives begin to end the day we become silent about things that matter.',
    authorName: 'Martin Luther King Jr.',
  },
  { quote: 'Believe you can and you’re halfway there.', authorName: 'Theodore Roosevelt' },
  { quote: 'It’s not what happens to you, but how you react to it that matters.', authorName: 'Epictetus' },
  { quote: 'You only live once, but if you do it right, once is enough.', authorName: 'Mae West' },
  { quote: 'Doubt kills more dreams than failure ever will.', authorName: 'Suzy Kassel' },
  { quote: 'Don’t be afraid to give up the good to go for the great.', authorName: 'John D. Rockefeller' },
  { quote: 'The mind is everything. What you think you become.', authorName: 'Buddha' },
  { quote: 'To live a creative life, we must lose our fear of being wrong.', authorName: 'Joseph Chilon Peace' },
  { quote: 'Life isn’t about finding yourself. It’s about creating yourself.', authorName: 'George Bernard Shaw' },
];
var initialIndex = 0;
function getQuote() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === initialIndex);
  initialIndex = randomIndex;
  var element = `<h2>Quote Number: ${randomIndex}</h2>
    <p>"${quotes[randomIndex].quote}"</p>
    <h3>--${quotes[randomIndex].authorName}</h3>`;
  document.getElementById('quote').innerHTML = element;
  // console.log(randomIndex);
}
