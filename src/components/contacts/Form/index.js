import  {useState,useEffect} from 'react'
// import Contacts from '..';

const initialFormValues = {fullname: "", phone_number:""}; // başlangıçta verilen değerler. Sonradan form elemanı eklenmesi durumunda
                                                        // aşağıdaki alanlarda çok fazla yerde değişiklik yapmamak için.

function Form( {addContact, contacts}) {
    const [form,setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]); // contacts değiştikten sonra inputun içerisini boşaltır.

    //Bir input'un içeriği değiştiği anda bunu state'e atamasını yapabilmesi için gerekl fonksiyon:
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value}); // [e.target.name]'deki name aşağıdaki input'ların name prop'undan geliyor.
    };

    const onSubmit = (e) => {
        e.preventDefault(); // form'u submit edince default davranışında sayfayı yeniliyor.

        if(form.fullname === "" || form.phone_number === ""){ // isim ve numara girilmezse form gönderilmez.
            return false;
        }

        addContact([...contacts,form]);

        // setForm(initialFormValues); // Form submit edildikten sonra input alanlarını temizlenmesi için gerekli. 
                                    //Submit'te yapmak istemiyorsak yukarıda useEffect'te yapılmış hali mevcut.
    };  

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input 
            name='fullname' 
            placeholder='Full Name' 
            value={form.fullname}
            onChange={onChangeInput}
            ></input>
        </div>
        <br></br>
      <div>
            <input 
            name='phone_number' 
            placeholder='Phone Number' 
            value={form.phone_number}
            onChange={onChangeInput}
            ></input>
      </div>
      <br/>
      <div className='btn'>
        <button>Add</button>
      </div>
      
    </form>
  );
}
export default Form;