import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
import './styles.css';

function Contacts() {

    // Kayıtların ekleneceği state burada duracak
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);


  return (
    <div id='container'>
        <h1>Contacts App</h1>
        {/* List component'ine contacts prop'unu gönderdik. */}
      <List contacts={contacts}></List>  
      <br/>
      <Form addContact={setContacts} contacts={contacts}></Form>

    </div>
  );
}
export default Contacts;