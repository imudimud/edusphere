import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';

    i18n.use(initReactI18next).init({
      resources: {
        en: {
          translation: {
            hero: {
              headline: 'EduSphere: World-Class Education in Algeria',
              subheadline: 'Personalized and global learning opportunities',
              joinNow: 'Join Now',
              investorInfo: 'Investor Information',
            },
            valueProps: {
              headline: 'Why EduSphere?',
              internationalStandards: 'International Standards',
              internationalStandardsDesc: 'Curriculum, certifications, instructors',
              personalizedLearning: 'Personalized Learning',
              personalizedLearningDesc: 'Adaptive paths, interactive content, feedback loops',
              globalCommunity: 'Global Community',
              globalCommunityDesc: 'Forums, cross-cultural exchange',
              flexibleLearning: 'Flexible Learning',
              flexibleLearningDesc: 'Mobile-first, offline accessibility',
            },
            featuredCourses: {
              headline: 'Explore Our Courses',
              viewAll: 'View All Courses',
            },
            testimonials: {
              headline: 'What Our Students Say',
            },
            cta: {
              headline: 'Join EduSphere Today',
              signUp: 'Sign Up',
              requestInfo: 'Request Info',
            },
          },
        },
        ar: {
          translation: {
            hero: {
              headline: 'إدوسفير: تعليم عالمي المستوى في الجزائر',
              subheadline: 'فرص تعليمية شخصية وعالمية',
              joinNow: 'انضم الآن',
              investorInfo: 'معلومات المستثمر',
            },
            valueProps: {
              headline: 'لماذا إدوسفير؟',
              internationalStandards: 'معايير دولية',
              internationalStandardsDesc: 'مناهج، شهادات، مدربين',
              personalizedLearning: 'تعليم مخصص',
              personalizedLearningDesc: 'مسارات تكيفية، محتوى تفاعلي، حلقات ردود فعل',
              globalCommunity: 'مجتمع عالمي',
              globalCommunityDesc: 'منتديات، تبادل ثقافي',
              flexibleLearning: 'تعليم مرن',
              flexibleLearningDesc: 'الأولوية للهواتف، إمكانية الوصول دون اتصال',
            },
            featuredCourses: {
              headline: 'استكشف دوراتنا',
              viewAll: 'عرض جميع الدورات',
            },
            testimonials: {
              headline: 'ما يقوله طلابنا',
            },
            cta: {
              headline: 'انضم إلى إدوسفير اليوم',
              signUp: 'سجل',
              requestInfo: 'اطلب معلومات',
            },
          },
        },
        fr: {
          translation: {
            hero: {
              headline: 'EduSphere: Éducation de Classe Mondiale en Algérie',
              subheadline: 'Opportunités d\'apprentissage personnalisées et mondiales',
              joinNow: 'Rejoignez Maintenant',
              investorInfo: 'Informations pour les Investisseurs',
            },
            valueProps: {
              headline: 'Pourquoi EduSphere?',
              internationalStandards: 'Normes Internationales',
              internationalStandardsDesc: 'Programme, certifications, instructeurs',
              personalizedLearning: 'Apprentissage Personnalisé',
              personalizedLearningDesc: 'Parcours adaptatifs, contenu interactif, boucles de rétroaction',
              globalCommunity: 'Communauté Mondiale',
              globalCommunityDesc: 'Forums, échange interculturel',
              flexibleLearning: 'Apprentissage Flexible',
              flexibleLearningDesc: 'Mobile en premier, accessibilité hors ligne',
            },
            featuredCourses: {
              headline: 'Explorez Nos Cours',
              viewAll: 'Voir Tous les Cours',
            },
            testimonials: {
              headline: 'Ce Que Disent Nos Étudiants',
            },
            cta: {
              headline: 'Rejoignez EduSphere Aujourd\'hui',
              signUp: 'S\'inscrire',
              requestInfo: 'Demander des Informations',
            },
          },
        },
      },
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });

    export default i18n;
