import { driver } from 'driver.js';
import { useEffect, useState } from 'react';

const TOUR_STORAGE_KEY = 'navbar-tour-completed';

export const useNavbarTour = () => {
  const [tourCompleted, setTourCompleted] = useState(false);

  useEffect(() => {
    // Check if tour has been completed before
    const completed = localStorage.getItem(TOUR_STORAGE_KEY);
    setTourCompleted(completed === 'true');
  }, []);

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '[data-tour="logo"]',
          popover: {
            title: 'Welcome to Digital Wallet!',
            description: 'This is your digital wallet application. Click on the logo to return to the home page anytime.',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '[data-tour="navigation"]',
          popover: {
            title: 'Navigation Menu',
            description: 'Use these links to navigate through different sections of the application like Home, About, Features, and more.',
            side: 'bottom',
            align: 'center'
          }
        },
        {
          element: '[data-tour="mobile-menu"]',
          popover: {
            title: 'Mobile Menu',
            description: 'On mobile devices, click this hamburger menu to access all navigation options.',
            side: 'bottom',
            align: 'start'
          }
        },
        {
          element: '[data-tour="theme-toggle"]',
          popover: {
            title: 'Theme Toggle',
            description: 'Switch between light and dark themes to customize your viewing experience.',
            side: 'bottom',
            align: 'end'
          }
        },
        {
          element: '[data-tour="user-menu"]',
          popover: {
            title: 'User Menu',
            description: 'Access your account settings, profile, and other user-specific options here.',
            side: 'bottom',
            align: 'end'
          }
        },
        {
          element: '[data-tour="tour-button"]',
          popover: {
            title: 'Tour Guide',
            description: 'Click this button anytime to restart this guided tour and learn about the features again.',
            side: 'left',
            align: 'center'
          }
        }
      ],
      onDestroyed: () => {
        // Mark tour as completed when it's finished
        localStorage.setItem(TOUR_STORAGE_KEY, 'true');
        setTourCompleted(true);
      }
    });

    driverObj.drive();
  };

  const resetTour = () => {
    localStorage.removeItem(TOUR_STORAGE_KEY);
    setTourCompleted(false);
    startTour();
  };

  // Auto-start tour on first visit
  useEffect(() => {
    if (!tourCompleted) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        startTour();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [tourCompleted]);

  return {
    tourCompleted,
    startTour,
    resetTour
  };
};
