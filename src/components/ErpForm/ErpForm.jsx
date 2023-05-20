import { Formik } from 'formik';
import { FormEl, SubmitButton } from 'components/ErpForm/ErpForm.styled';

import { useDispatch } from 'react-redux';
import {
  fetchAllClients,
  addNewProject,
  fetchAllProjects,
} from 'redux/operations';
import { useEffect } from 'react';
import { ClientSelect } from 'components/ClientSelect/ClientSelect';
import { ProjectSelect } from 'components/ProjectSelect/ProjectSelect';

export const ErpForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllClients());
    dispatch(fetchAllProjects());
  }, [dispatch]);

  const handleSubmit = async values => {
    dispatch(addNewProject(values.selectedName));
  };

  const initialValues = {
    selectedName: '',
    selectedProject: '',
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormEl>
        <ClientSelect />
        <SubmitButton type="submit">Створити проект</SubmitButton>
        <ProjectSelect />
      </FormEl>
    </Formik>
  );
};
