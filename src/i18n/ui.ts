export const languages = {
    pt: 'Português',
    en: 'English',
};

export const defaultLang = 'pt';

export const ui = {
    pt: {
        // SEO / Meta
        'site.title': 'Home | Portfólio',

        // Hero Section
        'hero.name': 'Jefferson Silva Caires',
        'hero.role': 'Desenvolvedor Full-Stack',
        'hero.cta': 'Entre em Contato',
        'hero.whatsapp_msg': 'Olá Jefferson! Tudo bem?',

        // About Section
        'about.title': 'Sobre mim',
        'about.text': [
            'Sou um profissional <strong>Full-Stack</strong> com experiência em tecnologias <strong>Front-end</strong> (<strong>Vue</strong> e <strong>Astro</strong>), <strong>Back-end</strong> (<strong>NodeJS</strong> e <strong>Python</strong>), Bancos de Dados (<strong>PostgreSQL</strong> e <strong>MySQL</strong>) e <strong>Cloud AWS</strong> com dois certificados (<strong>AWS AI Practitioner</strong> e <strong>AWS Cloud Practitioner</strong>).',
            'Gosto de buscar novos desafios e aprender novas tecnologias enquanto construo algo novo.',
            'Estou sempre em busca de aprimoramento constante, participando de comunidades e eventos de tecnologia para me manter atualizado com as melhores práticas do mercado.',
            'Meu objetivo é criar soluções impactantes que resolvam problemas reais e melhorem a vida das pessoas através da tecnologia.'
        ],

        // Experience Section
        'exp.title': 'Experiência',

        // Compass UOL
        'exp.compass.role': 'Estagiário em IA',
        'exp.compass.time': '6 meses',
        'exp.compass.modality': 'Remoto',
        'exp.compass.desc.1': 'Vivência em metodologias ágeis (Scrum/Kanban) utilizando Jira para gestão de entregas.',
        'exp.compass.desc.2': 'Criação de Chatbot Jurídico com IA Generativa usando LangChain, arquitetura RAG e AWS Bedrock.',
        'exp.compass.desc.3': 'Desenvolvimento de API Serverless em Python (AWS Lambda) para leitura automática de notas fiscais (OCR).',
        'exp.compass.desc.4': 'Padronização de ambientes de desenvolvimento e produção utilizando Docker.',

        // Informatech
        'exp.informatech.role': 'Estagiário',
        'exp.informatech.time': '6 meses',
        'exp.informatech.modality': 'Presencial',
        'exp.informatech.desc.1': 'Setup e implantação on-site de estações de trabalho e equipamentos no cliente.',
        'exp.informatech.desc.2': 'Manutenção preventiva e corretiva de hardware (diagnóstico, trocas e upgrades).',
        'exp.informatech.desc.3': 'Suporte Técnico Nível 1 focado na resolução de problemas de software e rede.',
        'exp.informatech.desc.4': 'Gestão e controle de inventário de TI, monitorando ativos e periféricos.',

        // Technologies Section
        'tech.title': 'Tecnologias',
        'tech.certs': 'Certificados',
        'tech.stack': 'Stack Principal',
        'tech.exp': 'Experiência',

        // Projects Section
        'projects.title': 'Projetos',
        'projects.github_more': 'Mais projetos em meu GitHub',
        'projects.btn_github': 'Ver no GitHub',
        'projects.btn_production': 'Este projeto está em produção. Clique aqui para saber mais.',

        // Project: GoldenPark
        'proj.golden.title': 'GoldenPark - Tag Pet',
        'proj.golden.desc': 'GoldenParkTag é um sistema para identificação de animais via QR Code. A aplicação vincula tags físicas a perfis digitais, permitindo a visualização pública de dados do pet e contato via WhatsApp, além de um painel administrativo para proprietários gerenciarem seus animais.',

        // Project: Extractor
        'proj.extractor.title': 'Extractor - API de Notas Fiscais',
        'proj.extractor.desc': 'Uma API Serverless desenvolvida em Python para automatizar a extração e estruturação de dados de notas fiscais eletrônicas (NF-e) a partir de imagens.',

        // Project: Themis
        'proj.themis.title': 'Themis - Chatbot Jurídico',
        'proj.themis.desc': 'Um chatbot jurídico feito com RAG, LangChain, Telegram API, AWS Transcribe e AWS Bedrock.',

        // Project: Mikael
        'proj.mikael.title': 'Mikael - LeRobot',
        'proj.mikael.desc': 'Uma mão robótica que joga UNO, desenvolvida com Python, YOLO e OpenCV.',

        // Project: Portfolio
        'proj.portfolio.title': 'Portfólio/Blog',
        'proj.portfolio.desc': 'Meu portfólio pessoal, onde compartilho projetos e experiências.',

        // Contact Section
        'contact.title': 'Entre em contato',

        // Testimonials Section
        'testimonials.title': 'Depoimentos',
        'testimonials': [
            {
                text: 'Valorizo profissionais que facilitam o fluxo de trabalho, e o Jefferson se encaixa perfeitamente nesse perfil. Ele é um desenvolvedor altamente organizado, o que traz previsibilidade e clareza para as atividades que assume. Além do domínio técnico, possui uma excelente capacidade de adaptação. Em situações de mudança de escopo ou incidentes repentinos, ele atua com inteligência e agilidade, mantendo o foco na resolução do problema. Sua ética de trabalho e integridade fazem dele um membro de equipe confiável e colaborativo. Recomendo fortemente seu trabalho.',
                author: 'Aloisio Souza Gonçalves',
                role: 'Scrum Master',
                avatar: '/assets/aloisio.jpg',
            },
            {
                text: 'Conheci o Jefferson num evento de hackathon em Blumenau, o que já mostra um grande interesse em fazer network e se desafiar no mundo tech. Tem um conhecimento excelente de lógica de programação para resolver problemas, mostrou um excelente domínio em python, banco de dados, docker, dentre outras necessidades que tínhamos no desafio. Certeza que será um profissional exemplar por onde passar, recomendo bastante!',
                author: 'Patrick Monteiro',
                role: 'Vue.js Specialist | Senior Front-end',
                avatar: '/assets/patrick.jpg',
            },
            {
                text: 'É uma pessoa extremamente comprometida, organizada e colaborativa. Sempre demonstra disposição em ajudar o grupo e buscar as melhores soluções. Profissionalmente, o Jeff é dedicado, responsável e possui uma facilidade incrível em se comunicar e trabalhar em equipe',
                author: 'Lucas Franco da Silva',
                role: 'Desenvolvedor de software',
                avatar: '/assets/lucas.jpg',
            },
            {
                text: 'Tive o prazer de acompanhar o Jefferson durante seu percurso acadêmico e vi de perto seu crescimento e dedicação. Ele se destacou por sua curiosidade intelectual, capacidade de aprender rapidamente e aplicar o conhecimento de forma prática e relevante. Em todos os momentos, demonstrou uma postura colaborativa, com excelente comunicação e espírito de equipe. Jefferson é proativo e tem uma forte orientação para resultados — qualidades que o tornam preparado para enfrentar novos desafios e gerar impacto positivo em qualquer ambiente profissional. Além disso, ele mostra integridade, ética e vontade de fazer a diferença. Tenho plena confiança de que Jefferson continuará construindo uma trajetória de sucesso e recomendo-o com entusiasmo para novas oportunidades nas quais possa aplicar seu talento.',
                author: 'Bruno Utiyama',
                role: 'Professor / Engenheiro',
                avatar: '/assets/bruno.jpg',
            },
        ],
    },

    en: {
        // SEO / Meta
        'site.title': 'Home | Portfolio',

        // Hero Section
        'hero.name': 'Jefferson Silva Caires',
        'hero.role': 'Full-Stack Developer',
        'hero.cta': 'Get in Touch',
        'hero.whatsapp_msg': 'Hello Jefferson! How are you?',

        // About Section
        'about.title': 'About Me',
        'about.text': [
            'I am a <strong>Full-Stack</strong> professional experienced in <strong>Front-end</strong> technologies (<strong>Vue</strong> and <strong>Astro</strong>), <strong>Back-end</strong> (<strong>NodeJS</strong> and <strong>Python</strong>), Databases (<strong>PostgreSQL</strong> and <strong>MySQL</strong>), and <strong>AWS Cloud</strong>, holding two certifications (<strong>AWS AI Practitioner</strong> and <strong>AWS Cloud Practitioner</strong>).',
            'I enjoy seeking new challenges and learning new technologies while building something new.',
            'I am always looking for constant improvement, participating in communities and technology events to keep up to date with the best practices in the market.',
            'My goal is to create impactful solutions that solve real problems and improve people\'s lives through technology.'
        ],

        // Experience Section
        'exp.title': 'Experience',

        // Compass UOL
        'exp.compass.role': 'AI Intern',
        'exp.compass.time': '6 months',
        'exp.compass.modality': 'Remote',
        'exp.compass.desc.1': 'Experience in agile methodologies (Scrum/Kanban) using Jira for delivery management.',
        'exp.compass.desc.2': 'Creation of a Legal Chatbot with Generative AI using LangChain, RAG architecture, and AWS Bedrock.',
        'exp.compass.desc.3': 'Development of a Serverless API in Python (AWS Lambda) for automated invoice reading (OCR).',
        'exp.compass.desc.4': 'Standardization of development and production environments using Docker.',

        // Informatech
        'exp.informatech.role': 'IT Intern',
        'exp.informatech.time': '6 months',
        'exp.informatech.modality': 'On-site',
        'exp.informatech.desc.1': 'Setup and on-site deployment of workstations and equipment at client sites.',
        'exp.informatech.desc.2': 'Preventive and corrective hardware maintenance (diagnosis, replacements, and upgrades).',
        'exp.informatech.desc.3': 'Level 1 Technical Support focused on resolving software and network issues.',
        'exp.informatech.desc.4': 'Management and control of IT inventory, monitoring assets and peripherals.',

        // Technologies Section
        'tech.title': 'Technologies',
        'tech.certs': 'Certifications',
        'tech.stack': 'Main Stack',
        'tech.exp': 'Experience',

        // Projects Section
        'projects.title': 'Projects',
        'projects.github_more': 'More projects on my GitHub',
        'projects.btn_github': 'View on GitHub',
        'projects.btn_production': 'This project is live. Click here to learn more.',

        // Project: GoldenPark
        'proj.golden.title': 'GoldenPark - Pet Tag',
        'proj.golden.desc': 'GoldenParkTag is a pet identification system via QR Code. The application links physical tags to digital profiles, allowing public viewing of pet data and contact via WhatsApp, plus an admin panel for owners to manage their animals.',

        // Project: Extractor
        'proj.extractor.title': 'Extractor - Invoice API',
        'proj.extractor.desc': 'A Serverless API developed in Python to automate the extraction and structuring of electronic invoice (NF-e) data from images.',

        // Project: Themis
        'proj.themis.title': 'Themis - Legal Chatbot',
        'proj.themis.desc': 'A legal chatbot built with RAG, LangChain, Telegram API, AWS Transcribe, and AWS Bedrock.',

        // Project: Mikael
        'proj.mikael.title': 'Mikael - LeRobot',
        'proj.mikael.desc': 'A robotic hand that plays UNO, developed with Python, YOLO, and OpenCV.',

        // Project: Portfolio
        'proj.portfolio.title': 'Portfolio/Blog',
        'proj.portfolio.desc': 'My personal portfolio, where I share projects and experiences.',

        // Contact Section
        'contact.title': 'Get in Touch',

        // Testimonials Section
        'testimonials.title': 'Testimonials',
        'testimonials': [
            {
                text: 'I value professionals who facilitate workflow, and Jefferson fits this profile perfectly. He is a highly organized developer, which brings predictability and clarity to the activities he takes on. Beyond technical mastery, he has excellent adaptability. In situations of scope change or sudden incidents, he acts with intelligence and agility, keeping focus on problem resolution. His work ethic and integrity make him a reliable and collaborative team member. I strongly recommend his work.',
                author: 'Aloisio Souza Gonçalves',
                role: 'Scrum Master',
                avatar: '/assets/aloisio.jpg',
            },
            {
                text: 'I met Jefferson at a hackathon event in Blumenau, which already shows a great interest in networking and challenging himself in the tech world. He has excellent knowledge of programming logic to solve problems, showed excellent mastery in Python, databases, Docker, among other needs we had in the challenge. I am sure he will be an exemplary professional wherever he goes, I highly recommend him!',
                author: 'Patrick Monteiro',
                role: 'Vue.js Specialist | Senior Front-end',
                avatar: '/assets/patrick.jpg',
            },
            {
                text: 'He is an extremely committed, organized, and collaborative person. He always demonstrates willingness to help the group and seek the best solutions. Professionally, Jeff is dedicated, responsible, and has an incredible ease in communicating and working in a team.',
                author: 'Lucas Franco da Silva',
                role: 'Software Developer',
                avatar: '/assets/lucas.jpg',
            },
            {
                text: 'I had the pleasure of following Jefferson during his academic journey and saw his growth and dedication up close. He stood out for his intellectual curiosity, ability to learn quickly, and apply knowledge in a practical and relevant way. At all times, he demonstrated a collaborative posture, with excellent communication and team spirit. Jefferson is proactive and has a strong results orientation — qualities that make him prepared to face new challenges and generate positive impact in any professional environment. Furthermore, he shows integrity, ethics, and a desire to make a difference. I have full confidence that Jefferson will continue building a successful trajectory and I recommend him with enthusiasm for new opportunities where he can apply his talent.',
                author: 'Bruno Utiyama',
                role: 'Professor / Engineer',
                avatar: '/assets/bruno.jpg',
            },
        ],
    },
} as const;