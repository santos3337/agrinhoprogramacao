function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


 
let questions = [
  {
    question: "O que é agricultura de precisão?",
    options: ["Uso de técnicas tradicionais", "Uso de GPS e dados para otimizar a produção", "Plantio manual", "Uso de mão de obra infantil"],
    answer: 1
  },
  {
    question: "Qual é o principal grão exportado pelo Brasil?",
    options: ["Trigo", "Milho", "Soja", "Arroz"],
    answer: 2
  },
  {
    question: "O que significa 'pecuária de corte'?",
    options: ["Criação de cavalos", "Criação de aves", "Criação de gado para carne", "Criação de vacas leiteiras"],
    answer: 2
  },
  {
    question: "O que é um agrotóxico?",
    options: ["Fertilizante natural", "Inseticida ou pesticida", "Tipo de solo", "Máquina agrícola"],
    answer: 1
  },
  {
    question: "Qual desses é um benefício do plantio direto?",
    options: ["Aumenta erosão", "Reduz fertilidade", "Conserva o solo", "Remove matéria orgânica"],
    answer: 2
  },
  {
    question: "Qual tecnologia é mais usada para mapear áreas de cultivo?",
    options: ["Drone", "Trator", "Colheitadeira", "Caminhão"],
    answer: 0
  },
  {
    question: "Qual a função do GPS no campo?",
    options: ["Apenas localização", "Entretenimento", "Monitorar lavouras e guiar máquinas", "Irrigação"],
    answer: 2
  },
  {
    question: "O que é agronegócio?",
    options: ["Venda de terras", "Sistema que envolve produção, distribuição e venda de produtos agrícolas", "Criação de gado apenas", "Uso de venenos"],
    answer: 1
  },
  {
    question: "A cana-de-açúcar é usada principalmente para produzir:",
    options: ["Leite", "Biodiesel", "Etanol e açúcar", "Ração animal"],
    answer: 2
  },
  {
    question: "Qual destes animais é comum na pecuária leiteira?",
    options: ["Porco", "Galo", "Vaca", "Cavalo"],
    answer: 2
  },
  {
    question: "O que é um trator?",
    options: ["Animal de carga", "Veículo usado para transporte urbano", "Máquina usada no campo para várias tarefas", "Ferramenta manual"],
    answer: 2
  },
  {
    question: "Qual a importância do solo na agricultura?",
    options: ["Apenas decoração", "Não é importante", "Fonte de nutrientes para as plantas", "Serve só para pisar"],
    answer: 2
  },
  {
    question: "Qual cultura agrícola é destaque no Centro-Oeste do Brasil?",
    options: ["Algodão", "Tomate", "Soja", "Café"],
    answer: 2
  },
  {
    question: "A agroindústria transforma:",
    options: ["Produtos agrícolas em produtos processados", "Tratores em carros", "Animais em sementes", "Máquinas em grãos"],
    answer: 0
  },
  {
    question: "Qual o principal biocombustível derivado do agro brasileiro?",
    options: ["Diesel", "Etanol", "Gás natural", "Querosene"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let state = "start"; // start, quiz, end
let feedback = "";

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(220);

  if (state === "start") {
    textSize(32);
    text("Quiz Agro Farma", width / 2, height / 2 - 50);
    textSize(20);
    text("Clique para começar", width / 2, height / 2);
  } else if (state === "quiz") {
    showQuestion();
  } else if (state === "end") {
    textSize(28);
    text("Fim do Quiz!", width / 2, height / 2 - 60);
    textSize(22);
    text("Pontuação: " + score + " de " + questions.length, width / 2, height / 2);
    text("Clique para jogar novamente", width / 2, height / 2 + 60);
  }
}

function mousePressed() {
  if (state === "start") {
    state = "quiz";
  } else if (state === "end") {
    currentQuestion = 0;
    score = 0;
    state = "quiz";
  }
}

function showQuestion() {
  let q = questions[currentQuestion];
  textSize(24);
  text(q.question, width / 2, 50);

  for (let i = 0; i < q.options.length; i++) {
    fill(180);
    rect(150, 120 + i * 70, 500, 50, 10);
    fill(0);
    text(q.options[i], 400, 145 + i * 70);
  }

  if (feedback !== "") {
    textSize(20);
    text(feedback, width / 2, height - 40);
  }
}

function mouseClicked() {
  if (state === "quiz") {
    let q = questions[currentQuestion];
    for (let i = 0; i < q.options.length; i++) {
      if (
        mouseX > 150 && mouseX < 650 &&
        mouseY > 120 + i * 70 && mouseY < 170 + i * 70
      ) {
        if (i === q.answer) {
          score++;
          feedback = "✅ Resposta correta!";
        } else {
          feedback = "❌ Resposta incorreta.";
        }

        setTimeout(() => {
          currentQuestion++;
          feedback = "";
          if (currentQuestion >= questions.length) {
            state = "end";
          }
        }, 1000);
      }
    }
  }
}