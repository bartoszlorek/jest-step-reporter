import { step } from '../index';

describe('registration form', () => {
  const submit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('register via email', () => {
    const form = {};

    step('set email field', () => {
      form.email = 'name@mail.com';
      expect(form.email).toBe('name@mail.com');
    });

    step('set password field', () => {
      form.password = 'pass123';
      expect(form.password).toBe('pass123');
    });

    step('submit form', () => {
      submit(form);
      expect(submit).toHaveBeenCalledWith({
        email: 'name@mail.com',
        password: 'pass123'
      });
    });
  });

  it('register via facebook', () => {
    const form = {};

    step('set facebook email', () => {
      form.facebook_email = 'name@mail.com';
      expect(form.facebook_email).toBe('name@mail.com');
    });

    step('submit form', () => {
      submit(form);
      expect(submit).toHaveBeenCalledWith({
        facebook_email: 'name@mail.com'
      });
    });
  });
});
