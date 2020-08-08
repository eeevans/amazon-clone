import React from 'react'
import "./ProductRating.css"
import StarIcon from "@material-ui/icons/Star"
import StarOutlined from "@material-ui/icons/StarBorderOutlined"

function Rating({rating}) {
    return (
            <div className="productRating" >
                {
                    Array.from(Array(rating),(_, i) => 
                            <StarIcon key={i} className="productRating__star" />
                        )
                }
                {
                    Array.from(Array(5 - rating), (_,i) => 
                            <StarOutlined key={i} className="productRating__star" />
                        )
                }
            </div>
    )
}

export default Rating;
