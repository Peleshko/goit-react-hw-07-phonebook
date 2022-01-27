import FormContact from '../FormContact';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
