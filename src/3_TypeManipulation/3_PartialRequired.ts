export default () => {
  // Partial
  type Todo = {
    title: string;
    description: string;
  };

  function update(todo: Partial<Todo>) {
    console.log(todo);
    //          ^?
  }
  update({
    title: "Title",
  });
  update({
    description: "Description",
  });

  // Required
  type Company = {
    dot?: string;
    mc?: string;
    duns?: string;
  };

  function create(company: Required<Company>) {
    console.log(company.dot, company.mc, company.duns);
  }
  create({
    dot: "123",
    mc: "abc",
    duns: "qwerty",
  });
};
