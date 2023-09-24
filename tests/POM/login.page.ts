import { Page,Locator } from "@playwright/test";
export class loginPage{

readonly page:Page;
readonly userfield:Locator;
readonly passfield:Locator;
readonly logbtn:Locator;
constructor(page:Page)
{
   this.page=page;
   this.userfield=page.getByPlaceholder('User Name');
   this.passfield=page.getByPlaceholder('Password');
   this.logbtn=page.getByRole("button",{name: 'Login' });
}

async login_to_DotCare(username:string,password:string){ 
   // await this.userfield.isDisabled();
   await this.userfield.click();
   await this.userfield.fill(username);
   await this.passfield.click();
   await this.passfield.fill(password);
   await this.logbtn.click();


}

async Nav_to_Dotcare(baseurl:string){
    await this.page.goto(baseurl);
   
}


}
