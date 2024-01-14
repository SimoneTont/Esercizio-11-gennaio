import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from './Components/HeaderComp';
import ProfileComp1 from './Components/ProfileData';
function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
      </head>
      <body className='bodyBg'>
        <HeaderComp></HeaderComp>
        <main class="d-flex flex-column align-items-center">
           <ProfileComp1></ProfileComp1> 
        </main>
      </body>
    </div>
  );
}

export default App;
