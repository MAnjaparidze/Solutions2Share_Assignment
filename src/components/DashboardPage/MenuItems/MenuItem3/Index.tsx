import ReactMegaMenu from 'react-mega-menu';
import '../../../../styles/DashboardPage/MenuItems/styles.css';

const subMenuItem1 = (
    <div className='sub-menu__content'>
        <div>
            <h3>This is Header of Menu Item 3</h3>
            <ul>
                <li>Learning Portal</li>
                <li>Internal Jobs</li>
                <li>Company Store</li>
                <li>Give</li>
            </ul>
        </div>
        <div>
            <h3>My Career and Benefits 3.1</h3>
            <ul>
                <li>HRweb</li>
                <li>Benefits</li>
                <li>Learning Portal</li>
                <li>Internal Jobs</li>
                <li>Company Store</li>
                <li>Give</li>
            </ul>
        </div>
        <div>
            <h3>Travel and Experience</h3>
            <ul>
                <li>Travel</li>
                <li>Expenses</li>
                <li>Payments</li>
                <li>Us Immigration Travel</li>
            </ul>
        </div>
        <div>
            <h3>Travel and Experience</h3>
            <ul>
                <li>Travel</li>
                <li>Expenses</li>
                <li>Payments</li>
                <li>Us Immigration Travel</li>
            </ul>
        </div>
    </div>
);
const subMenuItem2 = (
    <div className='sub-menu__content'>
        <div>
            <h3>My Career and Benefits 1</h3>
            <ul>
                <li>HRweb</li>
                <li>Benefits</li>
                <li>Learning Portal</li>
                <li>Internal Jobs</li>
                <li>Company Store</li>
                <li>Give</li>
            </ul>
        </div>
        <div>
            <h3>My Career and Benefits 3.2</h3>
            <ul>
                <li>HRweb</li>
                <li>Benefits</li>
                <li>Learning Portal</li>
                <li>Internal Jobs</li>
                <li>Company Store</li>
                <li>Give</li>
            </ul>
        </div>
        <div>
            <h3>Travel and Experience</h3>
            <ul>
                <li>Travel</li>
                <li>Expenses</li>
                <li>Payments</li>
                <li>Us Immigration Travel</li>
            </ul>
        </div>
        <div>
            <h3>Travel and Experience</h3>
            <ul>
                <li>Travel</li>
                <li>Expenses</li>
                <li>Payments</li>
                <li>Us Immigration Travel</li>
            </ul>
        </div>
    </div>
);
const subMenuItem3 = (
    <div className='sub-menu__content'>
        <div>
            <h3>My Career and Benefits 1</h3>
            <ul>
                <li>HRweb</li>
                <li>Benefits</li>
                <li>Learning Portal</li>
                <li>Internal Jobs</li>
                <li>Company Store</li>
                <li>Give</li>
            </ul>
        </div>
        <div>
            <h3>My Career and Benefits 3.3</h3>
            <ul>
                <li>HRweb</li>
                <li>Benefits</li>
                <li>Learning Portal</li>
                <li>Internal Jobs</li>
                <li>Company Store</li>
                <li>Give</li>
            </ul>
        </div>
        <div>
            <h3>Travel and Experience</h3>
            <ul>
                <li>Travel</li>
                <li>Expenses</li>
                <li>Payments</li>
                <li>Us Immigration Travel</li>
            </ul>
        </div>
        <div>
            <h3>Travel and Experience</h3>
            <ul>
                <li>Travel</li>
                <li>Expenses</li>
                <li>Payments</li>
                <li>Us Immigration Travel</li>
            </ul>
        </div>
    </div>
);


const subMenuItems = [
    {
        label: 'Sub Menu 3 Item 1',
        key: 'menuItem_1_item_1',
        items: subMenuItem1,
    },
    {
        label: 'Sub Menu 3 Item 2',
        key: 'menuItem_1_item_2',
        items: subMenuItem2,
    },
    {
        label: 'Sub Menu 3 Item 3',
        key: 'menuItem_1_item_3',
        items: subMenuItem3,
    },
]

const styleConfig = {
    containerProps: { className: 'mega-menu__container' },
    menuItemProps: { className: "mega-menu__menu-item" },
    menuItemSelectedProps: { className: 'mega-menu__menu-item--active' },
    menuProps: { className: 'mega-menu__menu'},
}

export default function Index() {
    return (
        <div>
            <ReactMegaMenu
                tolerance={100}
                data={subMenuItems}
                styleConfig={styleConfig}
            />
        </div>
    )
}
