var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

var page = true;
var page2 = true;
var index = [0,0];
var num = 0;
var pro = ['ฟุตบอล','บาสเกตบอล'];
var pro2 = ['Messi','Ronaldo','Neymar'];
var pro3 = ['Curry','James','Westbrook'];
var D = [];
var Ge = [];
var price =[,];
var URL = ["https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157931_960_720.png",
"https://www.jumpstartsports.com/upload/images/Radnor_Basketball/448650-basketball__mario_sports_mix_.png"];
var URL2 = ["https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/04/10/lionel-messi.jpg",
"http://static.goal.com/3200600/3200602_heroa.jpg",
"https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict000343583882.jpg?strip=all&w=640"];
var URL3 = ["https://az616578.vo.msecnd.net/files/2016/05/15/635989279751597688-871060012_curry.jpeg",
"https://espntheundefeated.files.wordpress.com/2017/05/gettyimages-684321920.jpg?w=1024",
"https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-03/GettyImages-653411218.jpg?itok=ZLb9Aehh"];

var MyPage = React.createClass({
  getInitialState: function() {
    return {
      date: '',
      modifier: '',
      username: '',
      vegetables3: [
        'Curry',
        'James',
        'Westbrook'
        ],
        
      vegetables2: [
        'Messi',
        'Ronaldo',
        'Neymar'
        ],
   
        
      vegetables: [
       'ฟุตบอล',
       'บาสเกตบอล',
       
      ],
    };
  },
  
renderToolbar: function(route, navigator) {
    const backButton = route.hasBackButton
      ? <Ons.BackButton onClick={this.handleClick.bind(this, navigator)}>Back</Ons.BackButton>
      : null;

    return (
      <Ons.Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{route.title}</div>
        
      </Ons.Toolbar>
    );
  },

  renderPage: function(route, navigator) {
    
    if(page == true && page2 == true){
    return (
      <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
          <section style={{textAlign: 'center'}}>
          <p>
          <Ons.ListHeader>ชื่อ-นามสกุล</Ons.ListHeader>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              placeholder='เช่น:เลียวเนล เมสซี่' />
          </p>
          <p>
           <Ons.ListHeader>วัน/เดือน/ปี</Ons.ListHeader>
            <Ons.Input
              value={this.state.date}
              onChange={this.handleDateChange}
              modifier='date'
              float
              placeholder='เช่น: 01-01-2560' />
          </p>
          <p>
          <Ons.ListHeader>เวลา: </Ons.ListHeader>
          <Ons.Select id="choose-sel" 
              value={this.state.modifier} 
              placeholder="เลือกเวลา"
              modifier={this.state.modifier} 
              onChange={this.editSelects}>
            <option value="10:00-11:00">10:00-11:00</option>
            <option value="11:00-12:00">11:00-12:00</option>
            <option value="12:00-13:00">12:00-13:00</option>
            <option value="13:00-14:00">13:00-14:00</option>
            <option value="14:00-15:00">14:00-15:00</option>
            <option value="15:00-16:00">15:00-16:00</option>
            <option value="16:00-17:00">16:00-17:00</option>
            <option value="17:00-18:00">17:00-18:00</option>
            <option value="18:00-19:00">18:00-19:00</option>
            <option value="19:00-20:00">19:00-20:00</option>
            <option value="20:00-21:00">20:00-21:00</option>
            <option value="21:00-22:00">21:00-22:00</option>
          </Ons.Select>
          </p>
          </section>
           <Ons.List
             dataSource={this.state.vegetables}
             renderHeader={() => <Ons.ListHeader>ประเภทเทรนเนอร์</Ons.ListHeader>}
             renderRow={this.renderCheckboxRow}
            />
        
           <section style={{margin: '16px', textAlign: 'center'}}>
             <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ค้นหา</Ons.Button>
           </section>
           
        </Ons.Page>
      ); 
    }else if(page != page2){
      var a = this.state.selectedVegetable
      if(a=='ฟุตบอล'){
        return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
            <Ons.List
              dataSource={this.state.vegetables2}
              renderHeader={() => <Ons.ListHeader></Ons.ListHeader>}
              renderRow={this.renderRadioRow}
            
            />
              <p style={{textAlign: 'center'}}>
               <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ยืนยันการจอง</Ons.Button>
              </p>
          </Ons.Page>
        );
      }else if(a=='บาสเกตบอล'){
        return (
          <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
            <Ons.List
              dataSource={this.state.vegetables3}
              renderHeader={() => <Ons.ListHeader></Ons.ListHeader>}
              renderRow={this.renderRadioRow2}
            
            />
              <p style={{textAlign: 'center'}}>
               <Ons.Button onClick={this.pushPage.bind(this, navigator)}>ยืนยันการจอง</Ons.Button>
              </p>
          </Ons.Page>
        );
      }    
   }else 
    var a = this.state.selectedVegetable //ประเภทเทรนเนอร์
    var b = this.state.selectedVegetable2  // ชื่อเทรนเนอร์
    var c = this.state.selectedVegetable3 // ชื่อเทรนเนอร์
    var d = this.state.date
    var e = this.state.modifier    //time
    var g = this.state.username
        return (
      <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
        <section style={{textAlign: 'center'}}>
        
          <p>
          
          
          <Ons.ListHeader>ชื่อ : {g}</Ons.ListHeader>
          
           <Ons.ListHeader>วัน/เดือน/ปี : {d} </Ons.ListHeader>
        
           <Ons.ListHeader>เวลา : {e} </Ons.ListHeader>
           
           <Ons.ListHeader>ประเภทเทรนเนอร์ : {a}</Ons.ListHeader>
          
           <Ons.ListHeader>ชื่อเทรนเนอร์ : {b||c}</Ons.ListHeader>
          
         
          </p>
          </section>
        
        <p style={{textAlign: 'center'}}>
          <Ons.Button onClick={this.handleOnClick}>ยืนยัน</Ons.Button>&nbsp;&nbsp;
          <Ons.Button onClick={this.handleClick.bind(this, navigator)}>กลับหน้าหลัก</Ons.Button>
        </p>
      </Ons.Page>
        );
  },
  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
        </label>
        
        <label htmlFor={`checkbox-${pro[c]}`} className = 'center'>
          <img src={URL[c]} style={{width: '50',height: '55'}} />&emsp;{pro[c]}
        </label>
 
        <label htmlFor={`checkbox-${row}`} className='right'>
          
        </label>
   
    </Ons.ListItem>

    );
  },
  renderRadioRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable2}
            onChange={this.handleVegetableChange2.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${pro2[c]}`} className = 'center'>
          <img src={URL2[c]} style={{width: '80',height: '75'}} />&emsp;{pro2[c]}
          <ons-list className='left'>
           </ons-list>
        </label>
        <label htmlFor={`checkbox-${row}`} className='right'>
        </label>
   
    </Ons.ListItem>

    );
  },
   renderRadioRow2(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='right'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable3}
            onChange={this.handleVegetableChange3.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${pro3[c]}`} className = 'center'>
          <img src={URL3[c]} style={{width: '80',height: '75'}} />&emsp;{pro3[c]}
          <ons-list className='left'>
           </ons-list>
        </label>
        <label htmlFor={`checkbox-${row}`} className='right'>
        </label>
   
    </Ons.ListItem>

    );
  },
  handleOnClick:function(){
    // "/name/{name}/date/{date}/time/{time}/type/{typeTraniner}/trainer/{traninerName}"
    var typeTraniner = this.state.selectedVegetable //ประเภทเทรนเนอร์
    var b = this.state.selectedVegetable2  // ชื่อเทรนเนอร์
    var c = this.state.selectedVegetable3 // ชื่อเทรนเนอร์
    var date = this.state.date
    var time = this.state.modifier    //time
    var name = this.state.username
    let traninerName = b||c
    date  = date.toString();
    time = time.toString();
    // const { name,school } = this.state
    // ons.notification.alert(this.state.title);
  if(name&&traninerName){
    client({method: 'GET', path: '/name/'+name+'/date/'+date+'/time/'+time+'/type/'+typeTraniner+'/trainer/'+traninerName}).done(
       ons.notification.alert('Saveed!'),
      // this.setState({name:' ',school:' '})
      )
    }else{
       ons.notification.alert('No data')
    }
},
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  },

  handleVegetableChange(vegetable) {
    this.setState({selectedVegetable: vegetable});
  },
  
  handleVegetableChange2(vegetable2) {
    this.setState({selectedVegetable2: vegetable2});
  },
  
  handleVegetableChange3(vegetable3) {
    this.setState({selectedVegetable3: vegetable3});
  },
  handleDateChange(e) {
    this.setState({date: e.target.value});
  },
  editSelects(event) {
    this.setState({modifier: event.target.value});
  },
  
  pushPage: function(navigator) {
    var a = this.state.selectedVegetable
    var b = this.state.selectedVegetable3
    var c = this.state.selectedVegetable2
   
    if(a == 'บาสเกตบอล'){
      if(page==true && page2 == true){
        navigator.pushPage({
        title: `บาสเกตบอล`,
        hasBackButton: true
        }); 
        page = false;
      }else if(page!=page2 && (b == 'Curry' || b =='James'|| b == 'Westbrook')){
        navigator.pushPage({
        title: `แสดงข้อมูลการจอง`,
        hasBackButton: false
        });
        page2 = false;num++;
      }else{
        ons.notification.alert('โปรดกดเลือกเทรนเนอร์');
      }
    }else if(a == 'ฟุตบอล'){
      if(page==true && page2 == true){
        navigator.pushPage({
        title: `ฟุตบอล`,
        hasBackButton: true
        }); 
        page = false;
      }else if(page!=page2 && (c == 'Messi' || c =='Ronaldo'|| c == 'Neymar')){
        navigator.pushPage({
        title: `แสดงข้อมูลการจอง`,
        hasBackButton: false
        });
        page2 = false;num++;
      }else{
        ons.notification.alert('โปรดกดเลือกเทรนเนอร์');
      }
    }else{
      ons.notification.alert('โปรดกดเลือกประเภทกีฬา');
    }
  },
  
  handleClick: function(navigator) {
  
    page = true,page2=true,index[0] = 0,index[1] = 0;
    ons.notification.confirm('Do you really want to go back?')
      .then((response) => {
        if (page==true && page2 == true) {
          navigator.popPage();
        }
      });
  },
  
  
  render: function() {
    return (
        <Ons.Navigator
        swipeable
        renderPage={this.renderPage}
        initialRoute={{
          title: 'เทรนเนอร์',
          hasBackButton: false
        }}
        />
    );
  }
});


ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('react'));
});