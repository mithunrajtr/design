import React from 'react'

const SidebarMenu = ({icon, title}) => {
  return (
    <div className='sidebarMenuItem'>
        <a href='#' title={title}>
            <div className='icon'>
                <img src={icon} alt={title} />
            </div>
            <div className='title'>
                {title}
            </div>
        </a>
    </div>
  )
}

export default SidebarMenu