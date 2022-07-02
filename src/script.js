var label = document.getElementById("label2");
function randomString() {
  var indexs = [
    "HAVE A NICE DAY",
    "I LOVE YOU!",
    "YOU ARE THE BEST",
    "YOU'RE DOING AWESOME",
    "IM PROUD OF YOU!",
    "<3",
    "U R GR8!",
    "HAPPY YOU'R DAY!",
    "LOVE YOURSELF!",
    "INFINITE LOVE TO YOU!<3333...",
    "WHAT EVER YOU DO YOU'RE THE BEST",
    "DON'T LISTEN TO OTHERS!",
    "BE PROUD!",
    "YOU ARE AMAZING",
    "DO ANYTHING YOU WANT!",
    "THERE'S MY CHAMPION :)",
    "YOU'RE MY HERO!",
    "YOU ARE MY BFF!",
    "HERE IS YOUR DAILY KISS *KISS*",
    "BEST PERSON ON EARTH",
  ];
  var randomize = indexs[Math.floor(Math.random() * indexs.length)];
  document.getElementById("label2").innerHTML = randomize;
}
