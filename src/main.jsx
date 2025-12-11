import { createRoot } from 'react-dom/client'
import './index.css'
import Header from '../components/Header'
import App from '../components/App'
import Entry  from '../components/Entry'
import Drjimg from "./public/drj.png"


createRoot(document.getElementById('root')).render(
  <>
  <Header/>
  <main className='container'>
    <Entry
      img="https://scrimba.com/links/travel-journal-japan-image-url"
      country="Japan"
      location="https://www.google.com/maps/place/Mount+Fuji"
      name="Mount Fuji"
      date=" 12 Jan, 2023 – 24 Jan, 2023"
      etext=" Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists."
    />
    <Entry
      img="https://scrimba.com/links/travel-journal-australia-image-url"
      country="Australia"
      location="https://www.google.com/maps?q=Sydney+Opera+House"
      name="Sydney Opera House"
      date=" 27 May, 2023 - 8 Jun, 2023"
      etext=" The Sydney Opera House is a multi-venue performing arts centre in Sydney.
              Located on the banks of the Sydney Harbour, 
              it is often regarded as one of the 20th century's most famous and distinctive buildings."
    />
    <Entry
      img="https://scrimba.com/links/travel-journal-norway-image-url"
      country="Norway"
      location="https://maps.app.goo.gl/DF878WVrzyfp7pEA9"
      name="Geirangerfjord"
      date=" 01 Oct, 2024 - 18 Nov, 2024"
      etext=" The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway.
       It is located entirely in the Stranda Municipality."    
    />
    <Entry
      img={Drjimg}
      country="India"
      location="https://share.google/NBVFAaQkmaNTN7ctl"
      name="Batasia Loop"
      date=" 24 Apr, 2024 - 5 may, 2024"
      etext=" The Batasia Loop is a spiral railway created to lower the gradient of ascent of the Darjeeling 
      Himalayan Railway in Darjeeling district of West Bengal, India."    
    />
    <Entry
      img="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTC5avXX_wY1bjdr9diLS0GMt8UD20ZwuUwTr35kPZxR8-edmwOGlsnybfAXAxI3ZT6ugKKhRGJ4Btc7duaXssuZSg&s=19"
      country="Nepal"
      location="https://maps.app.goo.gl/hPMuYyj4CXVJWTvs5"
      name="Phewa Lake"
      date=" 21 Mar, 2025 - 1 Apr, 2025"
      etext=" Phewa Lake or Phewa Tal is a freshwater lake in Nepal formerly called Baidam Tal
       located in the south of the Pokhara Valley that includes Pokhara city and parts of Sarangkot and Kaskikot."    
    />
  </main>
  </> 
)
