import logo from './logo.svg';
import './App.css';

function App() {
  let data = 


  [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]
    return(
      <div>
        {
          data.map((v,i)=>{
            return(
              <div> 2
                <h1>{v.name}</h1>
                <h2>{v.salary}</h2>
              </div>
            )
          }
          )
        }
      </div>
    )

    let fdata= data.filter((v,i) =>v.status === true);
    console.log(data);

    let totalprice=fdata.reduse((acc,v,i)=>acc+v.price , 0);
    console.log(totalprice);

 
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }

export default App;
