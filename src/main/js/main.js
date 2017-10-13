var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
 
var App = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      vegetables: [
        'เทรนเนอร์ฟุตบอล',
        'เทรนเนอร์ฟุตซอล',
        'เทรนเนอร์บาสเกตบอล',
        'เทรนเนอร์วอลเล่ย์บอล',
        'เทรนเนอร์เทนนิส',
        'เทรนเนอร์ปิงปอง',
        'เทรนเนอร์เบ็ดมินตัน',
        'เทรนเนอร์ว่ายน้ำ'
        
      ],
      selectedVegetable: 'เทรนเนอร์ฟุตบอล'
    };
  },

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>ระบบเทรนเนอร์</div>
      </Ons.Toolbar>
    );
  },

  handleClick: function() {
    
      ons.notification.alert(this.state.username + " เลือก " + this.state.selectedVegetable );
    
    
  },

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  },

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  },

  handleVegetableChange(vegetable) {
    this.setState({selectedVegetable: vegetable});
  },

  renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
          />
        </label>
        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  },

  renderRadioRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Radio
            inputId={`radio-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
        </label>
        <label htmlFor={`radio-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  },

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <section style={{textAlign: 'center'}}>
          
          <p>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              placeholder='รหัสสมาชิก' />
          </p>
         
          
        </section>

        <Ons.List
          dataSource={this.state.vegetables}
          renderHeader={() => <Ons.ListHeader>เลือกประเภทเทรนเนอร์</Ons.ListHeader>}
          renderRow={this.renderRadioRow}
        />

        <center><p>
            <Ons.Button onClick={this.handleClick}>ยืนยัน</Ons.Button>
          </p></center>
      </Ons.Page>
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<App />, document.getElementById('react'));
});

