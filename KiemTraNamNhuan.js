function testLeapYear()
    {
        let input = +document.getElementById("year").value;

        if (input % 4 === 0)
            {
                if (input % 100 !== 0)
                    {
                        document.getElementById('result').innerText = "Kết quả: " + input + " is leap year!";
                    }
                else if (input % 100 === 0)
                    {
                        if (input % 400 !== 0)
                            {
                                document.getElementById('result').innerText = "Kết quả: " + input + " is not leap year!";
                            }
                        else
                            {
                                document.getElementById('result').innerText = "Kết quả: " + input + " is leap year!";
                            }
                    }
            }
        else
            {
                document.getElementById('result').innerText = "Kết quả: " + input + " is not leap year!";
            }
    }