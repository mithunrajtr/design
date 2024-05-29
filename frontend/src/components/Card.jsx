import React from 'react'
import profileicon from "../images/icons/profile.svg";

const Card = ({item}) => {
    function stripToWords(text) {
        // Split the string by spaces to get an array of words
        const words = text.split(' ');
      
        // Take the first 100 words
        const firstWords = words.slice(0, 50);
      
        // Join the words back into a string
        return firstWords.join(' ');
      }
      
      // Example usage
      const shortText = stripToWords(item?.title);
  return (

        <div className='cardItem'>
            <div className="top">
                <img src={item?.thumbnail} alt={item?.title || "thumbnail"} />
            </div>
            <div className="bottom">
                <div className="profileicon">
                    <img src={profileicon} alt="Profile icon" />
                </div>
                <div className="content">
                    <div className="title">{shortText || ""}</div>
                    <div className="name">{item?.channel_name || ""}</div>
                </div>
            </div>
        </div>
  )
}

export default Card