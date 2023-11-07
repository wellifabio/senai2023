const cursos = [
    {
        tipo: "FIC",
        descricao: "Formação Inicial e Continuada",
        img: "https://jaguariuna.sp.senai.br/galeriaImagens/imageViewer.ashx?Url=85373&W=263&H=150&C=S",
        cursos: [
            {
                area: "Automação e Mecatrônica",
                nome: "CONTROLADORES LÓGICOS PROGRAMÁVEIS",
                modalidade: "Presencial",
                cargaHoraria: "60 horas",
                resumo: "O Curso de Aperfeiçoamento Profissional Controladores Lógicos Programáveis tem por objetivo o desenvolvimento de competências relativas à programação e configuração de Controladores Lógicos Programáveis.",
                link: "https://jaguariuna.sp.senai.br/curso/54771/513/controladores-logicos-programaveis"
            },
            {
                area: "Automação e Mecatrônica",
                nome: "DESMISTIFICANDO A INDÚSTRIA 4.0",
                modalidade: "Presencial",
                cargaHoraria: "4 horas",
                resumo: "O curso de Aperfeiçoamento Profissional de Desmistificando a Indústria 4.0 tem por objetivo o desenvolvimento de competências relativas à identificação de conceitos e pilares da indústria 4.0.",
                link: "https://jaguariuna.sp.senai.br/curso/99014/513/desmistificando-a-industria-40"
            },
            {
                area: "Automotiva - Eletricidade",
                nome: "VEÍCULOS ELÉTRICOS E HÍBRIDOS",
                modalidade: "A distância",
                cargaHoraria: "20 horas",
                resumo: "Reconhecer as características dos veículos elétricos e híbridos em relação a tecnologia de funcionamento do motor, bateria e sistemas de recarga, assim como, os procedimentos de manutenção e reparo e os benefícios para a sustentabilidade ambiental",
                link: "https://jaguariuna.sp.senai.br/curso/96083/513/veiculos-eletricos-e-hibridos"
            },
            {
                area: "TI - Software - Tecnologia da Inform - Software",
                nome: "EXCEL BÁSICO",
                modalidade: "A distância",
                cargaHoraria: "20 horas",
                resumo: "O curso Excel Básico tem como objetivo abordar as possibilidades para resolver problemas básicos de cálculos com fórmulas e aplicação de funções.",
                link: "https://jaguariuna.sp.senai.br/curso/92632/513/excel-basico"
            },
            {
                area: "TI - Software - Tecnologia da Inform - Software",
                nome: "COMPETÊNCIA TRANSVERSAL - LÓGICA DE PROGRAMAÇÃO",
                modalidade: "A distância",
                cargaHoraria: "14 horas",
                resumo: "Conhecer os princípios básicos da lógica de programação para poder criar sites, desenvolver games e programar robôs.",
                link: "https://jaguariuna.sp.senai.br/curso/95088/513/competencia-transversal-logica-de-programacao"
            },
            {
                area: "TI - Software - Tecnologia da Inform - Software",
                nome: "EXCEL AVANÇADO",
                modalidade: "Presencial",
                cargaHoraria: "40 horas",
                resumo: "O Curso de Aperfeiçoamento Profissional Excel Avançado tem por objetivo o desenvolvimento de competências para elaborar planilhas automatizadas, utilizando funções aninhadas, controles de formulário, importação de dados, gravação de macros, considerando a organização e proteção dos dados. Criar tabelas e gráficos dinâmicos, subtotais e filtros avançados.",
                link: "https://jaguariuna.sp.senai.br/curso/94033/513/excel-avancado"
            }
        ]
    },
    {
        tipo: "CAI",
        descricao: "Aprendizagem Indústrial",
        img: "https://jaguariuna.sp.senai.br/Img/logo-senai2.png",
        cursos: [
            {
                area: "Eletroeletrônica - Eletricidade",
                nome: "ELETRICISTA DE MANUTENÇÃO ELETROELETRÔNICA",
                modalidade: "Presencial",
                cargaHoraria: "1600 horas",
                resumo: "O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente.",
                link: "https://jaguariuna.sp.senai.br/curso/94691/513/eletricista-de-manutencao-eletroeletronica"
            },
            {
                area: "Metalmecânica - Mecânica",
                nome: "MECÂNICO DE BOMBAS, MOTORES, COMPRESSORES E EQUIPAMENTOS DE TRANSMISSÃO",
                modalidade: "Presencial",
                cargaHoraria: "800 horas",
                resumo: "O curso de Aprendizagem Industrial Mecânico de Bombas, Motores, Compressores e Equipamentos de Transmissão tem por objetivo proporcionar qualificação profissional para a realização da manutenção corretiva e preventiva em conjuntos mecânicos de máquinas e equipamentos, em conformidade às normas e procedimentos de saúde e segurança no trabalho, de meio ambiente e de qualidade.",
                link: "https://jaguariuna.sp.senai.br/curso/82897/513/mecanico-de-bombas-motores-compressores-e-equipamentos-de-transmissao"
            },
            {
                area: "Metalmecânica - Mecânica",
                nome: "MECÂNICO DE USINAGEM",
                modalidade: "Presencial",
                cargaHoraria: "1600 horas",
                resumo: "O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo proporcionar qualificação profissional na execução de atividades relacionadas à usinagem de peças em materiais ferrosos e não ferrosos, seguindo normas e procedimentos técnicos, de manutenção, segurança, meio ambiente e qualidade.",
                link: "https://jaguariuna.sp.senai.br/curso/76298/513/mecanico-de-usinagem"
            }
        ]
    },
    {
        tipo: "TEC",
        descricao: "Cursos Técnicos",
        img: "https://jaguariuna.sp.senai.br/Img/logo-senai2.png",
        cursos: [
            {
                area: "Eletroeletrônica - Eletrônica",
                nome: "TÉCNICO EM ELETRÔNICA",
                modalidade: "Presencial",
                cargaHoraria: "1200 horas",
                resumo: "O Curso Técnico em Eletrônica tem por objetivo habilitar profissionais para desenvolver circuitos eletrônicos, integrar de sistemas eletrônicos e realizar a manutenção de circuitos e sistemas eletrônicos, seguindo normas técnicas, ambientais, de qualidade, de saúde e segurança no trabalho.",
                link: "https://jaguariuna.sp.senai.br/curso/99286/513/tecnico-em-eletronica"
            },
            {
                area: "TI - Software - Tecnologia da Inform - Software",
                nome: "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS",
                modalidade: "Presencial",
                cargaHoraria: "1200 horas",
                resumo: "O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.",
                link: "https://jaguariuna.sp.senai.br/curso/97012/513/tecnico-em-desenvolvimento-de-sistemas"
            }
        ]
    }
]

export default cursos;