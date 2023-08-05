function host(props) {
    return (
        <aside className="host">
            <div className="hostName">{props.hostName}</div>
            <div className="hostPicture"><img src={props.hostPic} alt={props.id} /></div>
        </aside>
    )
}

export default host