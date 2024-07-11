import { View, Text, FlatList } from 'react-native'
import React, {useState} from 'react'

const SearchEg = () => {
    const data = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
        { id: 3, name: 'Michael Johnson', email: 'michaeljohnson@example.com' },
        { id: 4, name: 'Emily Davis', email: 'emilydavis@example.com' },
        { id: 5, name: 'Daniel Wilson', email: 'danielwilson@example.com' },
        { id: 6, name: 'Olivia Brown', email: 'oliviabrown@example.com' },
        { id: 7, name: 'William Taylor', email: 'williamtaylor@example.com' },
        { id: 8, name: 'Sophia Anderson', email: 'sophiaanderson@example.com' },
        { id: 9, name: 'James Martinez', email: 'jamesmartinez@example.com' },
        { id: 10, name: 'Ava Thomas', email: 'avathomas@example.com' }
    ];
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const renderElement = ({ item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
            </View>
        )
    }
  return (
    <View>
      {/* <SearchBar placeholder='Search Here...' lightTheme value={search} autoCorrect={false}/> */}
      <FlatList data={data} keyExtractor={item => item.id.toString()} renderItem={renderElement} />
    </View>
  )
}

export default SearchEg 