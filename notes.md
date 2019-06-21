#Sample State Shape

  ```
  data: {
    users: {
      1: {
        id: 1,
        username: Pinner123,
        boardIds: [31, 13],
      },
      2: {
        id: 2,
        username: Pinstaman555,
        boardIds: [22, 54],
      },
    },
    boards: {
      1: {
        id: 1,
        title: "Action Figures",
        description: "1980s toys are the best",
        authorId: 21,
        pinIds: [23, 12, 13],
      },
      2: {
        id: 2,
        title: "Fashion",
        description: "gold and white or blue and black",
        authorId: 56,
        pinIds: [11, 2, 45],
      },
      3: {
        id: 3,
        title: "Comedy",
        description: "",
        authorId: 82,
        pinIds: [39, 118, 99],
      },
    },
    pins: {
      1: {
        id: 1,
        title: "Better butt",
        description: "",
        userId: 52,
        imageUrl: "http://faker.com/happy/funny/clown-bent-over.jpg"
        created: "December 2, 2018",
        followers: [],
      }
      1: {
        id: 1,
        title: "French Hair Styles",
        description: "Flat hair, straight hair, no hair?",
        userId: 11,
        imageUrl: "http://sitewithpictures.com/hair/french/blonde.jpg"
        created: "August 12, 2018",
        followers: [],
      }
    }
  session: {
    currentUserId: 2
  },
  errors: {
    users: [],
    boards: [],
  }
  ```
