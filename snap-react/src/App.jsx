import Header from "./components/Header/Header"
import TextBox from "./components/TextBox/TextBox"
import ImageBox from "./components/ImageBox/ImageBox"
function App() {
  return (
    <div className="container">
      <Header/>
      <div className="hero">
        <TextBox/>
        <ImageBox/>
      </div>
    </div>
  )
}

export default App
