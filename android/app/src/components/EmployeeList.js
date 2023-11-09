import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deleteEmployee } from '../redux/actions';

const EmployeeList = ({ employees, navigation, deleteEmployee }) => {
  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddEmployee')}>
        <Text>Add Employee</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEmployee: (id) => dispatch(deleteEmployee(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
