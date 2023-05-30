export default () => {
  // Partial
  type Todo = {
    title: string;
    description: string;
  };
  type PartialTodo = Partial<Todo>;
  //   ^?

  function update(todo: PartialTodo) {
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

  type RequiredCompany = Required<Company>;
  //   ^?

  function create(company: RequiredCompany) {
    console.log(company.dot, company.mc, company.duns);
  }
  create({
    dot: "123",
    mc: "abc",
    duns: "qwerty",
  });
};
