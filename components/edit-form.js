// @flow
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
// $FlowFixMe -- the nextjs flowtype doesn't include this export, silencing error
import { useRouter } from 'next/router';
import useFormInput from '../core/useFormInput';
import { doModifyUser } from '../core/store/actions';
import { type CardType } from './card';
import TextInput from './text-input';
import Button from './button';

const EditForm = ({ name, email, phone, location, ...rest }: CardType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { value: firstNameInput, bind: bindFirstNameInput } = useFormInput(
    name.first
  );
  const { value: lastNameInput, bind: bindLastNameInput } = useFormInput(
    name.last
  );
  const { value: emailInput, bind: bindEmailInput } = useFormInput(email);
  const { value: phoneInput, bind: bindPhoneInput } = useFormInput(phone);
  const { value: cityInput, bind: bindCityInput } = useFormInput(location.city);
  const { value: stateInput, bind: bindStateInput } = useFormInput(
    location.state
  );

  const handleSubmit = (event: SyntheticInputEvent<>) => {
    event.preventDefault();

    const submissionObject = {
      ...rest,
      name: {
        first: firstNameInput,
        last: lastNameInput,
      },
      email: emailInput,
      phone: phoneInput,
      location: {
        city: cityInput,
        state: stateInput,
      },
    };

    dispatch(doModifyUser(submissionObject));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="firstName" label="First Name" {...bindFirstNameInput} />
      <TextInput name="lastName" label="Last Name" {...bindLastNameInput} />
      <TextInput name="email" label="Email" {...bindEmailInput} />
      <TextInput name="phone" label="Phone" {...bindPhoneInput} />
      <TextInput name="city" label="City" {...bindCityInput} />
      <TextInput name="state" label="State" {...bindStateInput} />
      <div className="button-container">
        <Button outline onClick={() => router.push('/')}>
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </div>

      <style jsx>{`
        form {
          margin-top: 2rem;
        }
        .button-container {
          display: flex;
          justify-content: space-between;
        }
        @media screen and (min-width: 30em) {
          form {
            margin-top: 0;
          }
        }
      `}</style>
    </form>
  );
};

export default memo<*>(EditForm);
