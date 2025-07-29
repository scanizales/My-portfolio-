import { Link } from "react-router-dom";

const ItemNav = ({ route, img}) => {
  return (
        <li className="transition-transform duration-500 hover:translate-x-3">
            <Link  to={route}><img src={img} className="w-16 h-14 rounded-full overflow-hidden hover:border-b-2 hover:border-color-blue"></img></Link>
        </li>
  )
}

export default ItemNav;