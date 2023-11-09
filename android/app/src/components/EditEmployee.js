import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateEmployee } from '../redux/actions';

const EditEmployee = ({ route, updateEmployee, navigation }) => {
  const { id } = route.params;
  const [name, setName] = useState('');

  useEffect(() => {
    // Assuming you have access to employee data in Redux state
    const employee = employees.find((emp) => emp.id === id);
    if (employee) {
      setName(employee.name);
    }
  }, [id, employees]);

  const handleUpdate = () => {
    if (name.trim()) {
      updateEmployee({ id, name });
      navigation.goBack();
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Enter Employee Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Update Employee" onPress={handleUpdate} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = (dispatch) => ({
  updateEmployee: (employee) => dispatch(updateEmployee(employee)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
