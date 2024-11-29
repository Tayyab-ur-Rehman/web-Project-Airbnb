import Footer_component from "./footer_component";
import './style/footer.css'
const footerData = 
[
   [ "Help Center",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern",
    "Airbnb your home",
],
  [
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Airbnb-friendly apartments",
    "Join a free Hosting class",
  ],
  
  [
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Gift cards",
    "Airbnb.org emergency stays",
  ]
];
  
function Footer()
{

return (
<>
<div id="footerInfoContainer">
   { footerData.map((column, index) => (
    <Footer_component key={index} title="Support"  data={column}/>))
}
</div>


</>
)
}


export default Footer;