import inquirer from "inquirer";
let data = await inquirer.prompt([
    {
        type:"list",
        name:"operations",
        message:"chose your operation",
        choices:["addition","subtraction","multiplication","division","modolus","exponent"]
    },{
        type: "number",
        name:"num1",
        message:"enter your first number"

    },{
        type:"number",
        name:"num2",
        message:"enter your second number"
    }
]).then((answer)=>{
    console.log(answer);
    switch (answer.operations) {
        case "addition":
            console.log(answer.num1+answer.num2);

            break;
        case "subtraction":
            console.log(answer.num1-answer.num2);
              
            break;
            case "multiplication":
                console.log(answer.num1*answer.num2);

                break;
                case "division":
                    console.log(answer.num1/answer.num2);

                    break;
                    case "modolus":
                        console.log(answer.num1%answer.num2);

                        break;
                        case "exponent":
                            console.log(answer.num1**answer.num2);
                            
                        
        default:
            break;
    }
    
})