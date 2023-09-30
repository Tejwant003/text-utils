import React from 'react'

export const Aleart = (props) => {
  return (

    <div style={{height:'50px'}}>
{props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{props.alert.type}</strong>{props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}
