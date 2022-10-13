import './App.css';
import Front from "./components/Front"

function App() {
  return (
    <div className=' h-full w-full bg-cover bg-center bg-fixed bg-[url("https://images.pexels.com/photos/6434707/pexels-photo-6434707.jpeg?cs=srgb&dl=pexels-fuad-tesfaye-6434707.jpg&fm=jpg")]'>
          <div className=' flex place-content-center place-items-center z-1 bg-gradient-to-t from-zinc-900  bg-opacity-10 w-full h-screen  '>
            <Front/>
          </div>
</div> 
 );
}


export default App;


