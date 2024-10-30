
import CategoryItem from '../category-item/categoryItem.component'
import './menu.styles.scss'
const Menu =({categories}) => 
{
    return (
           
  <div className="categories-directory">
   
  {categories.map((category)=>(
     
       <CategoryItem key ={category.id}  category={category}  /> 
    )
   )}

</div>
    )
}
export default Menu;