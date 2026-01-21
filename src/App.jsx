import { Routes, Route, Link } from "react-router-dom";

import WelcomeBack from "./Assignment-components/question1.jsx";
import TodayDate from "./Assignment-components/question1b.jsx";
import Hobbies from "./Assignment-components/question2.jsx";
import Button from "./Assignment-components/question3.jsx";
import Card from "./Assignment-components/question4.jsx";
import ItemList from "./Assignment-components/question5.jsx";
import Toggle from "./Assignment-components/question6.jsx";
import Counter from "./Assignment-components/question7.jsx";
import Hover from "./Assignment-components/question8.jsx";
import Submetted from "./Assignment-components/question9.jsx";
import Dropdown from "./Assignment-components/question10.jsx";
import LoginForm from "./Assignment-components/question11and12.jsx";
import OtherForm from "./Assignment-components/question13.jsx";
import MultiStepForm from "./Assignment-components/question14.jsx";
import CheckboxForm from "./Assignment-components/question15.jsx";
import About from "./Assignment-components/question16About.jsx";
import Contact from "./Assignment-components/question16Contant.jsx";
import ProductDetails from "./Assignment-components/question17.jsx";
import NotFound from "./Assignment-components/question19.jsx";
import Gasabo from "./Assignment-components/gasabo.jsx";

// import Home from "./Home";
import Blog from "./Assignment-components/question20Blog.jsx";
import Post from "./Assignment-components/question20Post.jsx";
import Counter2 from "./Assignment-components/question22b.jsx";
import ReactMemo from "./Assignment-components/question21b.jsx";
import PerformanceDemo from "./Assignment-components/question23b.jsx";
import TodoApp from "./Assignment-components/question24b.jsx";
import LiveTimeApp from "./Assignment-components/question25.jsx";
import LecturerRegistration from "./Assignment-components/question26.jsx";
import StudentRegistration from "./Assignment-components/question27.jsx";
import DriverRegistration from "./Assignment-components/question28.jsx";
import ModuleRegistration from "./Assignment-components/question30.jsx";
import BookRegistration from "./Assignment-components/question29.jsx";

// Exam preps component
import Cccontainer from "./Assignment-components/aaContainer.jsx";

function Home() {
  return (
    <div>

      <WelcomeBack />
      <TodayDate />
      <Hobbies />
      <Button text="Click Me" color="purple" />
      <Button text="Click Me Again" color="blue" />
      <Card name="John Peter" age={35} email="johnpeter@gmail.com" />
      <ItemList />
      <Toggle />
      <Counter />
      <Hover />
      <Submetted />
      <Dropdown />
      <LoginForm />
      <OtherForm />
      <MultiStepForm />
      <CheckboxForm />
      <div className="border border-black mt-20  pb-10">
        <p className="mb-10">Routing -------- Here are the pages</p>
        <p className="my-5 text-xl font-bold underline">Question 16/17</p>
        <p className=" flex gap-10 text-lg font-semibold text-purple-700 justify-center items-center">
          <Link className="hover:underline" to="/">Home</Link> |{" "}
          <Link className="hover:underline" to="/about">About</Link> |{" "}
          <Link className="hover:underline" to='/contact'>Contact</Link>  |{" "}
          <Link className="hover:underline" to='/gasabo'>Gasabo</Link>
        </p>
      </div>
      <div>
        <p className="my-5 text-xl font-bold underline">Question 17</p>
        <div className="flex gap-20 mx-10 border items-center justify-center border-black  font-semibold p-10">
          <Link className="hover:underline hover:text-purple-600" to="/product/1">Product 1</Link>
          <Link className="hover:underline hover:text-purple-600" to="/product/2">Product 2</Link>
          <Link className="hover:underline hover:text-purple-600" to="/product/3">Product 3</Link>
        </div>
      </div>
      
      <ReactMemo /> 
      <Counter2 /> 
      <PerformanceDemo />
      <TodoApp />
      <LiveTimeApp />
      <LecturerRegistration />
      <StudentRegistration />
      <DriverRegistration />
      <BookRegistration />
      <ModuleRegistration />
      <Cccontainer />
      
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gasabo" element={<Gasabo />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />

      {/* Parent blog route */}
      <Route path="/blog" element={<Blog />}>
        {/* Nested child route */}
        <Route path=":postId" element={<Post />} />
        
      </Route>
    </Routes>
  );
}
