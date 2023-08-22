const calculateTemp = () => {

    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const resultSelected = document.getElementById('result_diff');

    const resultTemp = result_diff.options[resultSelected.selectedIndex].value;

    
    const celToFah = (cel) => {
        let fahrenheit=((cel * 9/5) + 32).toFixed(4);
        return fahrenheit;

    }
    const celToKel = (cel) => {
        let k=((cel - 273.15) + 546.3).toFixed(4);
        return k;

    }
    
    const fahToCel = (fah) => {
        let celsius=((fah - 32) * 5 / 9).toFixed(4);
        return celsius;

    }
    const fahToKel = (fah) => {
        let Kelvin=(((fah - 32) * 5/9) + 273.15).toFixed(4);
        return Kelvin;

    }

    const  kelToCel= (cel) => {
        let celsius=(cel - 273.15).toFixed(4);
        return celsius;

    }

    const  kelToFah= (fah) => {
        let fahrenheit=(((fah - 273.15) * 9/5) + 32).toFixed(4);
        return fahrenheit;

    }


    


    if(valueTemp == 'cel')
    {
        if(resultTemp == 'fah1')
        {
            document.getElementById('result').innerHTML= celToFah(inputTemp) + " fahrenheit";
        }
        else
        {
            if(resultTemp == 'kel1')
            {
                document.getElementById('result').innerHTML= celToKel(inputTemp) + " Kelvin";
            }
            else
            {
                document.getElementById('result').innerHTML= "same unit conversion not possible";
            }
            

        }
       
    }
    else
    {
        if(valueTemp == 'fah')
        {
            if(resultTemp == 'cel1')
            {
                document.getElementById('result').innerHTML= fahToCel(inputTemp) + " Celsius";
            }
            else
            {
                if(resultTemp == 'kel1')
                {
                    document.getElementById('result').innerHTML= fahToKel(inputTemp) + " Kelvin";
                }
                else
                {
                    document.getElementById('result').innerHTML= "same unit conversion not possible";
                }
            

            }
       
        }
        else
        {
            
            if(resultTemp == 'cel1')
            {
                document.getElementById('result').innerHTML= kelToCel(inputTemp) + " Celsius";
            }
            else
            {
                if(resultTemp == 'fah1')
                {
                    document.getElementById('result').innerHTML= kelToFah(inputTemp) + " Fahrenheit";
                }
                else
                {
                    document.getElementById('result').innerHTML= "same unit conversion not possible";
                }
            

            }
       
        }
        
        
        
    }
   

}

