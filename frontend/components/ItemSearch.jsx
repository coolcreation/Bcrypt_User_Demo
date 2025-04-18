import React from 'react'

export default function ItemSearch() {
  return (
    <div className='col-11 col-md-9 col-lg-5 col-xl-4 mx-auto'>
        <form className="d-flex position-relative" role="search">
            <input className="form-control w-100 rounded-0" type="search" placeholder="Search Item" aria-label="Search" />
            <button className="btn btn-dark position-absolute end-0 rounded-0" type="submit">Search</button>
        </form>
    </div>
  )
}
