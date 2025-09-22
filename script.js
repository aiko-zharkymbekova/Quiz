function calculateResult() {
  let scores = {
    authoritarian: 0,
    democratic: 0,
    strategic: 0,
    charismatic: 0
  };

  // собираем все ответы
  for (let i = 1; i <= 10; i++) {
    let q = document.querySelector(`input[name="q${i}"]:checked`);
    if (q) {
      scores[q.value]++;
    }
  }

  // определяем максимум
  let maxType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  let resultText = "";
  if (maxType === "authoritarian") {
    resultText = "<h2>Вы авторитарный менеджер</h2><p>Вы требовательный руководитель, ориентированный на результат. Ваша сила — дисциплина и контроль.</p>";
  } else if (maxType === "democratic") {
    resultText = "<h2>Вы демократический менеджер</h2><p>Вы цените командную работу и вовлекаете сотрудников в процесс принятия решений.</p>";
  } else if (maxType === "strategic") {
    resultText = "<h2>Вы стратегический менеджер</h2><p>Вы мыслите на шаг вперёд, строите долгосрочные планы и анализируете систему.</p>";
  } else if (maxType === "charismatic") {
    resultText = "<h2>Вы харизматичный лидер</h2><p>Вы вдохновляете команду своей энергией и личным примером.</p>";
  }

  document.getElementById("result").innerHTML = resultText;
  document.getElementById("result").style.display = "block";
  window.scrollTo(0,document.body.scrollHeight);
}