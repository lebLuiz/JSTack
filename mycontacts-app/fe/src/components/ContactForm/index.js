import PropTypes from 'prop-types';
import {
  useState,
  useEffect,
  useMemo,
} from 'react';
import {
  Form,
  ButtonContainer,
} from './styles';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const filteredCategories = useMemo(() => categories, [categories]);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();
        setCategories(categoriesList);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

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

    onSubmit({
      name,
      email,
      phone,
      categoryId,
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

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          required
          value={categoryId}
          onChange={(event) => setCategoryId(() => event.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">
            Sem categoria
          </option>
          {
                filteredCategories.map((category) => (
                  <option
                    value={category.id}
                    key={category.id}
                  >
                    {category.name}
                  </option>
                ))
            }
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
  onSubmit: PropTypes.func.isRequired,
};
