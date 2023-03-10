import React from 'react'

export const Img = ({url, styleImg}) => {
  return (
    <img className={styleImg} src={url} alt="" />
  )
}
