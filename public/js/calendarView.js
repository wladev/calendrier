function initFormulaire() {
    document.getElementById("formEvent").onsubmit = valider
  
  } /// initFormulaire
  
    
    function valider(event) {
      console.log(event)
      event.preventDefault()
      let libelle = document.getElementById("libelle").value.trim()
      if (libelle != "") {
        document.getElementById("formEvent").submit()
      } else {
        document.getElementById("lblMessage").innerHTML = "Toutes les saisies sont obligatoires"
      }
    }
  
  
    
    
    //number of days per months
    let day = new Date
    let nbrOfDays = 0
    if(day.getMonth() == 0 || day.getMonth() == 2 || day.getMonth() == 4 || day.getMonth() == 6 || day.getMonth() == 7 || day.getMonth() == 9 || day.getMonth() == 11){
     nbrOfDays = 31
    }else{
      if(day.getMonth() == 3 || day.getMonth() == 5 || day.getMonth() == 8 || day.getMonth() == 10){
      nbrOfDays = 30
    }else{
      if(day.getMonth == 1 && day.getFullYear %4 == 0){
      nbrOfDays = 28
    }else{
      nbrOfDays = 29
    }
    }
  }
  
  
  
  let mois = new Array()
  mois[0] = "Janvier"
  mois[1] = "Février"
  mois[2] = "Mars"
  mois[3] = "Avril"
  mois[4] = "Mai"
  mois[5] = "Juin"
  mois[6] = "Juillet"
  mois[7] = "Aout"
  mois[8] = "Septembre"
  mois[9] = "Octobre"
  mois[10] = "Novembre"
  mois[11] = "Décembre"
  let m = new Date()
  let moisEcrit = ""
  btnNextMonth = document.getElementById("browseNextMonth")
  btnNextMonth.addEventListener('click', ()=>{document.getElementById("currentMonth").innerHTML = mois[m.getMonth()+1]})
//   if(document.getElementById("browseNextMonth").onclick){
    moisEcrit = mois[m.getMonth()]
//   }else{moisEcrit = mois[m.getMonth()]}
//   console.log(mois[m.getMonth()+1]);
  console.log(moisEcrit);
  document.getElementById("currentMonth").innerHTML = moisEcrit
  document.getElementById("currentYear").innerHTML = m.getFullYear()
  
  
   //
    function getDivBtnNumDays(days){
      for (let i = 1; i <= days; i++) {
        let monthId = (m.getMonth()+1)
        if(monthId < 10){
            monthId = "0" + monthId
        }
        let dayId = ""
        if(i <  10){
            dayId = "0"+ i
        }else{
            dayId = i
        }
        let div = document.createElement("div")
        var button = document.createElement("button")
        button.type = "button"
    button.className = "dayBtn"
    button.id = m.getFullYear() +"-" + monthId +"-"+ dayId
    button.innerHTML = i
    button.addEventListener("click", ()=>{document.getElementById("myEvent").style.display = "block"})
    div.className = "day"
    div.id = i 
    div.appendChild(button) 
    document.getElementById("month").appendChild(div)
    
      }
  
      //----- MODAL
  // Get the modal
    var modal = document.getElementById("myEvent");
    
    // // Get the button that opens the modal
    btn = document.getElementById(button.id);
    
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // init and display current date into event from
    const d = new Date()
    let getMonthNow = d.getMonth()+1
    // Add 0 on dates < 10
      if(getMonthNow <10){
        let dayNow = d.getDate()
        if(d.getDate()<10){
            dayNow = "0" + d.getDate()
        }
      let date = d.getFullYear() +"-0"+  getMonthNow + "-" + dayNow 
      document.getElementById("beginDate").value = date
      document.getElementById("endDate").value = date
    }else{
      let date = d.getFullYear() +"-"+  getMonthNow + "-" + d.getDate()
      document.getElementById("beginDate").value = date
      document.getElementById("endDate").value = date
    }
  
    // init and display current hour into event from
    const h = new Date()
    if(h.getHours() < 10){
      var hour = "0"+ h.getHours()
    }else{
      hour = h.getHours()
    }
    if(h.getMinutes() < 10){
      var minutes = "0"+ h.getMinutes()
    }else{
      minutes = h.getMinutes()
    }
    let hourNow = hour +":"+ minutes
    let oneMoreHour = h.getHours()+1
    let hourAddOne = oneMoreHour +":"+ minutes
    document.getElementById("beginHour").value = hourNow
    document.getElementById("endHour").value = hourAddOne
    
  }
  // let monthDays = new Array()
  //   monthDays[mois] = nbrOfDays
  //   console.log(monthDays);
  
  
    // let displayedMonth = document.getElementById("currentMonth").innerHTML
    // console.log(displayedMonth);
  
  
  //  document.getElementById("browseNextMonth").addEventListener("click", ()=>{mois[mois+1]})
  
  
  
  
  window.onload = getDivBtnNumDays(nbrOfDays)
  window.onload = initFormulaire