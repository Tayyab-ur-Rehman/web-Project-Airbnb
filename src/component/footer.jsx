import Footer_component from "./footer_component";
import './style/footer.css'
const column1 = [
    "Help Center",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern",
    "Airbnb your home",
  ];
  
  const column2 = [
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Airbnb-friendly apartments",
    "Join a free Hosting class",
  ];
  
  const column3 = [
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Gift cards",
    "Airbnb.org emergency stays",
  ];
  
function Footer()
{

return (
<>
<div id="footerInfoContainer">
    <Footer_component title="Support"  data={column1}/>
    <Footer_component title="hosting" data={column2}/>
    <Footer_component title="airbnb" data={column3}/>
</div>


</>
)
}


export default Footer;