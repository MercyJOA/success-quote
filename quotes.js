let button = document.getElementById('button');

let quotes = document.getElementById('quotes');

let quotesArray = ['"Life is 10% what happens to you and 90% how you react to it." Charles R. Swindoll',
'“Change your thoughts, and you change your world.” Norman Vincent Peale',
'"All our dreams can come true if we have the courage to pursue them.”  Walt Disney',
'"Success is a journey not a destination."  Ben Sweetland',
'"What you get by achieving your goals is not as important as what you become by achieving your goals."  Zig Ziglar',
'"It always seems impossible until its done."  Nelson Mandela',
'“Success is liking yourself, liking what you do, and liking how you do it.” Maya Angelou',
'"Aim for the moon. If you miss, you may hit a star."  W. Clement Stone',
'"If you cannot do great things, do small things in a great way."  Napoleon Hill',
'“Success only comes to those who dare to attempt.” Mallika Tripathi',
'“I never dreamed about success. I worked for it.”  Estée Lauder',
'"If opportunity doesnot knock, build a door." Milton Berle'];

button.addEventListener('click',function(){
let randomQuotes = quotesArray[Math.floor(Math.random()*quotesArray.length)];
quotes.innerHTML = randomQuotes;
})




