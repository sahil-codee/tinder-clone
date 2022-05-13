import "./App.css";
import Header from "./Header/Header";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import TinderCards from "./TinderCards/TinderCards";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Chats from "./Chats/Chats";
import ChatScreen from "./ChatScreen/ChatScreen";

function App() {
  return (
    //BEM Naming Convention //
    <div className="app">
      <Router>
        <Routes>
        <Route
            exact
            path="/chat/:person"
            element={
            <>
            <Header backButton="/chat" />
            <ChatScreen path="/chat/:person/:messages" />
            </>
            }
          ></Route>
          <Route
            exact
            path="/chat"
            element={
            <>
            <Header backButton="/" />
            <Chats />
            </>
            }
          ></Route>
          <Route exact path="/dive"></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
