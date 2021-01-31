import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () =>  {
  return (
    <ChatEngine
      height="100vh"
      projectID="fa4b3fef-e1a4-4959-9f7b-587b7b459168"
      userName="geth33"
      userSecret="123123"
      renderChatFeed= {(chatAppProps) => <ChatFeed {... chatAppProps}/>} // Render own component for entire chat feed. 
   /> 
  );
}

export default App;
