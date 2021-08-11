import SvgContainer from "./SvgContainer"

const SvgFlex = () => {
    return (
        <div className="p-3 svg-section row">

             <div className='col'>
                <SvgContainer/>
                <h2 className='service-text'>Trip Planning</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet, consecteture adipiscing elit. Aliquam magna tortore cras tortor,  aliquam est.</p>
            </div>

            <div className='col'>
                <SvgContainer/>
                <h2 className='service-text'>Reliable Booking</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna tortor  cras tortor,  aliquam est.</p>
            </div>

            <div className='col'>
                <SvgContainer/>      
                <h2 className='service-text'>Super Service</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna tortor cras tortor,  aliquam estre</p>
            </div>
            
        </div>
    )
}

export default SvgFlex
