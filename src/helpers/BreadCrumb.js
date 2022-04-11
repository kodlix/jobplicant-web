// import React from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { useHistory } from 'react-router';
// import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


const CustomBreadCrumb = () => {
    const history = useHistory();

    const paths = history.location.pathname.split('/');
    const size = paths.length;

    return (
        <div className="breadcrumb" style={{paddingLeft: '80px'}} >
            <div className="d-flex" style={{alignItems: 'center'}}>
                {
                    paths.map((path, index) => {

                        return path === ""
                            ? <span key={index} className="d-flex"><Link to="/"><i className="pi pi-home" style={{fontSize: '18px', color: '#000'}}></i></Link> {' '}{(index + 1) <= size ? <span style={{fontSize: '15px', marginLeft: '10px', marginRight: '10px'}}>/</span> : ""}</span>
                            : <span key={index}>{' '}
                                <Link to={`/${path}`}  style={{fontSize: '18px', color: '#000'}}>{path}</Link>{' '}{(index + 1) !== size ? "  " : ""}</span>
                    })
                }
            </div>
        </div>
    )
}

export default CustomBreadCrumb

// const BreadCrumbPane = (props) => {
//     console.log(props)

//     const { history, location: { pathname } } = props;

//     const items = pathname.split("/").filter(x => x);
//     console.log(items);

//     // const items = [
//     //     { label: 'Computer' },
//     //     { label: 'Notebook' },
//     //     { label: 'Accessories' },
//     //     { label: 'Backpacks' },
//     //     { label: 'Item' }
//     // ];

//     const home = { icon: 'pi pi-home', url: '/dashboard' }

//     return (
//         <div>
//             <div className="card">
//                 <div model={items} home={home} className=" d-flex  offset-1">
//                     {pathname.length > 0 ? (
//                         <Link onClick={() => history.push("/")}> Home </Link>

//                     ) : (<div>Home</div>)}
//                     {items.map((name, index) => {
//                         const routeTo = `/${items.slice(0, index + 1).join("/")}`;
//                         const isLast = index === pathname.length - 1;
//                         return isLast ? (
//                             <div> {name}</div>)
//                             : (<Link onClick={() => history.push(routeTo)}> {name} </Link>);

//                     })}
//                 </div >
//             </div>
//         </div>
//     )
// }

// export default withRouter(BreadCrumbPane)
