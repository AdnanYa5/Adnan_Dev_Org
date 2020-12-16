import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CSVTableController.getAccounts';
import {exportCSVFile} from 'c/utils';
export default class CsvDemo extends LightningElement {
    accountData;
    @wire(getAccounts)
    accountHandler({data}){
        if(data){
            console.log(data);
            this.accountData = data;
        } 
    }
    userData = [
        {
            username:"Adnan",
            age:"27",
            title:"Developer"
        },
        {
            username:"Nitin",
            age:"28",
            title:"Business Analyst"
        },
        {
            username:"Tushar",
            age:"29",
            title:"Manager"
        }
    ]

    accountHeaders = {
        Id:"Record Id",
        Name:"Name",
        AnnualRevenue:"Annual Revenue",
        Industry:"Industry",
        Phone:"Phone"
    }

    headers = {
        username:"User Name",
        age: "Age",
        title: "Title"
    }

    downloadUserDetails(){
        console.log("download triggered");
        exportCSVFile(this.headers, this.userData, "users detail");
    }

    downloadAccountDetails(){
        exportCSVFile(this.accountHeaders, this.accountData, "accounts detail");
    }
}