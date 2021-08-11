const CardActivationBtn = ({onPreviousClick, onNextClick, styleState}) => {
    
    return (
        <div className='activate-cards'>  
            <div className='next-btn' onClick={onPreviousClick}>
                <svg width={styleState ? "45" : '76'} height={styleState === 'prev-style' ? "22" : '28'} viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.625 11L11.4861 2.75M2.625 11H42.5H2.625ZM2.625 11L11.4861 19.25L2.625 11Z" stroke={!styleState === 'prev-style' ? "#808080" : 'red'} stroke-width={!styleState ? "4" : '5'} stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            {/* viewBox="0 0 76 28"  */}
            {/* d="M72.375 14L57.0972 3M72.375 14H3.625H72.375ZM72.375 14L57.0972 25L72.375 14Z"  */}
            <div className='previous-btn' onClick={onNextClick}>
                <svg width={styleState ? "45" : '76'} height={styleState ? "22" : '28'} viewBox="0 0 76 28"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.375 14L57.0972 3M72.375 14H3.625H72.375ZM72.375 14L57.0972 25L72.375 14Z"   stroke={styleState ? "#808080" : 'red'} stroke-width={styleState ? "4" : '5'} stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>  
        </div>
    )
}

export default CardActivationBtn
