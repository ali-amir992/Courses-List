import React from 'react'

const Spinner = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
          <div class="loader"></div>
            <p>Loading...</p>
        </div>
    )
}

export default Spinner