import React, { useState } from 'react'

import Card from './Card'
function Dashboards() {
    let [data,setData] = useState([{
        title:"Education",
        value:"Engineering(ECE, EEE, CSE, IT, CIVIL, MECH)",
        color:"primary",
        // icon:"fa-school",
        image:"https://png.pngtree.com/thumb_back/fh260/background/20201028/pngtree-circuit-board-and-hexagons-background-hi-tech-digital-technology-and-engineering-image_441357.jpg",
        isProgress:false
    },
    {
        title:"Results",
        value:"98",
        color:"success",
        // icon:"fa-dollar-sign",
        isProgress:true
    },
    {
        title:"Placement",
        value:"90",
        color:"info",
        // icon:"fa-clipboard-list",
        isProgress:true
    },
    {
        title:"Infrastructure",
        value:"Transport, Lab, Canteen, Hostel, Hospital, Library, Play-Ground ",
        color:"warning",
        // icon:"fa-comments",
        isProgress:false
    }
])
  return <>
         <div id="content-wrapper" className="d-flex flex-column" style={{backgroundImage:`url(${'https://e0.pxfuel.com/wallpapers/318/535/desktop-wallpaper-project-manager.jpg'})`}}>
<div id="content">
    <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>


        <div className="row">
            {
                data.map((e,i)=>{
                    return <Card key={i}
                    input={e}
                    />
                })
            }
        </div>

    </div>

</div>
</div>
  </>
}

export default Dashboards