async function joinRaffle() {
  const name = prompt('Enter your name:');
  const email = prompt('Enter your email:');
  
  if (!name || !email) {
    alert("Name and email are required.");
    return;
  }

  try {
    const response = await fetch('/api/raffle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    const result = await response.json();
    alert(result.message);
  } catch (err) {
    alert('An error occurred. Please try again.');
  }
}
