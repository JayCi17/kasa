import starFull from "../../assets/starFull.png";
import starEmpty from "../../assets/starEmpty.png";




function Rate({ score }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rate">
            {stars.map((level) =>
                score >= level ? (
                    <img key={level.toString()} className="star" src={starFull} alt="ratingStars" />
                ) : (
                    <img key={level.toString()} className="star" src={starEmpty} alt="ratingStars" />
                )
            )}
        </div>
    )
}

export default Rate