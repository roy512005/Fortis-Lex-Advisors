// @ts-nocheck
import Home from "./webPages/Home"
import Services from "./webPages/Services"
import CaseStudy from "./webPages/CaseStudy"
import About from "./webPages/About"
import Contact from "./webPages/Contact"
import Navbar from "./includeComponent/Navbar"
import { Routes ,Route, Outlet} from "react-router-dom"
import ScrollPage from "./includeComponent/ScrollPage"
import Blog from "./webPages/Blog"
import CaseStudyDetalis from "./webPages/CaseStudyDetalis"
import BlogDetails from "./webPages/BlogDetails"
import ServiceDetails from "./webPages/ServiceDetails";
import Page404 from "./webPages/404Page"
function App() {

  return (
     <>
    <ScrollPage/>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Services" element={<Services/>}/>
              <Route path="/Services/service_details" element={<ServiceDetails/>}/>
              <Route path="/CaseStudy" element={<CaseStudy/>}/>
              <Route path="/CaseStudy/CaseStudyDetails" element={<CaseStudyDetalis/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/blog_details" element={<BlogDetails/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/*" element={<Page404/>}/>
          </Routes>
          <Outlet/>
     </>
  )
}

export default App
