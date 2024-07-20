const stopwatch = document.getElementById('stopwatch');
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');
        const resetButton = document.getElementById('resetButton');

        let startTime, elapsedTime = 0, timerId;

        function updateTime() {
            const time = Date.now() - startTime + elapsedTime;
            const milliseconds = time % 1000;
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 60000) % 60);
            const hours = Math.floor((time / 3600000));
            stopwatch.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
        }

        startButton.addEventListener('click', () => {
            startTime = Date.now();
            timerId = setInterval(updateTime, 10);
            startButton.disabled = true;
            stopButton.disabled = false;
            resetButton.disabled = true;
        });

        stopButton.addEventListener('click', () => {
            clearInterval(timerId);
            elapsedTime += Date.now() - startTime;
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = false;
        });

        resetButton.addEventListener('click', () => {
            elapsedTime = 0;
            stopwatch.textContent = '0:0:0:0';
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = true;
        });