import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Form,
  ButtonContainer,
} from './styles';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    setName(() => event.target.value);

    if (!event.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório',
      });
    } else { removeError('name'); }
  }

  function handleEmailChange(event) {
    setEmail(() => event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'E-mail inválido.',
      });
    } else { removeError('email'); }
  }

  function handlePhoneChange(event) {
    setPhone(() => formatPhone(event.target.value));

    if (!event.target.value) {
      setError({
        field: 'phone',
        message: 'Telefone inválido.',
      });
    } else { removeError('phone'); }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone: phone.replace(/\D/g, ''),
      category,
    });
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          required
          value={name}
          onChange={(event) => handleNameChange(event)}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(event) => handleEmailChange(event)}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          required
          value={phone}
          onChange={(event) => handlePhoneChange(event)}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select
          required
          value={category}
          onChange={(event) => setCategory(() => event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
          <option value="linkedin">Linkedin</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,

};
