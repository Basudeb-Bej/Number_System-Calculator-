  function showConversionOptions() {
            document.querySelectorAll('.conversion-options').forEach(option => {
                option.style.display = 'none';
    });
    const choice = document.getElementById('conversionType').value;
      if (choice == '1') document.getElementById('binaryOptions').style.display = 'block';
      if (choice == '2') document.getElementById('decimalOptions').style.display = 'block';
      if (choice == '3') document.getElementById('octalOptions').style.display = 'block';
      if (choice == '4') document.getElementById('hexOptions').style.display = 'block';
        }

  function convertBinary() {
    const choice = document.getElementById('binaryChoice').value;
    const binary = document.getElementById('binaryInput').value;
    let result;

     if (choice == '1') {
       result = parseInt(binary, 2).toString(10);
      } else if (choice == '2') {
          result = parseInt(binary, 2).toString(8);
      } else if (choice == '3') {
          result = parseInt(binary, 2).toString(16).toUpperCase();
      }

  document.getElementById('binaryResult').textContent = `Result: ${result}`;
  }

  function convertDecimal() {
    const choice = document.getElementById('decimalChoice').value;
    const decimal = parseInt(document.getElementById('decimalInput').value, 10);
    let result;

      if (choice == '1') {
           result = decimal.toString(2);
       } else if (choice == '2') {
           result = decimal.toString(8);
       } else if (choice == '3') {
           result = decimal.toString(16).toUpperCase();
       }

  document.getElementById('decimalResult').textContent = `Result: ${result}`;
  }

  function convertOctal() {
    const choice = document.getElementById('octalChoice').value;
    const octal = document.getElementById('octalInput').value;
    let result;

      if (choice == '1') {
          result = parseInt(octal, 8).toString(2);
      } else if (choice == '2') {
          result = parseInt(octal, 8).toString(10);
      } else if (choice == '3') {
          result = parseInt(octal, 8).toString(16).toUpperCase();
            }

  document.getElementById('octalResult').textContent = `Result: ${result}`;
        }

  function convertHex() {
    const choice = document.getElementById('hexChoice').value;
    const hex = document.getElementById('hexInput').value;
    let result;

      if (choice == '1') {
          result = parseInt(hex, 16).toString(2);
       } else if (choice == '2') {
          result = parseInt(hex, 16).toString(10);
       } else if (choice == '3') {
           result = parseInt(hex, 16).toString(8);
       }

  document.getElementById('hexResult').textContent = `Result: ${result}`;
  }
