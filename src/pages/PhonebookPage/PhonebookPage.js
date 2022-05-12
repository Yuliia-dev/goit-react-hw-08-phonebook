import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import PhonebookForm from '../../components/PhonebookForm/PhonebookForm';
import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';
import {
  Container,
  TitlePhonebook,
  TitleContacts,
} from './PhonebookPage.styled';

export default function PhonebookPage() {
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
