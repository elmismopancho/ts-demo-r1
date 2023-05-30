export default () => {
  // Readonly
  type Point = {
    x: number;
    y: number;
  };

  const zero: Point = {
    x: 0,
    y: 0,
  };
  zero.x = 1;
  zero.y = 2;
  console.log(zero);
  //          ^?

  const ZERO: Readonly<Point> = {
    x: 0,
    y: 0,
  };
  console.log(ZERO);
  //          ^?
  // ZERO.x = 1;

  const ONE = Object.freeze({
    x: 1,
    y: 1,
  });
  console.log(ONE);
  //          ^?
  // ONE.x = 0;

  type Post = {
    title: string;
    body: string;
    author: {
      name: string;
    };
  };

  const post: Readonly<Post> = {
    title: "Lorem Ipsum",
    body: "Dolot sit amet",
    author: {
      name: "John Doe",
    },
  };
  post.title = "";
  post.author.name = ""; //Same as Object.freeze
};
