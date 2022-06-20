import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  ContactsListStyle,
  ContactsItem,
  ContactsItemText,
  DeleteBtn,
} from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { getContacts, deleteContacts } from 'redux/contacts/contacts-operation';
import Spinner from 'components/Spinner/Spinner';

export default function ContactsList({ contacts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsListStyle>
        {!contacts && <Spinner />}
        {contacts?.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsItemText>
                {name}: {number}
              </ContactsItemText>
              <DeleteBtn onClick={() => dispatch(deleteContacts(id))}>
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
        {contacts.length === 0 && (
          <div>
            {' '}
            <strong>The list is empty, add your contacts.</strong>{' '}
          </div>
        )}
      </ContactsListStyle>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
