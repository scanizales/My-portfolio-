import ItemNav from './ItemNav';

const Nav = ({itemsMenu}) => {
  return (
            <nav className="nav px-4 py-4 min-w-[70px]" style={{ background: 'var(--bg-nav)' }}>
                <ul>
                    {itemsMenu.map((item, index) => (
                        <ItemNav key={index} route={item.route} img={item.img}/>
                    ))}   
                </ul>
            </nav>
  )
}

export default Nav;