public with sharing class CSVTableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
            return [Select Id, Name, AnnualRevenue, Industry, Phone from Account];

    }
}
 