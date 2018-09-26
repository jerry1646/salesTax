var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(arr){
  var sum = 0;
  for (num of arr){
    sum += num;
  }
  return sum;
}

function taxCalc(sales, taxrate){
  return sales*taxrate;
}

function calculateSalesTax(salesData, taxRates) {
  var companies = {};
  // Loop through salesData list to access the objects
  for (companyData of salesData){
    var tax = taxRates[companyData.province];
    if (companies[companyData.name]){
      // Company already logged
      companies[companyData.name]["totalSales"] += sum(companyData.sales);
      companies[companyData.name]["totalTaxes"] += taxCalc(sum(companyData.sales),tax);
    } else{
      // Company first time shows up
      companies[companyData.name] = {totalSales: sum(companyData.sales), totalTaxes: taxCalc(sum(companyData.sales),tax)};
    }
  }
  return companies;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/