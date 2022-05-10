import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export default function App() {
  const [filter, setFilter] = useState('');
  const { data } = useGetContactsQuery({
    skip: filter === '',
  });

  const searchNameOnList = e => {
    setFilter(e.target.value);
  };

  const visibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <PhonebookForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} searchName={searchNameOnList} />
      <ContactsList contacts={visibleContact()} />
    </Container>
  );
}
