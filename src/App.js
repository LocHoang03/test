import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import ProgramStudy from './container/ProgramStudy';
import WrapperContent from './container/WrapperContent';
import HeaderContact from './header/HeaderContact';
import HeaderContent from './header/HeaderContent';
import ImgHeader from './header/ImgHeader';
import ReasonContent from './container/ReasonContent';
import TeacherTeam from './container/TeacherTeam';
import CreativeSpace from './container/CreativeSpace';
import Achievement from './container/Achievement';
/* Option 2: Import via CSS */

function App() {
    return (
        <div className="App">
            <div className="header">
                <HeaderContact />
                <HeaderContent />
                <ImgHeader />
            </div>
            <div className="content">
                <WrapperContent />
                <ProgramStudy />
                <ReasonContent />
                <TeacherTeam />
                <CreativeSpace />
                <Achievement />
            </div>
        </div>
    );
}

export default App;
