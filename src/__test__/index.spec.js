describe('registration form', () => {
  const submit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('register via email', () => {
    const form = {};

    form.email = 'name@mail.com';

    submit(form);

    expect(submit).toHaveBeenCalledWith({
      email: 'name@mail.com'
    });
  });
});
