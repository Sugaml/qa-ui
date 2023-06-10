import React,{ useState } from 'react'
import { connect } from 'react-redux';
import QADatepicker from '../../Components/base/input/QADatepicker';
import QACheckboxGroup from '../../Components/base/input/QACheckbox';
import QARadioGroup from '../../Components/base/input/QARadio';
import QASelect from '../../Components/base/input/QASelect';

function Dashboard(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const options = [
    { label: 'Option 1', value: 'option1', name: 'option1' },
    { label: 'Option 2', value: 'option2', name: 'option2' },
    { label: 'Option 3', value: 'option3', name: 'option3' },
  ];

  const handleCheckboxChange = (event) => {
    // Handle checkbox change event
  };

  const handleRadioChange = (event) => {
    // Handle radio change event
  };

  const handleSelectChange = (event) => {
    // Handle select change event
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("date ",date)
  };
  console.log("Dashbaord :: ",props.loginData)
  return (
    <div>
      <h1>My Dashboard</h1>

      <div>
      <h1>Checkbox Group Example</h1>
      <QACheckboxGroup items={options} label="Select Options" onChange={handleCheckboxChange} />
    </div>
<div>
    <h1>Select Example</h1>
      <QASelect items={options} label="Select Option" onChange={handleSelectChange} />
    </div>
    <div>
      <h1>Radio Group Example</h1>
      <QARadioGroup items={options} label="Select an option" onChange={handleRadioChange} />
    </div>
    <div>
    <h1>Date</h1>
    <QADatepicker
        variant="datetime"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
    
      </div>
  )
}

const mapStateToProps = ({ loginData }) => ({
  loginData:loginData
});

export default connect(mapStateToProps, null)(Dashboard)