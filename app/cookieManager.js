'use client'

import { useEffect } from 'react';

const CookieManager = () => {
  // Function to set a cookie with an expiration date
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  // Function to get a cookie value by name
  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };

  useEffect(() => {
    // Check if a user ID cookie exists
    const userId = getCookie('user_id');

    // If no user ID cookie exists, generate a new one and set it to expire in 30 days
    if (!userId) {
      const newUserId = Math.random().toString(36).substring(7);
      setCookie('user_id', newUserId, 30);
    }

    // Implement tracking pixel integration here (e.g., Facebook Pixel)

  }, []);

  return null;
};

export default CookieManager;
