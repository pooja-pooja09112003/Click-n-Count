
    const countEl = document.getElementById('count');
    const incBtn = document.getElementById('increment');
    const decBtn = document.getElementById('decrement');
    let count = 0;

    function updateDisplay() {
      countEl.textContent = count;
    }

    function showPopup(message) {
      alert(message);
    }

    incBtn.addEventListener('click', () => {
      count++;
      updateDisplay();
    //   showPopup('✅ Increased! New value: ' + count);
    });

    decBtn.addEventListener('click', () => {
      if (count > 0) {
        count--;
        updateDisplay();
        // showPopup('⬇️ Decreased! New value: ' + count);
      } else {
        // showPopup('🚫 Cannot go below zero!');
      }
    });
  