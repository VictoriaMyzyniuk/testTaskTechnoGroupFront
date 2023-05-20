import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LabelEl = styled.div`
  font-size: 19px;
  margin-right: 10px;
`;

export const InputWrapper = styled.div`
  min-height: 74px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputEl = styled(Field)`
  font-size: 16px;
  width: 250px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;

  font-weight: 700;
  outline: none;

  margin-bottom: 4px;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #5d5e5e;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: #ffffff;

  padding: 5px;
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    background-color: #1c1a1a;
  }
`;
