document.addEventListener('DOMContentLoaded', function() {
    const storedSubscriptions = localStorage.getItem('newsletter_subscriptions');
    
    const app = Alpine.data('adminDashboard', () => {
      return {
        subscriptions: storedSubscriptions ? JSON.parse(storedSubscriptions) : []
      };
    });
  });
  
  