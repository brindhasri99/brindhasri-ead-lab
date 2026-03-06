
function Employee(name, basicSalary, hra = 2000, ta = 1000)
{
    this.name = name;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.ta = ta;

    
    this.calculateNetSalary = function()
    {
        let gross = this.basicSalary + this.hra + this.ta;
        let tax = gross * 0.10;
        let net = gross - tax;

        return {
            grossSalary: gross,
            taxAmount: tax,
            netSalary: net
        };
    };
}


function calculateSalary()
{
    let name = document.getElementById("name").value;
    let basic = parseFloat(document.getElementById("basic").value);

    let emp = new Employee(name, basic);

    let result = emp.calculateNetSalary();

    document.getElementById("gross").innerHTML =
        "Gross Salary: ₹ " + result.grossSalary;

    document.getElementById("tax").innerHTML =
        "Tax (10%): ₹ " + result.taxAmount;

    document.getElementById("net").innerHTML =
        "Net Salary: ₹ " + result.netSalary;
}