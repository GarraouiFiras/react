

 import Menu from '../../components/directory-menu/menu.component';

import {Outlet} from 'react-router-dom';

const Home =() => {
    const categories=[

        {
          id:1,
          title:"Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id:2,
          title:"Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id:3,
          title:"Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id:4,
          title:"Women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
          id:5,
          title:"Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        }
    
      ]

return(
   <div>
    < Menu  categories={categories}/>
    
    < Outlet />
   </div>

    
);

}

export default Home;



