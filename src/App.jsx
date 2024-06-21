import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'

function App() {


  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var body = document.body;
    
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        sidebar.classList.add("closed");
        body.classList.remove("noscroll");
    } else {
        sidebar.classList.remove("closed");
        sidebar.classList.add("open");
        console.log('closed');
         body.classList.add("noscroll");
    }
    
}

  
  return (
    <>
      <Header toggleSidebar={toggleSidebar}/>
      <Main />
      <Footer />
    </>
  );
}

export default App
