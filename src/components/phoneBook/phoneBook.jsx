import { nanoid } from 'nanoid';
// import { Formik } from 'formik';
import { Forms, Label, Button, Input, Title } from './phoneBook.module';

import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectContactsItems } from '../../redux/contacts/selectors';
import { saveContact } from '../../redux/contacts/operations';

// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
//     .required(),
//   number: yup
//     .string()
//     .min(5, 'Too short  phone number')
//     .max(10, 'Too long phone number')
//     .matches(
//       /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
//       'Invalid phone number format'
//     )
//     .required(),
// });

export const PhoneBook = () => {
  const contacts = useSelector(selectContactsItems);

  const dispatch = useDispatch();

  const toastOptions = {
    duration: 2000,
    position: 'top-right',
  };

  const submitForm = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.error(`${data.name} is already in contacts`, toastOptions);

      return;
    }

    dispatch(saveContact(data));

    toast.success(
      `${data.name.value} has succesfully added to your phonebook`,
      toastOptions
    );
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    // <Formik validationSchema={schema} initialValues={{ name: '', number: '' }}>
    <Forms onSubmit={submitForm}>
      <Toaster />
      <Title>Phonebook</Title>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // value={name}
          // onChange={ChangeForm}
          required
        />
      </Label>

      <Label htmlFor={numberId}>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // value={number}
          // onChange={ChangeForm}
          required
        />
      </Label>

      <Button type="submit">Add contact </Button>
    </Forms>
    // </Formik>
  );
};
