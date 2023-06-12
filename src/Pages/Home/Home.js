import React from 'react'
import Main from '../../Components/Main/Main'
import TapsiServices from '../../Components/TapsiServices/TapsiServices'
import TabsiJobServices from '../../Components/TapsiJobServices/TapsiJobServices'
import Parallax from '../../Components/Parallax/Parallax'
import NewestTapsi from '../../Components/NewestTapsi/NewestTapsi'
import TapsiBenefits from '../../Components/TapsiBenefits/TapsiBenefits'
import Map from '../../Components/Map.js/Map'

const Home = () => {
    return (
        <div>
            <Main />
            <TapsiServices />
            <hr/>
            <TabsiJobServices />
            <Parallax />
            <TapsiBenefits />
            <NewestTapsi />
            <Map />
            
        </div>
    )
}

export default Home
