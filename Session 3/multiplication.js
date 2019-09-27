function timesTable()
{
     var enterNum = prompt("Please enter a number", "")
     var table = "";

     for (i=1; i<=14; i++) {
       table += i + " x " + enterNum + " = " + (i * enterNum) + "\n";
     }

     alert(table);
  }
