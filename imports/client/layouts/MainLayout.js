import React from 'react';

const MainLayout = ({children}) => {
    console.log(children);
return (
    <div className='main-layout'>
        {children}
    </div>
)
}
export default MainLayout;
//introducing the functional stateless component
//for the purposes of creating a layout

//doesn't have a render function
//simply going to return whatever you like

//props.children