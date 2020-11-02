import { render } from "@testing-library/react";
import React, { component } from "react"

 class ImageCard extends component {
     tags = image.tags.split(',')

     render() {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt = "" className="w-full"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-green-500 text-xl mb-2">
                        photo by {image.user}
                    </div>
                        <ul>
                        <li>
                            <strong>Views: </strong>
                            {image.views}
                        </li>
                        <li>
                            <strong>Likes: </strong>
                            {image.likes}
                        </li>
                        <li>
                            <strong>Downloads: </strong>
                            {image.downloads}
                        </li>
                    </ul>
                </div>
            <div className="px-6 py-4">
               {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">#{tag}</span>
               ))}
            </div>
        </div>
        )
               
    }
 }
 

export default ImageCard;