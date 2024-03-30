import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const { contactList, searchName } = useSelector((state) => state)
    let [filterList, setFilterList] = useState([]);

    useEffect(() => {
        if (searchName !== "" && searchName !== undefined) {
            let List = contactList.filter((item) => item.name.includes(searchName))
            setFilterList(List)
        } else {
            console.log("전체")
            setFilterList(contactList)
        }
    }, [searchName, contactList])

    console.log("contactList: ", contactList)
    console.log("filterList: ", filterList)
    console.log("searchName: ", searchName)

    return (
        <div>
            <SearchBox />
            <div>
                {filterList.map((item, index) => (
                    <ContactItem item={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ContactList