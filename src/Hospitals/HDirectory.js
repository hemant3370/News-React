import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const dataUrl = "https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?api-key=579b464db66ec23bdd00000199230f51e148472049284df3dd2e95c8&format=json&offset=0&limit=100";
class HDirectory extends Component {
  state = {
    hospitals: [],
    loading: true
  };
  componentDidMount(){
    let self = this;
    fetch(dataUrl, {
      method: 'GET'
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(json => self.setState({ hospitals: json.records, loading: false }))
  }
  
  render() {
      const { hospitals, loading } = this.state;
    return (
        <Table dataSource={hospitals} loading={loading} bordered>
      <Column
        title="Hospital Name"
        dataIndex="hospital_name"
        key="hospital_name"
      />
      <Column
        title="Location"
        key="_location"
        render={(text, record) => (
            <span>
              {record._location}, {record.district}, {record.state} 
            </span>
          )}
      />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href={"https://www.google.com/maps/?q=" + record._location_coordinates} target="_blank">View on Map</a>
          <Divider type="vertical" />
          <a href= {"tel:" + record.mobile_number}>Call {record.mobile_number}</a>
        </span>
      )}
    />
  </Table>
    );
  }
}

export default HDirectory;
