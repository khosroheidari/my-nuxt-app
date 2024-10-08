export default function ({ store, redirect }) {
    // If the user is not authenticated, redirect to login
    if (!store.state.user) { // Adjust this according to your state management
      return redirect('/login'); // Adjust path if your login page is different
    }
  }
  