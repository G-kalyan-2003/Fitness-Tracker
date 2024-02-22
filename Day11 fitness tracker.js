function addWorkout() {
    const workoutType = document.getElementById('workout-type').value;
    const calories = parseInt(document.getElementById('calories').value) || 0;
    const steps = parseInt(document.getElementById('steps').value) || 0;
    const heartRate = parseInt(document.getElementById('heart-rate').value) || 0;
    const duration = parseInt(document.getElementById('duration').value) || 0;
  
    const workoutSummary = document.getElementById('workout-summary');
    const workoutEntry = document.createElement('div');
    workoutEntry.innerHTML = `
      <strong>Workout Type:</strong> ${workoutType}<br>
      <strong>Calories Burnt:</strong> ${calories}<br>
      <strong>Steps Taken:</strong> ${steps}<br>
      <strong>Heart Rate:</strong> ${heartRate}<br>
      <strong>Duration:</strong> ${duration} minutes<hr>
    `;
    workoutSummary.appendChild(workoutEntry);
  
    // Clear input fields after adding workout
    document.getElementById('workout-type').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('steps').value = '';
    document.getElementById('heart-rate').value = '';
    document.getElementById('duration').value = '';
  }
  