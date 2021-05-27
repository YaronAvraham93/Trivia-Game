const questionData = [
    {
        id:15,
        question:"?בכמה מלחמות ומבצעים השתתפה ישראל מאז שהוקמה",
        answers: [
          {
            text: "8",
            correct: false,
          },
          {
            text: "10",
            correct: false,
          },
          {
            text: "14",
            correct: true,
          },
          {
            text: "16",
            correct: false,
          },
        ],
      },
    {
      id: 1,
      question: "?מה היא עיר הבירה של בלארוס",
      answers: [
        {
          text: "מינסק",
          correct: true,
        },
        {
          text: "וילנה",
          correct:false ,
        },
        {
          text: "ריגה",
          correct: false,
        },
        {
          text: "הלסינקי",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "?איזו מדינה מבין הבאות גדולה יותר בשטח שלה",
      answers: [
        {
          text: "ירדן",
          correct: false,
        },
        {
          text: "מסוריה",
          correct: false,
        },
        {
          text: "עיראק",
          correct: false,
        },
        {
          text: "מצרים",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "?היכן הומצא משחק הלגו",
      answers: [
        {
          text: "שוודיה ",
          correct: false,
        },
        {
          text: "פינלנד",
          correct: false,
        },
        {
          text: "בלגיה",
          correct: false,
        },
        {
          text: "דנמרק ",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "?מה הוא שיא העולם בריצת 100 מטר",
      answers: [
        {
          text: "9.54",
          correct: false,
        },
        {
          text: "9.58",
          correct: true,
        },
        {
          text: "9.61",
          correct: false,
        },
        {
          text: "9.67",
          correct: false,
        },
      ],
    },
    {
      id:5,
      question: "?כיצד מכונה מצב של תיקו בשחמט",
      answers: [
        {
          text: "פל",
          correct: false,
        },
        {
          text: "פט",
          correct: true,
        },
        {
          text: "שח",
          correct: false,
        },
        {
          text: "שחפט",
          correct: false,
        },
      ],
    },
    {
      id:6,
      question: "?על פי המקרא מי מצא את המלוכה כשהלך לחפש אתונות",
      answers: [
        {
          text: "שאול",
          correct: true,
        },
        {
          text: "דויד",
          correct: false,
        },
        {
          text: "שלמה",
          correct: false,
        },
        {
          text: "משה",
          correct: false,
        },
      ],
    },
    {
      id:7,
      question:"?באיזו מדינה נמצאת העיר אוסלו",
      answers: [
        {
          text: "שוודיה",
          correct: false,
        },
        {
          text: "דנמרק",
          correct: false,
        },
        {
          text: "נורווגיה",
          correct: false,
        },
        {
          text: "הונגריה",
          correct: true,
        },
      ],
    },
    {
      id:8,
      question:"?היכן נמצא עמק הסיליקון בארהב",
      answers: [
        {
          text: "אורלנדו",
          correct: false,
        },
        {
          text: "ניו יורק",
          correct: false,
        },
        {
          text: "סן פרנסיסקו",
          correct: true,
        },
        {
          text: "מיניאפוליס",
          correct: false,
        },
      ],
    },
    {
      id:9,
      question:"? בסיפור דירה להשכיר, איזו חיה שוכרת לבסוף את הדירה",
      answers: [
        {
          text: "נמלה",
          correct: false,
        },
        {
          text: "יונה",
          correct: true,
        },
        {
          text: "חפרפרת",
          correct: false,
        },
        {
          text: "ארנבת",
          correct: false,
        },
      ],
    },
    {
      id:9,
      question:"?איזה אגוזים הם המרכיב העיקרי בממרח נוטלה",
      answers: [
        {
          text: "אגוזי לוז",
          correct: false,
        },
        {
          text: "אגוזי מלך",
          correct: true,
        },
        {
          text: "אגוזי מקדמיה",
          correct: false,
        },
        {
          text: "אגוזי פקאן",
          correct: false,
        },
      ],
    },
    {
      id:10,
      question:"?איזה אגוזים הם המרכיב העיקרי בממרח נוטלה",
      answers: [
        {
          text: "אגוזי לוז",
          correct: true,
        },
        {
          text: "אגוזי מלך",
          correct: false,
        },
        {
          text: "אגוזי מקדמיה",
          correct: false,
        },
        {
          text: "אגוזי פקאן",
          correct: false,
        },
      ],
    },
    {
      id:11,
      question:"?איזה אוקיינוס הכי גדול",
      answers: [
        {
          text: "האטלנטי",
          correct: false,
        },
        {
          text: "ההודי",
          correct: false,
        },
        {
          text: "השקט",
          correct: true,
        },
        {
          text: "הדרומי",
          correct: false,
        },
      ],
    },
    {
      id:12,
      question:"?באיזו קבוצה שיחק הכדורסלן לארי בירד",
      answers: [
        {
          text: "אינדיאנה",
          correct: false,
        },
        {
          text: "ניקס",
          correct: false,
        },
        {
          text: "בוסטון",
          correct: true,
        },
        {
          text: "שיקאגו",
          correct: false,
        },
      ],
    },
    {
      id:13,
      question:"?מה היא היבשת הגדולה בעולם",
      answers: [
        {
          text: "אסיה",
          correct: true,
        },
        {
          text: "אירופה",
          correct: false,
        },
        {
          text: "אפריקה",
          correct: false,
        },
        {
          text: "אמריקה הצפונית",
          correct: false,
        },
      ],
    },
    {
      id:14,
      question:"?מה היא העיר עם האוכלוסיה הכי גדולה בעולם",
      answers: [
        {
          text: "שאנגחאי",
          correct: true,
        },
        {
          text: "מומבאי",
          correct: false,
        },
        {
          text: "בואנוס איירס",
          correct: false,
        },
        {
          text: "	איסטנבול",
          correct: false,
        },
      ],
    },
  
  ];

  export default questionData