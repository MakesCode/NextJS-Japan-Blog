import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Container(props) {
  return (
    <div className={`layout`}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}