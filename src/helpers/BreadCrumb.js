import React from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


const BreadCrumbPane = (props) => {
    console.log(props)

    const { history, location: { pathname } } = props;

    const pathnames = pathname.split("/").filter(x => x);
    console.log({ pathnames });

    // const items = [
    //     { label: 'Computer' },
    //     { label: 'Notebook' },
    //     { label: 'Accessories' },
    //     { label: 'Backpacks' },
    //     { label: 'Item' }
    // ];

    const home = { icon: 'pi pi-home', url: '/dashboard' }

    return (
        <div>
            <div className="card">
                <BreadCrumb model={pathnames} home={home} className="offset-1">
                    {pathname.length > 0 ? (
                        <Link onClick={() => history.push("/")}> Home </Link>

                    ) : (<div>Home</div>)}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathname.length - 1;
                        return isLast ? (
                            <div> {name}</div>)
                            : (<Link onClick={() => history.push(routeTo)}> {name} </Link>);

                    })}
                </BreadCrumb>
            </div>
        </div>
    )
}

export default withRouter(BreadCrumbPane)
