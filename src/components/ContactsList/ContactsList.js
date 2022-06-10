import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import {
//   useGetContactsQuery,
//   useDeleteContactsMutation,
// } from 'redux/contacts/contacts-api';
import {
  ContactsListStyle,
  ContactsItem,
  ContactsItemText,
  DeleteBtn,
} from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'redux/contacts/contacts-selectors';
import { getContacts, deleteContacts } from 'redux/contacts/contacts-operation';

// import Spinner from 'components/Spinner/Spinner';

export default function ContactsList() {
  // const [deleteContacts, { isLoading: isDeleting }] =
  //   useDeleteContactsMutation();
  // const { error, isFetching } = useGetContactsQuery();
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  // const onDeleteItems = id => dispatch(deleteContacts(id));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsListStyle>
        {/* {isFetching && <Spinner />} */}
        {contacts?.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsItemText>
                {name}: {number}
              </ContactsItemText>
              <DeleteBtn
                onClick={() => dispatch(deleteContacts(id))}
                // disabled={isDeleting}
              >
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
        {/* {error && <div> Sorry, contacts not found :( </div>} */}
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
