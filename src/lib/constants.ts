export interface Project {
  id: number;
  title: string;
  role: string;
  format: string;
  category: string;
  description: string;
  details: string;
  videoUrl?: string;
  gradient: string;
  images: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export const navLinks = [
  { href: "#about", label: "О себе" },
  { href: "#projects", label: "Проекты" },
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакт" },
];

export const contactInfo = {
  phone: "8(920)4180623",
  phoneFormatted: "8 (920) 418-06-23",
  telegram: "@lesyapolyanskikh",
  telegramUrl: "https://t.me/lesyapolyanskikh",
  instagram: "@lespolyanskikh",
  instagramUrl: "https://instagram.com/lespolyanskikh",
  email: "olesya020298@mail.ru",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "«Новогодний переполох»",
    role: "Исполнительный продюсер",
    format: "Полнометражный фильм",
    category: "Кино",
    description:
      "Фильм с блогерами ЦУЕФА — эксклюзивно для VK Video. Масштабный проект с полным продакшн-циклом.",
    details:
      "Координация всего съемочного процесса: от предпродакшна и кастинга до финальной поставки. Работа с блогерами, управление командой, контроль бюджета и тайминга.",
    videoUrl: "https://vkvideo.ru/video-222978630_456241206",
    gradient: "from-red-50 via-orange-50 to-white",
    images: [
      "/images/projects/novogodniy-1.jpeg",
      "/images/projects/novogodniy-2.jpeg",
      "/images/projects/novogodniy-3.jpeg",
      "/images/projects/novogodniy-4.jpeg",
      "/images/projects/novogodniy-5.jpeg",
      "/images/projects/novogodniy-6.jpeg",
      "/images/projects/novogodniy-7.jpeg",
    ],
  },
  {
    id: 2,
    title: "Jony — «Рядом» / «Излей душу»",
    role: "Работа на съемках",
    format: "Музыкальные клипы",
    category: "Музыка",
    description:
      "Интро к новому альбому Jony «Рядом» и клип «Излей душу». Работа на съемочной площадке одного из топовых артистов.",
    details:
      "Участие в организации и проведении съемок. Координация на площадке, работа с командой продакшна, обеспечение бесперебойного процесса.",
    videoUrl: "https://www.youtube.com/watch?v=jPZfSZda3ew",
    gradient: "from-purple-50 via-pink-50 to-white",
    images: [
      "/images/projects/jony-1.jpeg",
      "/images/projects/jony-2.jpeg",
      "/images/projects/jony-3.jpeg",
    ],
  },
  {
    id: 3,
    title: "«ФК Краснодар 10000 джерси»",
    role: "Продюсер",
    format: "Рекламный проект",
    category: "Реклама",
    description:
      "Масштабный проект для WINLINE. Продюсирование полного цикла рекламного контента.",
    details:
      "Продюсирование от идеи до реализации: работа с клиентом, подбор команды, локации, логистика, контроль реализации креативной концепции.",
    videoUrl: "https://www.youtube.com/watch?v=WovuAXW3vKQ",
    gradient: "from-emerald-50 via-teal-50 to-white",
    images: [
      "/images/projects/winline-1.jpeg",
      "/images/projects/winline-2.jpeg",
    ],
  },
  {
    id: 4,
    title: "Avy — «Подруга»",
    role: "Режиссер / Продюсер",
    format: "Музыкальный клип",
    category: "Музыка",
    description:
      "Авторский клип от идеи до финального монтажа. Совмещение ролей режиссера и продюсера.",
    details:
      "Разработка концепции, режиссура, подбор команды и локаций, координация съемочного процесса, контроль постпродакшна.",
    videoUrl: "https://www.youtube.com/watch?v=PQAWJ-4D9p4",
    gradient: "from-rose-50 via-pink-50 to-white",
    images: [
      "/images/projects/avy-1.jpeg",
      "/images/projects/avy-2.jpeg",
      "/images/projects/avy-3.jpeg",
    ],
  },
  {
    id: 5,
    title: "Егор Крид & Toxis — «Cowboys»",
    role: "Работа на съемках",
    format: "Музыкальный клип",
    category: "Музыка",
    description:
      "Работа на съемках клипа Егора Крида и Toxis, а также проект «Музлита» от Gazgolder.",
    details:
      "Участие в организации съемочного процесса на крупных проектах. Координация на площадке, работа в команде продакшна ведущих лейблов.",
    gradient: "from-amber-50 via-orange-50 to-white",
    images: [
      "/images/projects/krid-1.jpeg",
      "/images/projects/krid-2.jpeg",
      "/images/projects/krid-3.jpeg",
      "/images/projects/krid-4.jpeg",
      "/images/projects/krid-5.jpeg",
      "/images/projects/krid-6.jpeg",
    ],
  },
  {
    id: 6,
    title: "Контент для лейбла «Волна»",
    role: "Продюсер",
    format: "Видео-контент",
    category: "Digital",
    description:
      "Видео-контент для соцсетей исполнителей лейбла: Avy, GOSHU, GiGi. Системная работа с артистами.",
    details:
      "Продюсирование серийного контента: планирование, организация съемок, координация с артистами и командой, контроль дедлайнов и качества.",
    gradient: "from-blue-50 via-indigo-50 to-white",
    images: [
      "/images/projects/volna-1.jpeg",
      "/images/projects/volna-2.jpeg",
      "/images/projects/volna-3.jpeg",
      "/images/projects/volna-4.jpeg",
    ],
  },
  {
    id: 7,
    title: "Фотосъемки для брендов",
    role: "Продюсер",
    format: "Fashion / Brand фотосъемки",
    category: "Fashion",
    description:
      "Poison Drop, ZRD, Deel Wear, Polina Manafova Lingerie — продакшн фотосъемок для fashion и jewelry-брендов.",
    details:
      "Полный цикл продюсирования фотосъемок: подбор команды, моделей, локаций, стилистики, координация процесса на площадке.",
    gradient: "from-fuchsia-50 via-purple-50 to-white",
    images: [
      "/images/projects/brands-1.jpeg",
      "/images/projects/brands-2.jpeg",
      "/images/projects/brands-3.jpeg",
      "/images/projects/brands-4.jpeg",
      "/images/projects/brands-5.jpeg",
    ],
  },
  {
    id: 8,
    title: "Подкасты и образовательный контент",
    role: "Продюсер",
    format: "Подкасты / Видеоуроки / Видеокурсы",
    category: "Digital",
    description:
      "Продюсирование подкастов, видеоуроков, видеокурсов и прямых эфиров.",
    details:
      "Организация записи, подбор спикеров и гостей, техническая подготовка, координация монтажа и публикации, работа с графикой и оформлением.",
    gradient: "from-sky-50 via-cyan-50 to-white",
    images: [
      "/images/projects/podcasts-1.jpeg",
      "/images/projects/podcasts-2.jpeg",
      "/images/projects/podcasts-3.jpeg",
      "/images/projects/podcasts-4.jpeg",
      "/images/projects/podcasts-5.jpeg",
    ],
  },
  {
    id: 9,
    title: "Рекламные интеграции для блогеров",
    role: "Продюсер",
    format: "Рекламный контент",
    category: "Блогеры",
    description:
      "Продюсирование рекламного контента и интеграций для блогеров и инфлюенсеров.",
    details:
      "Разработка концепций рекламных интеграций, организация съемок, координация между блогером и брендом, контроль качества контента.",
    gradient: "from-lime-50 via-green-50 to-white",
    images: [
      "/images/projects/bloggers-1.jpeg",
      "/images/projects/bloggers-2.jpeg",
      "/images/projects/bloggers-3.jpeg",
      "/images/projects/bloggers-4.jpeg",
      "/images/projects/bloggers-5.jpeg",
      "/images/projects/bloggers-6.jpeg",
      "/images/projects/bloggers-7.jpeg",
    ],
  },
  {
    id: 10,
    title: "Учебные фильмы и короткие метры",
    role: "Продюсер",
    format: "Короткометражное кино",
    category: "Кино",
    description:
      "Продюсирование учебных фильмов и короткометражных проектов.",
    details:
      "Полный цикл кинопроизводства: от сценария до финального продукта. Организация кастинга, подбор локаций, координация съемочной группы.",
    gradient: "from-slate-50 via-zinc-50 to-white",
    images: [
      "/images/projects/films-1.jpeg",
      "/images/projects/films-2.jpeg",
      "/images/projects/films-3.jpeg",
    ],
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Продюсирование съемок",
    description:
      "Полный цикл организации съемочного процесса — от идеи до финального продукта",
    icon: "🎬",
  },
  {
    id: 2,
    title: "Музыкальные клипы",
    description:
      "Продакшн музыкальных видео: концепция, препродакшн, съемка, пост",
    icon: "🎵",
  },
  {
    id: 3,
    title: "Рекламные проекты",
    description:
      "Рекламные ролики, интеграции и промо-контент для брендов",
    icon: "📺",
  },
  {
    id: 4,
    title: "Digital-контент и Reels",
    description:
      "Видео-контент для социальных сетей, YouTube, VK, Telegram",
    icon: "📱",
  },
  {
    id: 5,
    title: "Fashion и Brand-съемки",
    description:
      "Продюсирование lookbook, каталогов, имиджевых и fashion-съемок",
    icon: "✨",
  },
  {
    id: 6,
    title: "Подкасты и EdTech",
    description:
      "Подкасты, видеоуроки, видеокурсы и прямые эфиры",
    icon: "🎙",
  },
  {
    id: 7,
    title: "Координация команды",
    description:
      "Подбор, управление и синхронизация съемочной группы и подрядчиков",
    icon: "👥",
  },
  {
    id: 8,
    title: "Контроль реализации",
    description:
      "Тайминг, логистика, бюджет и коммуникация между клиентом и командой",
    icon: "🎯",
  },
];

export const advantages: Advantage[] = [
  {
    id: 1,
    title: "Собираю команду под задачу",
    description:
      "Подбираю специалистов точно под проект — от оператора до стилиста. Каждый элемент на своём месте.",
  },
  {
    id: 2,
    title: "Системный и креативный подход",
    description:
      "Веду проект структурно, при этом сохраняю пространство для творчества и нестандартных решений.",
  },
  {
    id: 3,
    title: "Вкус + продакшн-мышление",
    description:
      "Объединяю визуальный вкус с пониманием производственных процессов. Красиво и реализуемо.",
  },
  {
    id: 4,
    title: "Визуал × логистика × результат",
    description:
      "Работаю на стыке креатива, организации и бизнес-задач. Каждый проект — это система.",
  },
  {
    id: 5,
    title: "Понимаю среду",
    description:
      "Говорю на языке артистов, брендов и digital. Легко нахожу общий язык с любой стороной проекта.",
  },
  {
    id: 6,
    title: "Довожу до результата",
    description:
      "От первой идеи до сильного финального продукта. Без потери качества на каждом этапе.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "На площадке",
    category: "Backstage",
    image: "/images/gallery/backstage-1.jpeg",
    span: "row-span-2",
  },
  {
    id: 2,
    title: "Процесс",
    category: "Production",
    image: "/images/gallery/backstage-2.jpeg",
  },
  {
    id: 3,
    title: "Команда",
    category: "Team",
    image: "/images/gallery/backstage-3.jpeg",
  },
  {
    id: 4,
    title: "Настройка света",
    category: "Backstage",
    image: "/images/gallery/backstage-4.jpeg",
    span: "col-span-2",
  },
  {
    id: 5,
    title: "Fashion shoot",
    category: "Fashion",
    image: "/images/gallery/backstage-5.jpeg",
    span: "row-span-2",
  },
  {
    id: 6,
    title: "Клип",
    category: "Music Video",
    image: "/images/gallery/backstage-6.jpeg",
  },
  {
    id: 7,
    title: "Продакшн",
    category: "Production",
    image: "/images/gallery/backstage-7.jpeg",
  },
  {
    id: 8,
    title: "Подкаст",
    category: "Digital",
    image: "/images/gallery/backstage-8.jpeg",
    span: "col-span-2",
  },
];

export const projectTypes = [
  "Музыкальный клип",
  "Рекламный проект",
  "Fashion-съемка",
  "Digital-контент",
  "Подкаст / EdTech",
  "Фильм / Короткий метр",
  "Другое",
];
