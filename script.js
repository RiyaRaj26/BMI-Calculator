function calculateBMI() {
    const height = document.getElementById('height').value / 100; 
    const weight = document.getElementById('weight').value;
    
    if (height && weight) {
        const bmi = (weight / (height * height)).toFixed(1);
        let message = `Your BMI is ${bmi}. `;
        
        if (bmi < 18.5) message += "You are Underweight";
        else if (bmi < 25) message += "You Have Normal weight";
        else if (bmi < 30) message += "You are Overweight";
        else message += "You are Obese";
        
        document.getElementById('result').innerHTML = message;
    } else {
        document.getElementById('result').innerHTML = "Please enter your both height and weight.";
    }
}
