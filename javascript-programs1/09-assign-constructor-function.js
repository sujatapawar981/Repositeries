
function Bank(bankName,location,ifscCode,branchcode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchcode=branchcode;
   
}
const yesbank= new Bank("YESBank","pune","YES000123","1233");
console.log(`Bank Name:${yesbank.bankName}||Location:${yesbank.location}||IFSC:${yesbank.ifscCode}||BRANCHCode:${yesbank.branchcode}`);  

const SBI=new Bank("SBI Bank","Mumbai","SBIooooo1","3456");
console.log(`Bank Name:${SBI.bankName}||Location:${SBI.location}||"IFSC:${SBI.ifscCode}||"Bankcode:"${SBI.branchcode}`);

const MAHA=new Bank("Bank of Maharastra","Solapur","MAHA000023","3456");
console.log(`Bank Name:${MAHA.bankName}|| location:${MAHA.location}||IFSC code:${MAHA.ifscCode}||BAnk code:${MAHA.branchcode}`);

const Axis=new Bank("Axis BANk","Delhi","UTI000345","7865");
console.log(`Bank Name:${Axis.bankName}||location:${Axis.location}||IFSC code:${Axis.ifscCode}||Bank code:${Axis.branchcode}`);


console.log("========== 3.Add data member OpenTime and 4.CloseTime");

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";

console.log("============ log the openTime and CloseTime SBI Bank ==========");

console.log(`SBI Bank Details OpenTime:${SBI.openTime},closeTime:${SBI.closeTime}`);

console.log("============ log the BankName  and CloseTime Axis Bank ==========");

console.log(`Axis Bank Details:${Axis.bankName},closeTime:${Axis.closeTime}`);

console.log("============ log the Bank Name BranchCode and openTime of YEs Bank ==========");


console.log(`YES Bank Details: Bank Name:${yesbank.bankName}, Branchcode:${yesbank.branchcode},OpenTime:${yesbank.openTime}`);
