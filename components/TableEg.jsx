import {View, Text} from 'react-native';
import {Table, Row, Rows,Col, TableWrapper} from 'react-native-table-component';
import React from 'react';

const TableEg = () => {
  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '789'],
    ['a', 'b', 'c', 'd'],
  ];

  //Table Example 2
  const tableHead2 = ['','Head1', 'Head2', 'Head3'];
  const tableTitle = ['Title', 'Title2', 'Title3', 'Title4'];
  const tableData2 = [
    ['2', '3', '4'],
    ['b', 'c', 'd'],
    ['2', '3', '789'],
    ['b', 'c', 'd'],
  ];
  return (
    <View>
      <View className="p-3">
        <View>
          <Text className="text-center font-bold text-lg py-5">
            Table Example 1
          </Text>
        </View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={tableHead}
            style={{height: 40, backgroundColor: '#f1f8ff'}}
          />
          <Rows data={tableData} textStyle={{margin: 6}} />
        </Table>
      </View>
      <View className="p-3">
        <View>
          <Text className="text-lg py-5 font-bold text-center">Table Example 2</Text>
        </View>
        <View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={tableHead2}
              flexArr={[1,2, 1, 1]}
              style={{height: 40, backgroundColor: '#f1f8ff'}}
              textStyle={{textAlign: 'center'}}
            />
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col
                data={tableTitle}
                heightArr={[28,28]}
                style={{width: 100, height: 160, backgroundColor: '#f6f8fa'}}
                
              />
              <Rows
                data={tableData2}
                flexArr={[2, 1, 1]}
                style={{height: 40}}
                textStyle={{textAlign: 'center'}}
              />
            </TableWrapper>
          </Table>
        </View>
      </View>
    </View>
  );
};

export default TableEg;
