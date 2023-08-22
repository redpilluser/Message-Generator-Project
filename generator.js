const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const options = {
  day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'],
  quotes: ["Your limitation - it is only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Great things never come from comfort zones.",
  "To live a creative life, we must lose our fear of being wrong.",
  "Dream it. Wish it. Do it.",
  "If you are not willing to risk the usual you will have to settle for the ordinary.",
  "Trust because you are willing to accept the risk, not because it is safe or certain.",
  "Success does not just find you. You have to go out and get it.",
  "The harder you work for something, the greater you will feel when you achieve it.",
  "Do not stop when your tired. Stop when you are done.",
  "Little things make big days.",
  "Do not wait for opportunity. Create it.",
  "It is going to be hard, but hard does not mean impossible.",
  "Dream it. Believe it. Build it."],
  recommendations: ['strong', 'positive', 'focused', 'creative', 'innovative']
};
  
let dailyQuote = [];
  
for(let option in options){
  let optIndex = randomNum(options[option].length)
  switch(option){
    case 'day':
        dailyQuote.push(`Today is ${options[option][optIndex]}. \u{1F600}`)
      break
    case 'quotes':
      dailyQuote.push(`Today's inspiring quote is: ${options[option][optIndex]} \u{1F64B}`)
      break
    case 'recommendations':
      dailyQuote.push(`Our recommendation for today is to stay ${options[option][optIndex]} \u{1F44D}`)
      break
    default:
      dailyQuote.push(`There are no recommendations for today!`)
  }
}
  
const formatDailyQuote = (quotes) => {
  const formatted = quotes.join('\n');
  console.log(`   /$$$$$$$                  /$$       /$$$$$$$  /$$ /$$ /$$       /$$   /$$                              
  | $$__  $$                | $$      | $$__  $$|__/| $$| $$      | $$  | $$                              
  | $$  \\ $$  /$$$$$$   /$$$$$$$      | $$  \\ $$ /$$| $$| $$      | $$  | $$  /$$$$$$$  /$$$$$$   /$$$$$$ 
  | $$$$$$$/ /$$__  $$ /$$__  $$      | $$$$$$$/| $$| $$| $$      | $$  | $$ /$$_____/ /$$__  $$ /$$__  $$
  | $$__  $$| $$$$$$$$| $$  | $$      | $$____/ | $$| $$| $$      | $$  | $$|  $$$$$$ | $$$$$$$$| $$  \\__/
  | $$  \\ $$| $$_____/| $$  | $$      | $$      | $$| $$| $$      | $$  | $$ \\____  $$| $$_____/| $$      
  | $$  | $$|  $$$$$$$|  $$$$$$$      | $$      | $$| $$| $$      |  $$$$$$/ /$$$$$$$/|  $$$$$$$| $$      
  |__/  |__/ \\_______/ \\_______/      |__/      |__/|__/|__/       \\______/ |_______/  \\_______/|__/     `);
    
    console.log(formatted);
  };

  formatDailyQuote(dailyQuote);
