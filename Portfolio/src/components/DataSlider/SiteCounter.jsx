const SiteCounter = ({counter, text ,length}) => {
    return (
        <div className="siteCounterWrapper">
            <p className="siteCounter">{counter}<span>/ {length}- {text}</span></p>
        </div>
    )
}

export default SiteCounter