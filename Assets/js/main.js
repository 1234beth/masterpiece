function getFormInput(){
    var date = document.getElementById('dateInput').value
    const male = document.getElementById("maleRadio");
    const female = document.getElementById("femaleRadio");
    var dayIndex = new Date(date).getDay();
  
        //This one evaluates for the day of the week based on the day index
        const getDayName = (dayIndex) =>{
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[dayIndex];
        }
        const dayName = getDayName(dayIndex)
  
        //This code block evaluates for the Male Akan Name based on the dayindex above.
        const getMaleName = (dayIndex)=>{
           const names = ['jan-mar','apr-jun','july-september','oct-dec','oct-dec','oct-dec','oct-dec']  
                     return names[dayIndex];
        }
  
        //This code block evaluates for the Feale Akan Name based on the dayindex above.
       const getFemaleName = (dayIndex)=>{
            const names = ['jan-mar','apr-jun','july-september','oct-dec','oct-dec','oct-dec','oct-dec']
            return names[dayIndex];
        }
        
  
  
        if(male.checked){
            var gender = 'Male'
           var Name = getMaleName(dayIndex)
  
        }else if(female.checked){
            var gender = 'Female'
            var akanName = getFemaleName(dayIndex)
        }
  
        //Display Akan Name
        console.log(Name)
  
        document.getElementById('displayName').innerHTML ='<div class="alert alert-dark" role="alert"> congratulations! <br> Your session will be on: <span class="text-info">'+Name+'</span>  Date of intake is on a <span class="text-info">'+dayName+'</span> </div>'
  
  
  }


