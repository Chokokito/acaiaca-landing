export interface TeacherData {
  id: number;
  numberLabel: string;
  subject: string;
  name: string;
  description: string;
  curriculumTitle: string;
  curriculum: string[];
  image: string;
  ctaLabel: string;
  ctaHref?: string;
}

export const teachersData: TeacherData[] = [
  {
    id: 1,
    numberLabel: "01",
    subject: "Filosofia & Ética",
    name: "Rafael de Paula",
    description:
      "Mestre em Filosofia com estudos voltados para Ética e Filosofia da Mente. Experiência na preparação para o Enem como professor e coordenador pedagógico.",
    curriculumTitle: "Currículo",
    curriculum: [
      "Mestrado em Filosofia",
      "Especialização em Ética e Filosofia da Mente",
      "Professor e coordenador pedagógico de cursinho",
      "Preparação para o Enem",
    ],
    image: "/teachers/rafael.png",
    ctaLabel: "GARANTIR MINHA VAGA",
  },
  {
    id: 2,
    numberLabel: "02",
    subject: "Português & Literatura",
    name: "Erik Magno",
    description:
      "Acredita no ensino como ferramenta de transformação social, estimulando o pensamento crítico e o protagonismo dos estudantes.",
    curriculumTitle: "Currículo",
    curriculum: [
      "Licenciatura em Letras - Português pela UFMG",
      "Diretor do cursinho Educafro Minas - Núcleo Águia",
      "Professor de Literatura e Língua Portuguesa",
      "Monitor na Escola da Serra",
    ],
    image: "/teachers/erik.png",
    ctaLabel: "GARANTIR MINHA VAGA",
  },
  {
    id: 3,
    numberLabel: "03",
    subject: "História & Pedagogia",
    name: "Cristiano Paulo",
    description:
      "Comprometido com a educação de qualidade, a valorização da diversidade e a promoção de oportunidades por meio do conhecimento.",
    curriculumTitle: "Currículo",
    curriculum: [
      "Pedagogia - Centro Universitário Isabela Hendrix",
      "Graduação em História - Universidade Cruzeiro do Sul",
      "Formação em étnico-racialidade e cultura afro-brasileira",
      "Coordenador pedagógico com +5 mil alunos formados",
    ],
    image: "/teachers/Cristiano.png",
    ctaLabel: "GARANTIR MINHA VAGA",
  },
  {
    id: 4,
    numberLabel: "04",
    subject: "Ciências Biológicas",
    name: "Luiza",
    description:
      "Mestranda em Imunologia no ICB/UFMG, investigando alvos terapêuticos em doenças negligenciadas. Aulas dinâmicas voltadas à compreensão crítica da ciência.",
    curriculumTitle: "Currículo",
    curriculum: [
      "Ciências Biológicas pela UFMG",
      "Mestranda em Imunologia - ICB/UFMG",
      "Professora no Pré-vestibular Solidarie",
      "Monitora no COLTEC e Colégio Santo Antônio",
    ],
    image: "/teachers/Luiza.png",
    ctaLabel: "GARANTIR MINHA VAGA",
  },
];
