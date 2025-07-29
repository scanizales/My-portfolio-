import { Link } from "react-router-dom";

const ItemNav = ({ route, img}) => {
  return (
        <li className="transition-transform duration-500 hover:translate-x-3">
            <Link  to={route}><img src={img} className="w-12 h-12 rounded-full overflow-hidden hover:border-b-2 hover:border-color-blue"></img></Link>
        </li>
  )
}

export default ItemNav;