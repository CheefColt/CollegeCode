import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Semester1, Semester2, Semester3, Semester4, Semester5, Semester6, Semester7, Semester8} from './Semestersimport.js'
import Home from './pages/Home.js';
import SubjectPage from './pages/SubjectPage.js';
import { UserProvider } from './userContext.js';
import { SemContextProvider, SemNumberContextProvider, SubContextConsumer, SubNumberContextConsumer } from './allContexts.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/semester1" element={ <Semester1 />}/>
      <Route path="/semester2" element={ <Semester2 />}/>
      <Route path="/semester3" element={ <Semester3 />}/>
      <Route path="/semester4" element={ <Semester4 />}/>
      <Route path="/semester5" element={ <Semester5 />}/>
      <Route path="/semester6" element={ <Semester6 />}/>
      <Route path="/semester7" element={ <Semester7 />}/>
      <Route path="/semester8" element={ <Semester8 />}/>
      <Route path="/semester3/OS" element={ <SubjectPage semester={"Semester3"} subject={"OS"} sNum={3} subNum={1}/>} />
      <Route path="/semester3/DS" element={ <SubjectPage semester={"Semester3"} subject={"DS"} sNum={3} subNum={2}/>} />      
    </Routes>
  );
}

export default App;
