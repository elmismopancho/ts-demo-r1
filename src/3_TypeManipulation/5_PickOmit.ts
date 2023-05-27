export default () => {
  // Pick
  type Post = {
    title: string;
    subtitle: string;
    body: string;
    postedOn: Date;
    author: string;
    // comments: number;
  };

  type BadPostPreview = {
    title: string;
    postedOn: Date;
  };

  type PostPreview = Pick<Post, "title" | "postedOn">;

  const postPreview: PostPreview = {
    title: "Lorem Ipsum",
    postedOn: new Date(),
  };
  console.log("postPreview", postPreview);
  //                         ^?

  // Omit
  type PostSummary = Omit<Post, "body">;
  const postSummary: PostSummary = {
    title: "Lorem Ipsum",
    subtitle: "Dolot sit amet",
    author: "John Doe",
    postedOn: new Date(),
  };
  console.log("postSummary", postSummary);
  //                         ^?
};
