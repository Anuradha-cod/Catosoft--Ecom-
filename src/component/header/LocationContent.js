import React from 'react'

const LocationContent =({setLocationView}) => {
    return (
        <div className="headerlocation-loc">
            <div><img onClick={()=>setLocationView(false)} className="header-img-loc" src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png" alt="img"/>
            <h3 className="headerlocation-loc-h">Delhi NCR</h3>
            </div>
            <div>
            <img  onClick={()=>setLocationView(false)} className="header-img-loc2" src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png" alt="img"/>
            <h3 className="headerlocation-loc-h2">Bengaluru</h3>
            </div>
        </div>
    )
}

export default LocationContent;
