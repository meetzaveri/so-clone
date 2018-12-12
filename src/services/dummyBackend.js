export const users = [];

export const posts = [
  {
    id: "12223222",
    userid: "7100",
    username: "Jack",
    title: "Div not getting rendered",
    body: "Ak feko lorem ipsum get",
    tags: "html,css",
    upvotes: ["7000", "7201", "7102"],
    downvotes: [],
    comments: [{ userid: "7000", username: "Ben", comment: "Please improve" }],
    answers: [
      {
        id: "2244",
        userid: "7200",
        username: "Ben",
        body: "lorem ipsum dolor ismet",
        upvotes: ["7000", "7100"],
        downvotes: [],
        isAccepted: false
      }
    ]
  },
  {
    id: "12223322",
    userid: "7101",
    username: "Quinn",
    title: "JSX not being rendered",
    body: "Ak feko lorem ipsum get",
    tags: "html,css,js",
    upvotes: ["7000", "7201", "7102", "7100"],
    downvotes: ["7200"],
    comments: [{ userid: "7000", username: "Ben", comment: "Please improve" }],
    answers: [
      {
        id: "2245",
        userid: "7201",
        username: "Alan",
        body: "lorem ipsum dolor ismet",
        upvotes: ["7000", "7201", "7102", "7100"],
        downvotes: [],
        isAccepted: false
      }
    ]
  },
  {
    id: "12223422",
    userid: "7102",
    username: "Ian",
    title: "CMD Not working",
    body: "Ak feko lorem ipsum get",
    tags: "shell,python",
    upvotes: ["7200"],
    downvotes: ["7100", "7101"],
    comments: [
      {
        userid: "7201",
        username: "Alan",
        comment: "Please improve the question"
      }
    ],
    answers: [
      {
        id: "2246",
        userid: "7203",
        username: "Josh",
        body: "lorem ipsum dolor ismet",
        upvotes: ["7100", "7101"],
        downvotes: [],
        isAccepted: false
      }
    ]
  },
  {
    id: "12225222",
    userid: "7300",
    username: "Jules",
    title: "Pytorch not working",
    body: "Pytorch  feko lorem ipsum get",
    tags: "python,html",
    upvotes: ["7101", "7201", "7203"],
    downvotes: ["7102"],
    comments: [],
    answers: [
      {
        id: "2244",
        userid: "7200",
        username: "Ben",
        body: "lorem ipsum dolor ismet",
        upvotes: ["7100", "7300"],
        downvotes: 0,
        isAccepted: false
      }
    ]
  }
];

export const returnSinglePost = (arr, id) => {
  const filteredArr = arr.filter(item => item.id === id);
  return filteredArr;
};
