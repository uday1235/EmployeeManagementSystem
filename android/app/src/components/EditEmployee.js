import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addEmployee } from '../redux/actions';

const AddEmployee = ({ addEmployee, navigation }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      addEmployee({ id: Math.random(), name });
      setName('');
      navigation.navigate('EmployeeList');
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Enter Employee Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Add Employee" onPress={handleAdd} />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addEmployee: (employee) => dispatch(addEmployee(employee)),
});

export default connect(null, mapDispatchToProps)(AddEmployee);
