export const questions = [
  {
    intro: '고마워요,',
    question: '성별이 어떻게 되시나요?',
    description: '외부에 절대 공개되지 않아요!',
    answers: ['남성', '여성']
  },
  {
    intro: '금고에 넣어둘게요!',
    question: '체중을 알려주세요',
    description: '적절한 운동계획을 제공할 때 필요해요!',
    answers: ['입력완료']
  },
  {
    intro: '고마워요,',
    question: '원하는 체형을 선택해주세요.',
    description: '원하는 체형이 될 수 있도록 맛있다가 도울게요',
    answers: ['건강한 몸', '근육질의 몸', '근육으로 가득 찬 몸']
  },
  {
    intro: '좋은 목표에요,',
    question: '헬스 경험이 있나요?',
    description: '헬스 수준에 맞춰 체계적인 서비스를 제공할게요',
    answers: ['처음이에요', '3개월 이내', '3~6개월', '6~12개월', '1년 이상']
  },
  {
    intro: '무릎을 대고 푸쉬업을',
    question: '몇 개할 수 있나요?',
    description: '운동 수준에 맞춰 체계적인 서비스를 제공할게요',
    answers: ['10개 이하', '10~20개', '20~30개', '30개 이상', '잘 모르겠어요']
  },
  {
    intro: '대단한데요?',
    question: '운동 목표를 선택해주세요!',
    description: '원하는 목표에 맞춰 미션을 수행해봐요!',
    answers: ['1주일에 2번', '1주일에 3~4번', '1주일에 5번 이상', '안 정해둘래요']
  },
  {
    intro: '마지막이에요!',
    question: '맞춤형 플랜을 만들어 드릴게요',
    description: '꼭 맞는 계획을 제공해드릴게요!',
    answers: ['좋아요!', '직접 설정할래요!']
  }
];

export const meal = [
  {
    intro: '맛있게 드셨나봐요',
    question: '어떤 음식을 드셨나요?',
    unit:'',
    allowedCharsType : '',
  },
  {
    intro: '김치볶음밥의',
    question: '탄수화물 정보를 알려주세요',
    unit:'g',
    allowedCharsType : 'numericWithDecimal',
  },
  {
    intro: '김치볶음밥의',
    question: '단백질 정보를 알려주세요',
    unit:'g',
    allowedCharsType : 'numericWithDecimal',
  },
  {
    intro: '김치볶음밥의',
    question: '지방 정보를 알려주세요',
    unit:'g',
    allowedCharsType : 'numericWithDecimal',
  },
]


export const water = [
  {
    intro: '피부가 탱글탱글하시네요',
    question: '오늘 물을 얼마나 마셨나요?',
    unit:'L',
    allowedCharsType : 'numericWithDecimal',
  },
]


export const weight = [
  {
    intro: '오늘은 어떤 변화를 겪었나요?',
    question: '오늘 체중을 입력해주세요',
    unit:'KG',
    allowedCharsType : 'numericWithDecimal',
  },
]

export const dday = [
  {
    intro: '기억해야 하는',
    question: 'D-DAY 제목을 입력해주세요',
    unit:'',
    allowedCharsType : '',
  },
  {
    intro: 'D-Day 날짜를',
    question: '선택해주세요',
    unit:'',
    allowedCharsType : '',
  },
  {
    intro: 'D-Day까지',
    question: '어떤 목표를 이뤄야 하나요?',
    unit:'',
    allowedCharsType : '',
  },
]


export const create = [
  {
    intro: '새로운 그룹이 필요하신가요?',
    question: '멋진 그룹 이름을 지어주세요',
    unit:'',
    allowedCharsType : '',
  },
]