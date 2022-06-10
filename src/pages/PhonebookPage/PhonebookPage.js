import { useState } from 'react';
// import { useGetContactsQuery } from 'redux/contacts/contacts-api';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/contacts/contacts-selectors';
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
  const contacts = useSelector(getItems);
  // const { data } = useGetContactsQuery({
  //   skip: filter === '',
  // });

  const searchNameOnList = e => {
    setFilter(e.target.value);
  };

  const visibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
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
