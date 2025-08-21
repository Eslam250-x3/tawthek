import React from 'react';
import { World, ChallengeType } from './types';
import { BookOpenIcon, FilesIcon, GlobeIcon, UsersIcon, PenSquareIcon, ScaleIcon, PuzzleIcon } from './components/icons';

export const GAME_WORLDS: World[] = [
  {
    id: 1,
    title: 'العالم الأول: قلعة المتن',
    description: 'إتقان القواعد الأساسية لتوثيق المراجع أثناء الكتابة في متن النص.',
    color: 'bg-amber-600',
    icon: <BookOpenIcon className="w-12 h-12" />,
    stages: [
      {
        id: 101,
        title: 'المرحلة 1: أساسيات الأمانة العلمية',
        icon: <ScaleIcon className="w-8 h-8" />,
        zones: [
          {
            id: 10101,
            title: 'مفهوم التوثيق',
            description: 'مقدمة تفاعلية عن أهمية التوثيق.',
            learning: "التوثيق هو إثبات مصادر المعلومات وإرجاعها إلى أصحابها توخيًا للأمانة العلمية، واعترافًا بجهود الآخرين وحقوقهم العلمية.",
            challenge: {
              type: ChallengeType.MultipleChoice,
              question: 'ما هي الفائدة الرئيسية للتوثيق في البحث العلمي؟',
              choices: [
                { text: 'جعل النص يبدو أطول', isCorrect: false },
                { text: 'إعطاء المصداقية للبحث واحترام حقوق المؤلفين', isCorrect: true },
                { text: 'إظهار أنك قرأت الكثير من الكتب', isCorrect: false },
              ]
            }
          },
          {
            id: 10102,
            title: 'وحش الانتحال',
            description: 'تحدي يقوم فيه اللاعب بإعادة صياغة جُمل لتجنب الانتحال.',
            learning: "الانتحال هو عرض عملك المنشور سابقًا على أنه عمل جديد. لتجنبه، يجب عليك إعادة الصياغة لأفكار الآخرين بلغتك الخاصة، أو الاقتباس المباشر لأفكارهم والإشارة إلى ذلك أثناء التوثيق.",
            challenge: {
              type: ChallengeType.MultipleChoice,
              question: 'أي مما يلي لا يعتبر من الاستثناءات المسموح بها في الانتحال الذاتي؟',
              choices: [
                { text: 'نشر رسائل الماجستير والدكتوراه في مقال علمي.', isCorrect: false },
                { text: 'نشر نفس المقال في مجلتين مختلفتين بنفس الوقت دون إشارة.', isCorrect: true },
                { text: 'مقال يتضمن ملخص بحث تم نشره في مؤتمر.', isCorrect: false },
              ]
            }
          },
          {
            id: 10103,
            title: 'جسر التطابق',
            description: 'لعبة مطابقة للتأكد من أن كل توثيق في المتن له مرجع مقابل.',
            learning: 'يجب التأكد من تطابق أسماء المؤلفين وتواريخ النشر في قائمة المراجع بحيث تتطابق مع تلك التوثيقات داخل المتن، باستثناء الاتصالات الشخصية التي توثق داخل المتن فقط.',
            challenge: {
                type: ChallengeType.MultipleChoice,
                question: 'أي نوع من المصادر يتم توثيقه في متن النص فقط ولا يدرج في قائمة المراجع؟',
                choices: [
                    { text: 'مقالات المجلات العلمية', isCorrect: false },
                    { text: 'الكتب المنشورة', isCorrect: false },
                    { text: 'الاتصالات الشخصية (مثل البريد الإلكتروني)', isCorrect: true },
                ]
            }
          }
        ]
      },
      {
        id: 102,
        title: 'المرحلة 2: إتقان نظام (المؤلف-التاريخ)',
        icon: <UsersIcon className="w-8 h-8" />,
        zones: [
          {
            id: 10201,
            title: 'توثيق البداية والنهاية',
            description: 'التفريق بين التوثيق السياقي والتوثيق بين قوسين.',
            learning: "التوثيق بداية الاقتباس (السياقي) يظهر فيه اسم المؤلف داخل السرد النصي، بينما يظهر التاريخ بين قوسين. مثال: أشار كوهلر (2016) إلى... أما التوثيق نهاية الاقتباس فيظهر فيه المؤلف والتاريخ بين قوسين. مثال: (Koehler, 2016).",
            challenge: {
                type: ChallengeType.MultipleChoice,
                question: 'أي من الخيارات التالية مثال على توثيق بداية الاقتباس (توثيق سياقي)؟',
                choices: [
                    { text: '...(زهران، ٢٠٠٥).', isCorrect: false },
                    { text: 'وأوضح زهران (٢٠٠٥) أن هناك أبعاد متعددة.', isCorrect: true },
                    { text: '(زهران، ٢٠٠٥) أوضح أن هناك أبعاد متعددة.', isCorrect: false },
                ]
            }
          },
           {
            id: 10202,
            title: 'تحدي عدد المؤلفين',
            description: 'التوثيق الصحيح حسب عدد المؤلفين.',
            learning: "لعمل بمؤلف واحد أو اثنين، اكتب اسم (اسمي) العائلة في كل توثيق. لعمل بثلاثة مؤلفين أو أكثر، اذكر اسم عائلة المؤلف الأول متبوعًا بـ 'وآخرون.' من أول توثيق. مثال: (القحطاني وآخرون، ٢٠١٩).",
            challenge: {
                type: ChallengeType.MultipleChoice,
                question: 'كيف توثق عملاً للمؤلفين "سالم وعلي وخالد وغادة" عام 2021 لأول مرة في النص؟',
                choices: [
                    { text: '(سالم، وعلي، وخالد، وغادة، 2021)', isCorrect: false },
                    { text: '(سالم وآخرون، 2021)', isCorrect: true },
                    { text: '(سالم، 2021)', isCorrect: false },
                ]
            }
          },
          {
            id: 10203,
            title: 'لغز المؤلف المجهول',
            description: 'توثيق الأعمال التي لا يُعرف مؤلفها.',
            learning: 'إذا كان مؤلف العمل غير معروف، استخدم عنوان العمل بدلًا من اسم المؤلف. إذا كان العنوان لكتاب فضعه بخط مائل، وإذا كان لمقال فضعه بين علامتي اقتباس. مثال لكتاب: (مهارات بينشخصية، ۲۰۱۹). مثال لمقال: ("إدراك الذاكرة الحسية"، ٢٠١٨).',
            challenge: {
                type: ChallengeType.MultipleChoice,
                question: 'كيف توثق كتاباً بدون مؤلف بعنوان "مهارات التواصل" نشر عام 2020؟',
                choices: [
                    { text: '("مهارات التواصل"، 2020)', isCorrect: false },
                    { text: '(مؤلف مجهول، 2020)', isCorrect: false },
                    { text: '(مهارات التواصل، 2020)', isCorrect: true },
                ]
            }
          },
        ]
      },
      {
        id: 103,
        title: 'المرحلة 3: فن الاقتباس',
        icon: <PenSquareIcon className="w-8 h-8" />,
        zones: [
            {
                id: 10301,
                title: 'الاقتباس القصير (أقل من 40 كلمة)',
                description: 'لغز لترتيب علامات الترقيم والتوثيق بشكل صحيح.',
                learning: 'الاقتباس القصير (أقل من 40 كلمة) يوضع بين علامتي اقتباس مزدوجة (""). يتم إدراج توثيق المرجع كاملاً (المؤلف، السنة، رقم الصفحة) في نفس الجملة. مثال: "..." (مجاور، ٢٠١٦، ص ١٥).',
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'أين يجب وضع النقطة النهائية للجملة في الاقتباس القصير؟',
                    choices: [
                        { text: 'قبل علامة الاقتباس الختامية.', isCorrect: false },
                        { text: 'بعد قوس التوثيق الختامي.', isCorrect: true },
                        { text: 'قبل قوس التوثيق الافتتاحي.', isCorrect: false },
                    ]
                }
            },
            {
                id: 10302,
                title: 'الاقتباس الطويل (40 كلمة فأكثر)',
                description: 'تحدي تنسيقي لضبط المسافة البادئة للاقتباسات الطويلة.',
                learning: 'الاقتباس الطويل (40 كلمة أو أكثر) لا يوضع بين علامتي اقتباس. بدلاً من ذلك، يبدأ في سطر جديد مع مسافة بادئة (0.5 بوصة) من الهامش الأيسر. التوثيق يأتي بعد علامة الترقيم النهائية.',
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'ما هي الميزة الرئيسية لتنسيق الاقتباس الطويل؟',
                    choices: [
                        { text: 'يوضع بين علامتي اقتباس مفردة.', isCorrect: false },
                        { text: 'يكتب بخط مائل.', isCorrect: false },
                        { text: 'يبدأ بسطر جديد مع مسافة بادئة لكامل الاقتباس.', isCorrect: true },
                    ]
                }
            }
        ]
      },
    ],
  },
  {
    id: 2,
    title: 'العالم الثاني: أرشيف المراجع',
    description: 'تعلم القواعد الكاملة لبناء قائمة المراجع في نهاية البحث.',
    color: 'bg-sky-600',
    icon: <FilesIcon className="w-12 h-12" />,
    stages: [
       {
        id: 201,
        title: 'المرحلة 4: أسس قائمة المراجع',
        icon: <PuzzleIcon className="w-8 h-8" />,
        zones: [
          {
            id: 20101,
            title: 'العناصر الأربعة الأساسية',
            description: 'مهمة تجميع العناصر الأربعة للمرجع.',
            learning: "يتكون كل مرجع في قائمة المراجع من أربعة عناصر أساسية: المؤلف (من المسؤول عن هذا العمل؟)، التاريخ (متى تم نشر هذا العمل؟)، العنوان (ما اسم هذا العمل؟)، والمصدر (أين يمكنني استرداد هذا العمل؟).",
            challenge: {
                type: ChallengeType.MultipleChoice,
                question: "ما هو العنصر الأول في معظم المراجع بقائمة المراجع؟",
                choices: [
                    {text: "العنوان", isCorrect: false},
                    {text: "المصدر", isCorrect: false},
                    {text: "المؤلف", isCorrect: true},
                    {text: "التاريخ", isCorrect: false},
                ]
            }
          },
          {
            id: 20102,
            title: 'التعامل مع المعلومات المفقودة',
            description: 'لعبة ألغاز لاختيار التنسيق الصحيح عند فقدان بعض المعلومات.',
            learning: "عندما تكون بعض عناصر المرجع مفقودة، هناك قواعد محددة. إذا كان التاريخ مفقودًا، نستخدم الاختصار (د.ت.) أو (n.d.). إذا كان المؤلف مفقودًا، يبدأ المرجع بالعنوان.",
            challenge: {
                type: ChallengeType.MultipleChoice,
                question: 'ماذا تستخدم في قائمة المراجع لعمل ليس له تاريخ نشر؟',
                choices: [
                    { text: 'تترك المكان فارغًا', isCorrect: false },
                    { text: '(غير معروف)', isCorrect: false },
                    { text: '(د.ت.)', isCorrect: true },
                    { text: 'تكتب تاريخ اليوم', isCorrect: false },
                ]
            }
          }
        ]
      },
      {
        id: 202,
        title: 'المرحلة 5: تنظيم القائمة',
        icon: <ScaleIcon className="w-8 h-8" />,
        zones: [
            {
                id: 20201,
                title: 'الترتيب الهجائي',
                description: 'لعبة فرز سريعة لوضع المراجع بالترتيب الهجائي الصحيح.',
                learning: "يتم ترتيب الأعمال في قائمة المراجع ترتيبًا هجائيًا حسب الاسم الأخير للمؤلف (اللقب). في حالة وجود أعمال لنفس المؤلف، يتم ترتيبها زمنيًا من الأقدم إلى الأحدث.",
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'أي مرجع يجب أن يأتي أولاً في قائمة المراجع؟',
                    choices: [
                        { text: 'الزهراني، عبدالله. (2019).', isCorrect: false },
                        { text: 'الشمراني، سالم. (2020).', isCorrect: true },
                        { text: 'القحطاني، محمد. (2018).', isCorrect: false },
                    ]
                }
            },
            {
                id: 20202,
                title: 'المسافة البادئة المعلقة',
                description: 'لغز تنسيقي لتطبيق المسافة البادئة المعلقة بشكل صحيح.',
                learning: 'في قائمة المراجع، كل مرجع يجب أن يكون له مسافة بادئة معلقة. هذا يعني أن السطر الأول من المرجع يكون بمحاذاة الهامش الأيسر، والأسطر التالية تكون مزاحة للداخل.',
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'ماذا تعني "المسافة البادئة المعلقة" في قائمة المراجع؟',
                    choices: [
                        { text: 'السطر الأول فقط مزاح للداخل.', isCorrect: false },
                        { text: 'كل الأسطر بعد السطر الأول مزاحة للداخل.', isCorrect: true },
                        { text: 'كامل المرجع مزاح للداخل.', isCorrect: false },
                    ]
                }
            }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'العالم الثالث: عوالم المصادر المتخصصة',
    description: 'تطبيق عملي لأمثلة توثيق أنواع المراجع المختلفة.',
    color: 'bg-emerald-600',
    icon: <GlobeIcon className="w-12 h-12" />,
    stages: [
        {
        id: 301,
        title: 'المرحلة 6: الأعمال النصية',
        icon: <BookOpenIcon className="w-8 h-8" />,
        zones: [
            {
                id: 30101,
                title: 'مقاطعة الدوريات العلمية',
                description: 'توثيق مقالات المجلات العلمية.',
                learning: "لتوثيق مقال في مجلة علمية، التنسيق هو: المؤلف، أ. (سنة النشر). عنوان المقال. *اسم الدورية، رقم المجلد*(رقم العدد)، أرقام الصفحات. https://doi.org/xxxx. لاحظ أن اسم الدورية ورقم المجلد يكونان بخط مائل.",
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: "في مرجع مقال مجلة، أي جزء يجب أن يكون مكتوبًا بخط مائل؟",
                    choices: [
                        {text: "عنوان المقال فقط", isCorrect: false},
                        {text: "اسم الدورية ورقم المجلد", isCorrect: true},
                        {text: "اسم المؤلف", isCorrect: false},
                    ]
                }
            },
            {
                id: 30102,
                title: 'مملكة الكتب',
                description: 'توثيق كتاب مؤلف.',
                learning: "لتوثيق كتاب، التنسيق هو: المؤلف، أ. (سنة النشر). *عنوان الكتاب بخط مائل* (الطبعة إذا لم تكن الأولى). الناشر.",
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'عند توثيق كتاب، أي جزء من المرجع يكتب بخط مائل؟',
                    choices: [
                        { text: 'اسم المؤلف', isCorrect: false },
                        { text: 'سنة النشر', isCorrect: false },
                        { text: 'عنوان الكتاب', isCorrect: true },
                        { text: 'اسم الناشر', isCorrect: false },
                    ]
                }
            }
        ]
        },
        {
        id: 302,
        title: 'المرحلة 7: الوسائط عبر الإنترنت',
        icon: <GlobeIcon className="w-8 h-8" />,
        zones: [
            {
                id: 30201,
                title: 'صفحات الويب',
                description: 'توثيق صفحة ويب على موقع إلكتروني.',
                learning: "لتوثيق صفحة ويب، التنسيق هو: المؤلف، أ. (سنة، شهر يوم). *عنوان الصفحة بخط مائل*. اسم الموقع. رابط الصفحة. إذا كان المؤلف هو نفسه اسم الموقع، يتم حذف اسم الموقع.",
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'عند توثيق صفحة ويب، متى يجب حذف اسم الموقع من المرجع؟',
                    choices: [
                        { text: 'دائماً', isCorrect: false },
                        { text: 'إذا كان المؤلف والموقع لهما نفس الاسم', isCorrect: true },
                        { text: 'أبداً', isCorrect: false },
                    ]
                }
            },
            {
                id: 30202,
                title: 'تغريدة على تويتر',
                description: 'توثيق منشور على وسائل التواصل الاجتماعي.',
                learning: "لتوثيق تغريدة: المؤلف، أ. [@اسم المستخدم]. (سنة، شهر يوم). *بداية التغريدة (حتى 20 كلمة) بخط مائل* [تغريدة]. تويتر. رابط التغريدة.",
                challenge: {
                    type: ChallengeType.MultipleChoice,
                    question: 'عند توثيق تغريدة على تويتر، ماذا يوضع بين القوسين المربعين []؟',
                    choices: [
                        { text: 'اسم المستخدم', isCorrect: false },
                        { text: 'وصف للمحتوى مثل [صورة مرفقة] أو [تغريدة]', isCorrect: true },
                        { text: 'رابط التغريدة', isCorrect: false },
                    ]
                }
            }
        ]
        }
    ]
  }
];
