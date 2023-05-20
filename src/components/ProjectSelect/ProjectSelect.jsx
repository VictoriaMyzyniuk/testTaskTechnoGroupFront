import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProjects } from 'redux/selectors';
import {
  InputEl,
  InputWrapper,
  LabelEl,
} from 'components/ErpForm/ErpForm.styled';

export const ProjectSelect = () => {
  const { setFieldValue } = useFormikContext();

  const projects = useSelector(selectProjects);

  useEffect(() => {
    const projectList = projects.map(project => project.project);
    setFieldValue('selectedProject', projectList[projectList.length - 1]);
  }, [projects, setFieldValue]);

  const handleProjectChange = e => {
    setFieldValue('selectedProject', e.target.value);

    const selectedClient = projects.find(
      project => project.project === e.target.value
    ).client;
    setFieldValue('selectedName', selectedClient);
  };

  return (
    <InputWrapper>
      <LabelEl>Проект №</LabelEl>
      <InputEl
        as="select"
        id="selectedProject"
        name="selectedProject"
        onChange={handleProjectChange}
      >
        {projects.map(project => (
          <option key={project.id} value={project.project}>
            {project.project}
          </option>
        ))}
      </InputEl>
    </InputWrapper>
  );
};
