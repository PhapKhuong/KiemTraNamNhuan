function testLeapYear()
    {
        let input = +document.getElementById("year").value;
        let isLeapYear = false;

        if (input % 4 === 0)
            {
                if (input % 100 === 0)
                    {
                        if (input % 400 === 0)
                            {
                                isLeapYear = true;
                            }
                    }
                else isLeapYear = true;
            };

        if (isLeapYear)
            {document.getElementById('result').innerText = "Kết quả: " + input + " is not leap year!";}
        else
            {document.getElementById('result').innerText = "Kết quả: " + input + " is leap year!";}

    }