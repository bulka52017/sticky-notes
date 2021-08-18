import { AppContainer, Controls } from './App.styles';
import Board from './components/board/Board.component';
import Button from './components/button/Button.component';

function App() {
    return (
        <AppContainer>
            <Controls>
                <Button bgColor='rgb(255, 229, 76)'>Add note ✏️</Button>
                <Button bgColor='red'>Do kickflip</Button>
            </Controls>
            <Board />
        </AppContainer>
    );
}

export default App;
