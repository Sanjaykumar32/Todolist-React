$(".btn").click(function () {
  var Nam = $("#Nam").val();
  var totalSalary = $("#select").val();
  var rupay = $("#rupay").val();

  if (Nam > "0" && rupay > "0" && credit > "0") {
    var newTable = `<tr>
                  <td >${Nam}</td>
                   <td>${rupay}</td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>`

  }
 
  $("#table").append(newTable);
  $("#salary").val('');
  $("#rupay").val('');

})

 // if (totalSalary == Salary) {
    
  // }
  // if (totalSalary == credit) {
  //   $("#table").append(newTable)
  // }

// input plus and delete :--

$(".bttn").click(function () {
  var value = ` <div class="input2"> 
                         <input type="text" class="input2">
                         <button class="btn2">-</button>
                  </div> `
  $(".text").append(value)
  $(".btn2").click(function () {
    $(this).parent().remove()
  })


})
