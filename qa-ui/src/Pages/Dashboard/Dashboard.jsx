import React from 'react'
import { connect } from 'react-redux';

function Dashboard(props) {
  console.log("Dashbaord :: ",props.loginData)
  return (
    <div>My Dashboard</div>
  )
}

const mapStateToProps = ({ loginData }) => ({
  loginData:loginData
});

export default connect(mapStateToProps, null)(Dashboard)