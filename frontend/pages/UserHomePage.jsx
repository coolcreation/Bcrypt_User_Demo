import React, { useEffect, useState } from 'react';

export default function UserHomePage() {
  const [userData, setUserData] = useState(null);  
  const userId = sessionStorage.getItem('_id');
  console.log("****************************************************")
  console.log(userId)

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:8000/userdashboard/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  return (
    <div className='main user-homepage p-1 p-lg-4'>
      <div className="user-homepage-container m-0">

        <div className="homepage-navbar m-0">
        {userData ? (
          <div className="text-end w-100 m-0">
              <h4 className="m-0">{userData.username}'s</h4>
              <p className="m-0">Dashboard</p>
          </div>
            ) : (
              <div className="text-end w-100 m-0">
                <h4 className="m-0">User isn't signed in</h4>
              </div>
            )}
        </div>

        <div className="homepage-body p-3">Body</div>
      </div>
    </div>
  );
}
