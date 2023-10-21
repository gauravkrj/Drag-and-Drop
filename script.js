let draggedDisk = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedDisk = event.target;
}

function drop(event) {
  event.preventDefault();

  if (event.target.className === 'peg') {
    event.target.appendChild(draggedDisk);
  } else {
    const destinationPeg = event.target;
    const disks = destinationPeg.querySelectorAll('.disk');

    if (disks.length === 0 || parseInt(draggedDisk.innerText) < parseInt(disks[disks.length - 1].innerText)) {
      destinationPeg.appendChild(draggedDisk);

      // Check for winning condition after each move
      checkWin();
    }
  }

  draggedDisk = null;
}
// Hide the congratulations message
const congratulations = document.getElementById('congratulations');
congratulations.classList.add('hidden');
// Function to restart the game
function restartGame() {
  const pegA = document.getElementById('pegA');
  const pegB = document.getElementById('pegB');
  const pegC = document.getElementById('pegC');

  // Reset pegs to initial state
  pegA.innerHTML = `<div class="disk" id="disk3" draggable="true" ondragstart="drag(event)">3</div>
                    <div class="disk" id="disk2" draggable="true" ondragstart="drag(event)">2</div>
                    <div class="disk" id="disk1" draggable="true" ondragstart="drag(event)">1</div>`;

  pegB.innerHTML = '';
  pegC.innerHTML = '';

  
  
}

// Function to check for winning condition
function checkWin() {
  const pegC = document.getElementById('pegC');
  const disks = pegC.querySelectorAll('.disk');

  // If all three disks are on peg C, show congratulations message
  if (disks.length === 3) {
    alert('Congratulations! You won!');
  }
}


