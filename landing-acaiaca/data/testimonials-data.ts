export interface TestimonialData {
  id: number;
  rating: number;
  studentName: string;
  testimonial: string[];
  image: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    rating: 5,
    studentName: "Pedro Miranda",
    testimonial: [
      "Quero deixar aqui meu depoimento sobre o professor Rafael, que foi meu professor de Filosofia na Educafro.",
      "Ele e um professor incrivel! Muito didatico, consegue explicar conteudos que parecem dificeis de um jeito simples e facil de entender. Ao mesmo tempo, as aulas dele eram muito divertidas, o que fazia a gente realmente se envolver e gostar de aprender.",
      "Aprendi muita coisa com ele, nao so para o Enem que me ajudou muito mas tambem para a vida, tanto na parte academica quanto pessoal. Ele sempre incentivou o pensamento critico, fazia a gente refletir, questionar e enxergar o mundo de uma forma mais consciente.",
      "Hoje levo ele nao so como um excelente professor, mas tambem como um amigo. Sou muito grato por tudo que ele me ensinou e por toda motivacao que ele transmite em cada aula.",
      "Obrigado por ter feito parte da minha caminhada e por ter contribuido tanto para minha formacao.",
    ],
    image: "/testimonials/pedromiranda.png",
  },
  {
    id: 2,
    rating: 5,
    studentName: "Marcus Leandro",
    testimonial: [
      "Meu nome e Marcus Leandro, estudante de Fisica na UFMG.",
      "Conheci o professor Rafael em 2023 no cursinho popular Educafro, e suas aulas fizeram toda a diferenca na minha aprovacao. O Rafael possui um excelente dominio de sua area e uma grande capacidade de transmitir conhecimento de maneira clara, direta e adaptada a realidade do aluno.",
      "Desde o primeiro contato, seu carisma facilitou a conexao com a turma, mantendo todos engajados e motivados.",
      "Alem de sua postura amigavel, ele possui uma forte presenca em sala, estabelecendo limites claros de respeito e dever agindo com a firmeza necessaria. Ele sempre demonstrou uma excelente relacao com os colegas e estava sempre disposto a ajudar.",
    ],
    image: "/testimonials/marcusleandro.png",
  },
  {
    id: 3,
    rating: 5,
    studentName: "Heberth",
    testimonial: [
      "Tive o privilégio de fazer parte da primeira turma do Rafael em 2022, no núcleo Águia do Educafro - cursinho comunitário preparatório para o ENEM. ",
      "Foi uma excelente experiência, as aulas eram bem preparadas e sempre conectadas com a atualidade, confesso que ciências humanas não são meu forte, porém a clareza e leveza com qual as aulas eram conduzidas me fizeram compreender melhor a filosofia e também a quebrar estigmas pessoais quanto às ciências humanas. ",
      "Sem dúvidas certamente irá se repetir com os novos alunos e eles também serão imersos, por se tratar de um exímio professor.",
    ],
    image: "/testimonials/Heberth.png",
  },
];
