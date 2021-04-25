import React, {useState} from 'react'
import './OfferList.css'
import OfferDetail from './OfferDetail'
import OfferListItem from './OfferListItem'

const Slide =() => {
    const [isVisible, setIsVisible] = useState(false);
    
    
    return (
        <div className="offer-list">
            <OfferDetail  setIsVisible={setIsVisible}/>
            {isVisible &&<OfferListItem  setIsVisible={setIsVisible}  /> }
            
        </div>
    )
}

export default Slide
