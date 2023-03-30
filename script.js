const input = document.querySelector('#myInput');
const button = document.querySelector('#myButton');
const notFoundText = document.querySelector('#hiddenText');

button.addEventListener('click', function() {
    const text = input.value.trim();
    if (text === 'A56G7J-HJ87-HG786GFG-JL984UJ-FS645HC7N-M654S') {
    window.location.href = "https://drive.google.com/file/d/1weSAcYfdnimMJoVs4KRDoamr2uTC6rQy/view?usp=share_link";
    } else {
    notFoundText.style.display = 'block';
    }
});