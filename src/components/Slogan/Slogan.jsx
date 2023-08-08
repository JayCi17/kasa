import Caption from "../../assets/Caption.png"

function slogan() {
    return (
        <div className="section1">
            <img src={Caption} alt="slogan" className="slogan" />
            <h2 className="sloganText">Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default slogan