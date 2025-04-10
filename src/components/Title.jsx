import React from 'react'

const Title = ({
  title1,
  title2,
  titleStyles = '',
  title1Styles = '',
  paraStyles = '',
  emoji = ''
}) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`text-3xl sm:text-4xl xl:text-5xl font-bold font-fun leading-tight ${title1Styles}`}>
        {emoji && <span className="mr-2">{emoji}</span>}
        {title1}
        <span className="text-amber-900 font-normal"> {title2}</span>
      </h2>

      <p className={`text-gray-600 mt-2 text-base sm:text-lg max-w-xl font-story ${paraStyles}`}>
        Explore the collection of books from Adakena
      </p>
    </div>
  )
}

export default Title
