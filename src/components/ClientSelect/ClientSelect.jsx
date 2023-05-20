import {
  InputEl,
  InputWrapper,
  LabelEl,
} from 'components/ErpForm/ErpForm.styled';
import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectClients } from 'redux/selectors';

export const ClientSelect = () => {
  const { setFieldValue } = useFormikContext();

  const clients = useSelector(selectClients);

  useEffect(() => {
    setFieldValue('selectedName', clients[0]);
  }, [clients, setFieldValue]);

  return (
    <InputWrapper>
      <LabelEl>Клієнт № </LabelEl>
      <InputEl as="select" id="selectedName" name="selectedName">
        {clients.map(client => (
          <option key={client} value={client}>
            {client}
          </option>
        ))}
      </InputEl>
    </InputWrapper>
  );
};
