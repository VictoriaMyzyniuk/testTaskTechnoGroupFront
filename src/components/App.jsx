import Container from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { ErpForm } from 'components/ErpForm/ErpForm';

export const App = () => {
  return (
    <Container>
      <Header />
      <ErpForm />
    </Container>
  );
};
