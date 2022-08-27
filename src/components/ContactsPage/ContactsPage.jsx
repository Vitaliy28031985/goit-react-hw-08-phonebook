import {ContactList} from '../ContactList/ContactList';
import {ContactForm} from '../ContactForm/ContactForm';
import {Filter} from '../Filter/Filter';
import {LoaderComponent} from '../Loader/Loader';
import {useGetContactsQuery} from '../../redux/contactsSlice';


const ContactsPage = () => {

   const {isLoading} = useGetContactsQuery();

   return (
   <div style={{
   marginTop: 100,
   marginLeft: 300,
   width: 900,
   }}>
   <p style={{
   fontSize: 30,
   color: '#010101'
   }}
   >Phonebook</p>
<ContactForm />
  <p
  style={{
  fontSize: 30,
  color: '#010101'
  }}
  >Contacts</p>
  <Filter/>
  {isLoading ? (<LoaderComponent/>) : (<ContactList />)}


  </div>
   );

};

export default ContactsPage;