import React from 'react';
import ReactDOM from 'react-dom';


// simplest hi
ReactDOM.render(
  <div style={{'color':'red'}} >hi! this is react {React.version}. tutorial 1</div>,
  document.getElementById('hi')
);


//jsx, constant
function formatName(user) { return user.firstName + ' ' + user.lastName; }
const user = { firstName: 'jsx',  lastName: 'constant'};

const element = (
    <div>
      Hello2222, {formatName(user)}! 
    </div>
);                                      // () not required, but recommended to avoid auto semicolon insertion issue

ReactDOM.render(element, document.getElementById('jsx'));


//components as funcion:
function Welcome(props) {
    return (
        <div>Hello, {props.name}</div>
    );
}
const element1 = <Welcome name="Sara Chan" />;
ReactDOM.render( element1, document.getElementById('c1'));


//select
class SelectTest extends React.Component {
    //construction, ini 
    constructor(props) {
        super(props);
        
        this.state = {
            options: [
                {text:"a", value: 1},
                {text:"b", value: 2},
                {text:"c", value: 3},
                {text:"d", value: 4},
            ], 
            
            
            selectedOption: 4
        }
        
        this.selectChanged = this.selectChanged.bind(this);

    }
    
    selectChanged(event){
        this.setState({selectedOption: event.target.value})
    }

    //actual rendering 
    render() {
        return (
            <div>
                <span>selected option: {this.state.selectedOption}</span><br />  
                <select value={this.state.selectedOption} onChange={this.selectChanged} >
                    {this.state.options.map( (option, index)=>{ return <option key={'option_'+option.value} value={option.value}  > {option.text}</option> } )}
                </select>
            </div>
        );
    }
}
ReactDOM.render(<SelectTest />, document.getElementById('select_one'));



// checkbox
class CheckboxTest extends React.Component {
    //construction, ini 
    constructor(props) {
        super(props);
        
        this.state = {
            checked: false
        }
        
        this.checkboxChanged = this.checkboxChanged.bind(this);

    }
    
    checkboxChanged(event){
        this.setState({checked: event.target.checked})
    }

    //actual rendering 
    render() {
        return (
            <div>
                <span>checked: {this.state.checked? "checked": "not checked"}</span><br />  
                
                <input type="checkbox" checked={this.state.checked} onChange={this.checkboxChanged} />
            </div>
        );
    }
}
ReactDOM.render(<CheckboxTest />, document.getElementById('checkbox_one'));



//event with additional parameters
class EventTest extends React.Component {
    //construction, ini 
    constructor(props) {
        super(props);
        
        this.state = {
            settingsObj:{
                active: false,
                name: '',
                address: '',
                
            }
        }
        
        this.inputChanged = this.inputChanged.bind(this);

    }
    
    inputChanged(type, e){
    
        var settingsObj = Object.assign({}, this.state.settingsObj);
        settingsObj[type] = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
        this.setState({settingsObj:settingsObj });
  
    }

    //actual rendering 
    render() {
        return (
            <div>
                <span>event with parameters: active: {this.state.settingsObj.active?1:0},  name:{this.state.settingsObj.name}, address:{this.state.settingsObj.address}, </span><br />  
                
                active: <input type='checkbox' className='field_text'  checked={this.state.settingsObj.active} onChange={(e)=>this.inputChanged('active', e)} /><br />
                name: <input type='text' className='field_text'   onChange={(e)=>this.inputChanged('name', e)} /><br />
                address: <input type='text' className='field_text'   onChange={(e)=>this.inputChanged('address', e)} /><br />
            </div>
        );
    }
}
ReactDOM.render(<EventTest />, document.getElementById('event_one'));





//componets as ES6 class
class Clock extends React.Component {
    //construction, ini 
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //beginning of rendering
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    //about to be removed from dom
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //helper functions
    tick() {
        this.setState({date: new Date()});
    }

    //actual rendering 
    render() {
        return (
            <div>
              <div>It is now {this.state.date.toLocaleTimeString()}.</div>
            </div>
        );
    }
}

ReactDOM.render(<Clock />,document.getElementById('clock'));



//event
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback !!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
    }

    render() {
        return (
            <div>    
                Toggle On/Off: &nbsp; &nbsp; 
                <button onClick={this.handleClick}>
                  {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>    
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('toggle'));

//ref
class RefTest1 extends React.Component {
    constructor(props) {
        super(props);
        this.name_txt = React.createRef();
        this.name_span = React.createRef();
        this.nameChanged = this.nameChanged.bind(this);
    }

    nameChanged(){
        this.name_span.current.innerHTML = 'name is: ' + this.name_txt.current.value
    }
    

    render(){ 
        return (
            <div>
                Reference simple dom: 
                <input type='text' ref={this.name_txt} onChange={this.nameChanged} />
                <span ref={this.name_span} style={{'marginLeft':'5px'}}></span>
            </div>
        )
    }
}
ReactDOM.render(<RefTest1 />, document.getElementById('ref_1'));


class RefTest2 extends React.Component {
    constructor(props) {
        super(props);
        this.component1 = React.createRef();
    }

    componentDidMount() {
        this.component1.current.nameChanged();
    }
    
    render(){ 
        return (
            <RefTest1 ref={this.component1}/>
        )
    }
}
ReactDOM.render(<RefTest2 />, document.getElementById('ref_2'));


//controlled form
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                  <div style={{border: '1px solid red', display:'inline-block'}}>  
                    Controlled form: text:{this.state.value} <br />
                    <label>
                      Name:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
                );
    }
}

ReactDOM.render(<NameForm />, document.getElementById('controlled_form'));




//uncontrolled form
class UncontrolledForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.name_txt = React.createRef();
        this.address_txt = React.createRef();
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        let msg = 'values submitted: name: ' + this.name_txt.current.value;
        msg += ', address: ' + this.address_txt.current.value;
        msg += ", file: " + this.fileInput.current.files.length + ' files uploaded. ' + (this.fileInput.current.files.length>0?this.fileInput.current.files[0].name:'');
        alert(msg);
        event.preventDefault();
        console.log(this.fileInput.current.files);
        
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                  Uncontrolled form and Ref: <br />
                  <label>
                    Name:
                    <input type="text" ref={this.name_txt} />
                  </label>
                  <label>
                    address:
                    <input type="text" ref={this.address_txt} />
                  </label>
                  <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
                );
    }
}

ReactDOM.render(<UncontrolledForm />, document.getElementById('uncontrolled_form'));


// list of ten things
function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));		// props.children is a function.
  }
  return <div>{items}</div>;
}

ReactDOM.render(<ListOfTenThings />, document.getElementById('list10'));

// ************ product table  ****************
class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value,
      this.inStockOnlyInput.checked
    );
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref={(input) => this.inStockOnlyInput = input}
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('product_table')
);
