import {useState} from 'react'

function List( {contacts}) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
        );
    });

    console.log("filtered", filtered);

  return (
    <div>

        <input placeholder='Filter contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />


        <ul className='list'>
            {
                filtered.map((filtere,i) => <li key={i}>
                    <span>{filtere.fullname}</span>
                    <span>{filtere.phone_number}</span>
                </li>)
            }
        </ul>

        <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}
export default List;