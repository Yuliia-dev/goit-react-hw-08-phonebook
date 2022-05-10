import PropTypes from 'prop-types';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from 'redux/contacts/contacts-api';
import {
  ContactsListStyle,
  ContactsItem,
  ContactsItemText,
  DeleteBtn,
} from './ContactsList.styled';
import Spinner from 'components/Spinner/Spinner';

export default function ContactsList({ contacts }) {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  const { error, isFetching } = useGetContactsQuery();

  return (
    <>
      <ContactsListStyle>
        {isFetching && <Spinner />}
        {contacts?.map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <ContactsItemText>
                {name}: {phone}
              </ContactsItemText>
              <DeleteBtn
                onClick={() => deleteContacts(id)}
                disabled={isDeleting}
              >
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
        {error && <div> Sorry, contacts not found :( </div>}
      </ContactsListStyle>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
